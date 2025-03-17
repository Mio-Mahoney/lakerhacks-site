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
		{ id: 'about', label: 'About', href: '#about' },
		{ id: 'schedule', label: 'Schedule', href: '#schedule' },
		{ id: 'resources', label: 'Resources', href: '#resources' },
		{ id: 'tracks', label: 'Tracks/Prizes', href: '#tracks' },
		{ id: 'faq', label: 'FAQ', href: '#faq' },
		{ id: 'discord', label: 'Discord', href: 'https://discord.gg/GJrP3cQt2x' },
		{ id: 'register', label: 'Register', href: '#register' }
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

<main class="mt-[72px] flex flex-col gap-[60px] px-[100px]">
	<!-- Hero Section -->
	<header class="mx-auto w-full max-w-[800px] text-center">
		<div class="flex flex-col gap-2.5">
			<p class="text-gray-800">April 19th-20th</p>
			<h1 class="text-4xl font-normal md:text-5xl">LakerHacks</h1>
			<p class="flex items-center justify-center gap-1 text-gray-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-5 w-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
					/>
				</svg>
				SUNY Oswego
			</p>
		</div>

		<div class="mt-4 mb-8">
			<a
				href="#register"
				class="inline-block bg-gray-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
			>
				REGISTER
			</a>
		</div>

		<!-- Placeholder for promo video -->
		<div class="mx-auto aspect-video bg-gray-200"></div>
	</header>

	<!-- Sponsors Section -->
	<section id="sponsors" class="mx-auto w-full max-w-[800px] text-center">
		<h2>Sponsors</h2>
		<div class="flex flex-wrap justify-center gap-[60px]">
			<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
			<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
			<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
			<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
			<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
			<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="mx-auto max-w-4xl px-4">
		<Header>About</Header>

		<div class="mx-auto max-w-2xl bg-gray-200 p-6 text-center">
			<p class="font-normal text-gray-800">
				LakerHacks is SUNY Oswego's annual hackathon, bringing together students, innovators, and
				tech enthusiasts. It offers 24 hours of coding, mentorship, and collaboration. Whether
				you're a beginner or an experienced developer, this event is your chance to build impactful
				projects, connect with like-minded peers, and compete for exciting prizes. Join us at
				LakerHacks and turn your ideas into reality!
			</p>
		</div>
	</section>

	<section id="schedule" class="mx-auto max-w-4xl px-4">
		<div class="flex gap-100">
			<div
				class="flex h-[353px] w-[486px] items-center justify-center border border-gray-300 bg-gray-200"
			>
				<svg
					class="h-12 w-12 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-label={` logo placeholder`}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0.5"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>
			<div>
				<Header>What to expect</Header>
				Solve real challenges, get expert mentorship, and compete for prizes.
				<button class="gap-y-1.5">Schedule</button>
			</div>
		</div>
	</section>

	<section id="about" class="mx-auto mb-16 max-w-4xl px-4">
		<Header>About</Header>

		<div class="mx-auto max-w-2xl bg-gray-200 p-6 text-center">
			<p class="text-gray-800">
				LakerHacks is SUNY Oswego's annual hackathon, bringing together students, innovators, and
				tech enthusiasts. It offers 24 hours of coding, mentorship, and collaboration. Whether
				you're a beginner or an experienced developer, this event is your chance to build impactful
				projects, connect with like-minded peers, and compete for exciting prizes. Join us at
				LakerHacks and turn your ideas into reality!
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
</main>

<style>
	/* Add any additional custom styles here */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
