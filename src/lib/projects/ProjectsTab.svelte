<script>
	import { selectedProjectsTab } from '$stores/projectsForm';

	export let type;
	export let title;

	const handleClick = () => {
		selectedProjectsTab.set(type);
	};
</script>

<div on:click={handleClick}>
	<a href={''} class:selected={$selectedProjectsTab === type}>{title}</a>
</div>

<style>
	a {
		text-transform: uppercase;
		cursor: pointer;
		border-bottom: '2px solid';
		padding-bottom: 6px;
		font-weight: 500;
		color: var(--text-secondary);
		border-color: transparent;
	}

	.selected {
		color: var(--text-primary);
		border-color: var(--text-primary);
		font-weight: 600;
		border-bottom: 2px solid var(--text-primary);
	}
</style>
