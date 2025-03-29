<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>LakerHacks - SUNY Oswego's Annual Hackathon</title>
	<meta
		name="description"
		content="Join LakerHacks, SUNY Oswego's annual hackathon. Collaborate with students, network with professionals, and compete for prizes."
	/>
</svelte:head>

<main class="min-h-full bg-[#0B111F]">
	{@render children()}
</main>
