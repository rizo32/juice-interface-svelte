<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import { darkMode } from '$stores';

	const list = [
		'Indie artists, devs, creators',
		'Ethereum protocols and DAOs',
		'Public goods and services',
		'Open source businesses'
	];
</script>

<section>
	<article>
		<h1><Trans message="Community funding for people and projects" /></h1>
		<p>
			<Trans>
				Build a community around a project, fund it, and program its spending. Light enough for a
				group of friends, powerful enough for a global network of anons.
			</Trans>
		</p>
		<p>
			<Trans message={'Powered by public smart contracts on'} />
			<a href="https://ethereum.org/en/what-is-ethereum/">Ethereum</a>.
		</p>
		<br />
		<p class="sub-header">Built for:</p>
		{#each list as item}
			<div class="item">
				<img src="/images/bolt.png" alt="⚡️" />
				<p>
					<Trans>
						{item}
					</Trans>
				</p>
			</div>
		{/each}
		<a href="/create">
			<Button>
				<Trans>Design your project</Trans>
			</Button>
		</a>
	</article>
	<img
		id="banny"
		src={$darkMode ? '/images/banana-od.png' : '/images/banny.png'}
		alt="Banny partying with code"
	/>
</section>

<style>
	h1 {
		color: var(--text-header);
		font-size: 2.4rem;
		line-height: 1.2;
		font-weight: 800;
		margin-block-start: 1em;
		margin-block-end: 1em;
	}

	section {
		max-width: 1080px;
		margin: 0px auto;
		/* The header height */
		margin-top: 68px;
		padding: 0px 40px;
		display: flex;
		align-items: center;
		flex-flow: row wrap;
		justify-content: center;
	}

	article {
		flex: 0 0 54%;
		max-width: 54%;
	}

	a {
		color: var(--text-color);
		text-decoration: none;
		border-bottom: 1px solid var(--text-action-primary);
	}

	p {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.57;
	}

	#banny {
		min-height: 300px;
		/* max-width: 100%; */
		object-fit: contain;
		display: block;
		flex: 0 0 46%;
		max-width: 46%;
	}

	.sub-header {
		color: var(--text-header);
		font-size: 14px;
	}

	.item {
		display: flex;
		align-items: center;
		margin: 0px 10px;
	}

	.item img {
		height: 24px;
		margin-right: 1em;
	}

	.item p {
		font-style: italic;
		font-weight: 600;
		font-size: 14px;
		margin: 0.2em;
	}

	@media (max-width: 640px) {
		article {
			flex: 0 0 100%;
			max-width: 100%;
		}
		#banny {
			min-width: 300px;
		}
	}
</style>
