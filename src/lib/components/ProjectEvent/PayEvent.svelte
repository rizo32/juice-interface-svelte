<script lang="ts">
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import ETHAmount from '$lib/components/ETHAmount.svelte';
	import { formatHistoricalDate } from '$utils/formatDate';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';
	import EtherscanLink from '$lib/components/EtherscanLink.svelte';
	import type { PayEvent } from '$models/subgraph-entities/vX/pay-event';

	export let event: Partial<PayEvent>;
</script>

<InfoSpaceBetween>
	<div slot="left">
		<p><small>Paid</small></p>
		<div class="amount">
			<ETHAmount amount={event.amount} precision={4} />
		</div>
	</div>
	<div slot="right">
		<p class="timestamp">
			{event.timestamp && formatHistoricalDate(event.timestamp * 1000)}
			<EtherscanLink value={event.txHash} type="tx" />
		</p>
		<!-- TODO formatted address with ENS, look at FormattedAddress.tsx -->
		{#if event.beneficiary}
			<p class="address">{getTruncatedAddress(event.beneficiary)}</p>
		{/if}
	</div>
</InfoSpaceBetween>
