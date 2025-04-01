<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();

	const registrationURL = 'https://forms.gle/uqoj1GAksMGaDaoNA';
	const discordURL = 'https://discord.gg/GJrP3cQt2x';
	const scheduleURL = base + '/schedule';

	const navItems: NavItem[] = [
		{ id: 'about', label: 'About', href: base + '/#about' },
		{ id: 'schedule', label: 'Schedule', href: scheduleURL },
		{ id: 'faq', label: 'FAQ', href: base + '/#faq' },
		{ id: 'team', label: 'Team', href: base + '/#team' },
		{ id: 'discord', label: 'Join Our Discord', href: discordURL },
		{ id: 'register', label: 'Register Now', href: registrationURL }
	];
</script>

<svelte:head>
	<title>LakerHacks - SUNY Oswego's Annual Hackathon</title>
	<meta
		name="description"
		content="Join LakerHacks, SUNY Oswego's annual hackathon. Collaborate with students, network with professionals, and compete for prizes."
	/>
</svelte:head>

<Navbar {navItems} />

<main class="min-h-full bg-[#0B111F]">
	{@render children()}
</main>
