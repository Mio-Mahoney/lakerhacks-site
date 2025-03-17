<script lang="ts">
	import Header from '$lib/Components/Header.svelte';
	import Navbar from '$lib/Components/Navbar.svelte';
	import Button from '$lib/Components/Button.svelte';

	import { onMount } from 'svelte';

	// For responsive navigation
	let isMenuOpen: boolean = false;

	function toggleMenu(): void {
		isMenuOpen = !isMenuOpen;
	}

	// Define navigation items with a TypeScript interface
	interface NavItem {
		id: string;
		label: string;
		href: string;
	}

	const navItems: NavItem[] = [
		{ id: 'about', label: 'ABOUT', href: '#about' },
		{ id: 'schedule', label: 'SCHEDULE', href: '#schedule' },
		{ id: 'resources', label: 'RESOURCES', href: '#resources' },
		{ id: 'tracks', label: 'TRACKS/PRIZES', href: '#tracks' },
		{ id: 'faq', label: 'FAQ', href: '#faq' },
		{ id: 'discord', label: 'DISCORD', href: '#discord' },
		{ id: 'register', label: 'REGISTER', href: '' }
	];

	// Type for sponsor placeholder
	interface Sponsor {
		id: number;
		name: string; // For alt text
	}

	// Generate placeholder sponsors
	const sponsors: Sponsor[] = Array(5)
		.fill(null)
		.map((_, index) => ({
			id: index + 1,
			name: `Sponsor ${index + 1}`
		}));

	// Close menu when clicking outside
	onMount(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			const target = event.target as HTMLElement;
			// Only close if clicking outside both the nav and the toggle button
			if (
				isMenuOpen &&
				!target.closest('nav') &&
				!target.closest('button[aria-label="Toggle menu"]')
			) {
				isMenuOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<svelte:head>
	<title>LakerHacks - SUNY Oswego's Annual Hackathon</title>
	<meta
		name="description"
		content="Join LakerHacks, SUNY Oswego's annual hackathon bringing together students, innovators, and tech enthusiasts."
	/>
</svelte:head>

<Navbar {navItems} />

<!-- Hero Section -->
<header class="mx-auto mt-8 max-w-4xl px-4 text-center">
	<div class="mx-auto max-w-xs bg-gray-200 py-2">
		<p class="text-gray-800">April 19th-20th</p>
	</div>

	<div class="mt-4 bg-gray-100 px-4 py-6">
		<h1 class="text-4xl font-bold md:text-5xl">LakerHacks</h1>
	</div>

	<div class="mx-auto mt-4 max-w-xs bg-gray-200 py-2">
		<p class="text-gray-800">SUNY Oswego's Annual Hackathon</p>
	</div>

	<div class="mt-4 mb-8">
		<a
			href="#register"
			class="inline-block bg-gray-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
		>
			REGISTER
		</a>
	</div>

	<!-- Placeholder for main image -->
	<div
		class="mx-auto mb-12 flex h-48 w-full items-center justify-center border border-gray-300 bg-gray-200 md:h-64 lg:h-80"
	>
		<svg class="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="0.5"
				d="M6 18L18 6M6 6l12 12"
			></path>
		</svg>
	</div>
</header>

<!-- Sponsors Section -->
<section id="sponsors" class="mx-auto mb-16 max-w-4xl px-4">
	<Header>Sponsers</Header>

	<div class="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-5">
		{#each sponsors as sponsor}
			<div class="flex h-32 w-32 items-center justify-center border border-gray-300 bg-gray-200">
				<svg
					class="h-12 w-12 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-label={`${sponsor.name} logo placeholder`}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0.5"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</div>
		{/each}
	</div>
</section>

<!-- About Section -->
<section id="about" class="mx-auto mb-16 max-w-4xl px-4">
	<Header>About</Header>

	<div class="mx-auto max-w-2xl bg-gray-200 p-6 text-center">
		<p class="text-gray-800">
			LakerHacks is SUNY Oswego's annual hackathon, bringing together students, innovators, and tech
			enthusiasts. It offers 24 hours of coding, mentorship, and collaboration. Whether you're a
			beginner or an experienced developer, this event is your chance to build impactful projects,
			connect with like-minded peers, and compete for exciting prizes. Join us at LakerHacks and
			turn your ideas into reality!
		</p>
	</div>
</section>

<section id="schedule" class="mx-auto mb-16 flex max-w-4xl flex-col gap-25 px-4">
	<div class="flex flex-row justify-center gap-x-50">
		<svg class="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="0.5"
				d="M6 18L18 6M6 6l12 12"
			></path>
		</svg>

		<div class="flex flex-col">
			<Header>What to Expect</Header>
			<div class="p-5">This is the body</div>
			<Button />
		</div>
	</div>
	<div class="flex flex-row-reverse justify-center gap-x-50">
		<svg class="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="0.5"
				d="M6 18L18 6M6 6l12 12"
			></path>
		</svg>

		<div class="flex flex-col gap-y-5">
			<Header>What to Expect</Header>
			<div>This is the body</div>
			<Button />
		</div>
	</div>
</section>

<style>
	/* Add any additional custom styles here */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
