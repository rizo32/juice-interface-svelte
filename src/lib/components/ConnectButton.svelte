<script>
	import { connectedAccount, disconnectWallet, walletConnect } from '$stores/web3';
	import Icon from '$lib/components/Icon.svelte';
	import { getEthBalance } from '$data/eth';
	import { getTruncatedAddress } from './Address.svelte';
	import EthAmount from './ETHAmount.svelte';
	import Trans from './Trans.svelte';

	let opened = false;
</script>

{#if $connectedAccount}
	<div class="ant-space-item" style="position: relative;">
		<div
			class="ant-dropdown-trigger"
			style="height: 45px; border-radius: 2px; padding: 4px 19px 7px; display: flex; flex-direction: column; align-items: center; background: var(--background-l2);  user-select:none;cursor: pointer"
			on:click={() => (opened = !opened)}
		>
			<span style="line-height: 22px;">
				{getTruncatedAddress($connectedAccount)}
			</span>
			<div style="vertical-align: middle; line-height: 1; color: var(--text-tertiary);">
				{#await getEthBalance($connectedAccount)}
					<Icon name="loading" spin />
				{:then amount}
					<EthAmount {amount} precision={2} />
				{/await}
			</div>
		</div>
		{#if opened}
			<div style="position: absolute; top: 50px; left: 0px; width: 100%;">
				<div>
					<div
						class="ant-dropdown ant-dropdown-placement-bottomRight"
						style="padding: 0px; min-width: 164px; left: 0; top: 0;"
					>
						<ul
							class="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light"
							role="menu"
							tabindex="0"
							data-menu-list="true"
						>
							<li
								class="ant-dropdown-menu-item"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-56979-2-0"
								style="padding: 10px 15px;"
							>
								<span class="ant-dropdown-menu-title-content"
									><a
										class="hover-action"
										href="https://etherscan.io/address/{$connectedAccount}"
										target="_blank"
										rel="noopener noreferrer"
										style="font-weight: 400;"
										>{$connectedAccount.slice(0, 6)}...{$connectedAccount.slice(-4)}</a
									>
									<span role="img" aria-label="copy" tabindex="-1"><Icon name="copy" /></span></span
								>
							</li>
							<li
								class="ant-dropdown-menu-item"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-56979-2-1"
								style="padding: 10px 15px; color: var(--text-primary) display: flex; justify-content: space-between;"
							>
								<span
									class="ant-dropdown-menu-title-content"
									on:click={() => ((opened = false), disconnectWallet())}
								>
									<Trans>Disconnect</Trans>
									<span role="img" aria-label="logout" style="padding-left: 25px;">
										<Icon name="logout" />
									</span>
								</span>
							</li>
						</ul>
						<div aria-hidden="true" style="display: none;" />
					</div>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<div class="ant-space-item">
		<button type="button" class="ant-btn" on:click={() => walletConnect()}>
			<Trans>Connect</Trans>
		</button>
	</div>
{/if}
