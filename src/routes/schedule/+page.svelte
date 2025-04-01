<script>
	import scheduleImg from '$lib/assets/schedule-export.png';
</script>

<svelte:head>
	<title>Schedule - LakerHacks</title>
	<meta name="description" content="View the schedule for LakerHacks" />
</svelte:head>

<main class="flex min-h-screen flex-col items-center bg-[#0B111F]">
	<div class="relative hidden w-full md:block">
		<iframe
			loading="lazy"
			class="absolute top-0 left-0 h-full w-full"
			src="https://www.canva.com/design/DAGjR2YZHyo/_BcygR-hW3YWwrW-_mctQA/view?embed"
			allowfullscreen="allowfullscreen"
			allow="fullscreen"
		>
		</iframe>
	</div>

	<div class="relative block w-full md:hidden">
		<img src={scheduleImg} alt="schedule" />
	</div>

	<a
		href="https://www.canva.com/design/DAGjRb98rrU/yjs0HQPsoI5kxb1Q0_r5wQ/view?utm_content=DAGjRb98rrU&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
		target="_blank"
		rel="noopener"
		class="rounded-md border border-[#D4563F] bg-[#0B111F] px-6 py-2 text-sm font-medium text-[#D4563F] transition-all hover:bg-[#050a14]"
	>
		View Full Schedule
	</a>
</main>

<style>
	.aspect-w-16 {
		position: relative;
		width: 43.5%;
	}
	.aspect-h-9 {
		padding-top: 102.5%;
	}

	@media (max-width: 640px) {
		.aspect-w-16.aspect-h-9 {
			padding-top: 230%;
			width: 100%;
			max-width: 100%;
		}
	}
</style>
