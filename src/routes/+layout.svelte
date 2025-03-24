<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>LakerHacks - SUNY Oswego's Annual Hackathon</title>
	<meta
		name="description"
		content="Join LakerHacks, SUNY Oswego's annual hackathon bringing together students, innovators, and tech enthusiasts."
	/>
</svelte:head>

<main class="min-h-full bg-white">
	{@render children()}
</main>
