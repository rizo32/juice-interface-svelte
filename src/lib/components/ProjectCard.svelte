<script lang="ts">
	import { onMount } from 'svelte';
	import * as constants from '@ethersproject/constants';
	import { archivedProjectIds } from '$constants/v1/archivedProjects';
	import { formatDate } from '$utils/formatDate';
	// import { getTerminalVersion } from '$utils/v1/terminals';
	import type { ProjectMetadataV4 } from '$models/project-metadata';
	import type { Project } from '$models/subgraph-entities/project';
	import { getProjectMetadata } from '$data/project';

	import Icon from '$lib/components/Icon.svelte';
	import EthAmount from './ETHAmount.svelte';
	import Popover from './Popover.svelte';

	export let project: Project;

	let loading = true;
	let metadata: ProjectMetadataV4;

	onMount(async () => {
		metadata = await getProjectMetadata(project.uri);
		loading = false;
	});

	// If the total paid is greater than 0, but less than 10 ETH, show two decimal places.
	const precision = project.totalPaid?.gt(0) && project.totalPaid.lt(constants.WeiPerEther) ? 2 : 0;
	// const terminalVersion = getTerminalVersion(project.terminal);
	const isArchived = archivedProjectIds.includes(project.id.toNumber()) || metadata?.archived;
</script>

<li>
	{#if loading}
		<div class="loading">
			{project.handle}
			<Icon name="loading" spin={true} />
		</div>
		<Icon name="loading" spin />
	{:else}
		<img src={metadata.logoUri} alt="The project logo" />
		<section>
			<h1>{metadata.name}</h1>
			<div>
				<span class="handle">
					@{project.handle}
				</span>
				<!-- <span class="version">
					V{terminalVersion}
				</span> -->
			</div>
			<EthAmount amount={project.totalPaid} {precision} />
			<span>since {project.createdAt && formatDate(project.createdAt * 1000, 'yyyy-MM-dd')}</span>
			{#if metadata.description}
				<!-- TODO the popover isn't seen... -->
				<Popover message={metadata.description} placement="right">
					<div class="description">
						{metadata.description}
					</div>
				</Popover>
			{/if}
			{#if isArchived}
				<div class="archived">ARCHIVED</div>
			{/if}
		</section>
	{/if}
</li>

<style>
	li {
		display: flex;
		align-items: center;
		position: relative;
		height: 150px;
		overflow: hidden;
		padding: 25px 20px;
		border: 1px solid var(--stroke-secondary);
		margin-bottom: 10px;
	}

	li:hover {
		border-color: var(--stroke-primary);
		cursor: pointer;
	}

	h1 {
		font-size: 18px;
	}

	section {
		margin-left: 10px;
		/* text-overflow: ellipsis;
		overflow: hidden; */
	}
	span {
		font-weight: 300;
	}

	img {
		width: 110px;
		height: 110px;
	}
	.archived {
		position: 'absolute';
		top: 0;
		right: 0;
		padding: '2px 4px';
		background: var(--background-l1);
		font-size: 0.7rem;
		color: var(--text-tertiary);
		font-weight: 500;
	}
	.description {
		overflow: hidden;
		text-overflow: ellipsis;
		height: 20px;
		white-space: nowrap;
		width: 200px;
		font-weight: 300;
	}
	.handle {
		font-weight: 500;
	}
	.loading {
		display: 'flex';
		flex: 1;
		justify-content: 'space-between';
		align-items: 'center';
	}
	/* .version {
		font-weight: 500;
		margin-left: 10px;
		color: var(--text-tertiary);
		font-size: '0.7rem';
	} */

	@media (max-width: 850px) {
		li {
			flex: 0 0 100%;
			max-width: 100%;
            margin: 10px;
		}

        .description {
            width: 400px;
        }
	}
</style>