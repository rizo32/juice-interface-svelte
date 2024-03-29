<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ETH from '$lib/components/Ethereum.svelte';
	import CurrencyInput from '$lib/components/CurrencyInput.svelte';
	import { formatWad } from '$utils/formatNumber';
	import { parseEther } from '@ethersproject/units';
	import { Currency, CurrencyName } from '$constants';
	import { BigNumber } from 'ethers';
	import { getCurrencyConverter, getWeiConverter } from '$data/currency';
	import { tokenSymbolText } from '$utils/tokenSymbolText';
	import type { WeightFunction } from '$utils/math';

	export let disabled = false;
	export let onClick: (weiAmount: BigNumber) => void;
	export let payButton: string = 'Pay';
	export let payInCurrency: Currency = Currency.ETH;
	export let reservedRate: number;
	export let token: string = 'tokens';
	export let weight: BigNumber;
	export let weightingFn: WeightFunction;

	let currency = Currency.ETH;
	let receiveText = 'Receive 1,000,000 tokens/1 ETH';
	let amount: number = 0;
	let formattedETHAmount: string;

	const converter = getCurrencyConverter();

	function onPay() {
		let weiAmount: BigNumber;
		if (currency == Currency.ETH) {
			weiAmount = parseEther(amount.toString());
		} else {
			weiAmount = parseEther(formattedETHAmount);
		}
		onClick(weiAmount);
	}

	function getReceiveText(payInCurrency: Currency) {
		const formatReceivedTickets = (wei: BigNumber) => {
			const exchangeRate = weightingFn(weight, reservedRate, wei, 'payer');
			return formatWad(exchangeRate, { precision: 0 });
		};

		let weiPayAmt = getWeiConverter({
			currency: payInCurrency,
			amount: amount?.toString()
		});

		if (weiPayAmt?.gt(0)) {
			const receivedTickets = formatReceivedTickets(weiPayAmt);
			const tokenReceiveText = tokenSymbolText({
				tokenSymbol: token,
				capitalize: false,
				plural: receivedTickets !== '1'
			});

			return `Receive ${receivedTickets} ${tokenReceiveText}`;
		}

		const receivedTickets = formatReceivedTickets(
			(payInCurrency === Currency.ETH ? parseEther('1') : converter.usdToWei('1')) ??
				BigNumber.from(0)
		);

		const tokenReceiveText = tokenSymbolText({
			tokenSymbol: token,
			capitalize: false,
			plural: receivedTickets !== '1'
		});

		return `Receive ${receivedTickets} ${tokenReceiveText}/1 ${CurrencyName[payInCurrency]}`;
	}

	$: {
		receiveText = getReceiveText(currency);
		const ETHAmount = converter.usdToWei(amount?.toString());
		formattedETHAmount = formatWad(ETHAmount, {
			precision: 9
		});
	}
</script>

<div class="wrapper">
	<div class="stacked expand">
		<CurrencyInput bind:currency bind:inputValue={amount} />
		<small>{receiveText}</small>
	</div>
	<div class="stacked">
		<!-- TODO need input from pay button, pass in onClick -->
		<Button {disabled} size="md" on:click={onPay}>{payButton}</Button>
		{#if currency === Currency.USD}
			<small>Paid as <ETH />{formattedETHAmount}</small>
		{/if}
	</div>
</div>

<style>
	.wrapper {
		margin: 40px 0;
		display: flex;
	}

	.expand {
		flex: 1;
		margin-right: 10px;
	}

	.stacked {
		display: flex;
		flex-direction: column;
	}

	.stacked:last-of-type {
		text-align: center;
	}
</style>
