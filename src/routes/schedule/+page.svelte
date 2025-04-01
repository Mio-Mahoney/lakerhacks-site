<script>
	import scheduleImg from '$lib/assets/schedule-export.png';
</script>

<svelte:head>
	<title>Schedule - LakerHacks</title>
	<meta name="description" content="View the schedule for LakerHacks" />
</svelte:head>

<main class="flex min-h-screen flex-col items-center bg-[#0B111F]">
	<div class="w-full max-w-[600px]">
		<img src={scheduleImg} alt="schedule" class="w-full" />
	</div>
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
