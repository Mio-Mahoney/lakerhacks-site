<script>
	import Navbar from '$lib/Components/Navbar.svelte';

	const navItems = [
		{ id: 'about', label: 'About', href: '/#about' },
		{ id: 'schedule', label: 'Schedule', href: '/#schedule' },
		{ id: 'faq', label: 'FAQ', href: '/#faq' },
		{ id: 'team', label: 'Team', href: '/#team' },
		{ id: 'discord', label: 'Join Our Discord', href: '/#discord' },
		{ id: 'register', label: 'Register Now', href: '/#register' }
	];
</script>

<svelte:head>
	<title>Schedule - LakerHacks</title>
	<meta name="description" content="View the schedule for LakerHacks" />
</svelte:head>

<Navbar {navItems} />

<main class="flex flex-col items-center min-h-screen bg-[#0B111F]">
	<div class="relative w-full aspect-w-16 aspect-h-9">
		<iframe 
			loading="lazy" 
			class="absolute w-full h-full top-0 left-0" 
            src="https://www.canva.com/design/DAGjR2YZHyo/_BcygR-hW3YWwrW-_mctQA/view?embed"
			allowfullscreen="allowfullscreen" 
			allow="fullscreen">
		</iframe>
	</div>

	<a 
		href="https://www.canva.com/design/DAGjRb98rrU/yjs0HQPsoI5kxb1Q0_r5wQ/view?utm_content=DAGjRb98rrU&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
		target="_blank" 
		rel="noopener" 
		class="rounded-md bg-[#0B111F] border border-[#D4563F] px-6 py-2 text-sm font-medium text-[#D4563F] transition-all hover:bg-[#050a14]">
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
