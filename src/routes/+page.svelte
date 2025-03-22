<script lang="ts">
	import Navbar from '$lib/Components/Navbar.svelte';
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
		{ id: 'discord', label: 'Join Our Discord', href: 'https://discord.gg/GJrP3cQt2x' },
		{ id: 'register', label: 'Register Now', href: '#register' },
	];

	// Define the FAQ items
	interface FAQItem {
		question: string;
		answer: string;
		expanded: boolean;
	}

	const faqItems: FAQItem[] = [
		{ question: 'What is a hackathon?', answer: 'Hackathons are events where people come together to build...', expanded: false },
		{ question: 'Who can participate?', answer: 'Anyone can participate...', expanded: false },
		{ question: 'What if I don\'t have a team?', answer: 'We will help you find one...', expanded: false },
		{ question: 'What if I don\'t have any coding experience?', answer: 'That\'s why we have mentors...', expanded: false },
		{ question: 'What if I don\'t have an idea?', answer: 'We will help you brainstorm...', expanded: false },
		// Add more FAQ items as needed
	];

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
		content="Join LakerHacks, SUNY Oswego's biggest annual hackathon! A weekend of coding, innovation, and collaboration for students and tech enthusiasts. Build projects, network, and compete for prizes!"
		/>
</svelte:head>

<Navbar {navItems} />

<main class="flex flex-col ">
	<!-- Hero Section -->
	<section class="px-[40px] mx-auto py-[100px] w-full text-center bg-white">
		<div class="flex flex-col gap-[60px] max-w-[1000px] w-full mx-auto">
			<div class="flex flex-col gap-[10px]">
				<p class="text-gray-800">April 19th-20th</p>
				<h1>LakerHacks</h1>
				<p class="flex items-center justify-center gap-[10px] text-gray-800">
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
				
				<div class="flex justify-center mt-4">
					<a href="#register" class="bg-gray-800 px-6 py-2 text-sm font-medium text-white rounded-md transition-colors hover:bg-gray-700">
						Register Now
					</a>
				</div>
			</div>

			<!-- Promo video section -->
			<video class="mx-auto w-full max-w-[1000px] aspect-video rounded-xl" controls>
				<source src="/lakerhacks-promo.mp4" type="video/mp4">
				<track kind="captions" src="/lakerhacks-promo-captions.vtt" srclang="en" label="English" default>
				Your browser does not support the video tag.
			</video>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="px-[40px] mx-auto py-[100px] w-full text-center bg-[#F7F7F7]">
		<div class="flex flex-col gap-[60px] max-w-[1000px] mx-auto">
			<h2>About</h2>

			<p class="font-normal text-gray-800">
				LakerHacks is SUNY Oswego's annual hackathon, bringing together students, innovators, and
				tech enthusiasts. It offers 24 hours of coding, mentorship, and collaboration. Whether
				you're a beginner or an experienced developer, this event is your chance to build impactful
				projects, connect with like-minded peers, and compete for exciting prizes. Join us at
				LakerHacks and turn your ideas into reality!
			</p>
		</div>
	</section>

	
	<!-- Sponsors Section -->
	<section id="sponsors" class="px-[40px] mx-auto py-[100px] w-full text-center bg-white">
		<div class="flex flex-col gap-[60px] max-w-[1000px] mx-auto">
			<h2>Sponsors</h2>
			<div class="flex flex-wrap justify-center gap-[60px]">
				<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
				<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
				<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
				<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
				<img src="/logo.png" alt="Sponsor Logo" class="h-4 w-auto" />
			</div>
			<p>Looking to sponsor? Email us at lakerhacks@oswego.edu for more details!</p>
		</div>
	</section>

	<!-- Schedule/CTA Section -->
	<section id="schedule" class="px-[40px] mx-auto py-[100px] w-full bg-[#F7F7F7]">
		<div class="flex flex-col gap-[60px] max-w-[1000px] mx-auto">
			<div class="flex flex-col md:flex-row justify-center gap-[50px]">
				<div class="bg-gray-200 w-full h-[300px] rounded-xl"></div>

				<div class="flex flex-col w-full gap-[20px] justify-center text-center md:text-left">
					<h2 class="text-center md:text-left">What to Expect</h2>
					<p class="text-center md:text-left">Solve real challenges, get expert mentorship, and compete for prizes.</p>
					<div class="flex justify-center md:justify-start">
						<a href="#schedule" class="bg-gray-800 px-6 py-2 text-sm font-medium text-white rounded-md transition-colors hover:bg-gray-700">
							View Schedule
						</a>
					</div>
				</div>
			</div>
			<div class="flex flex-col md:flex-row-reverse justify-center gap-[50px]">
				<div class="bg-gray-200 w-full h-[300px] rounded-xl"></div>

				<div class="flex flex-col w-full gap-[20px] justify-center text-center md:text-left">
					<h2 class="text-center md:text-left">Why Hack?</h2>
					<p class="text-center md:text-left">Build something great, collaborate with like-minded innovators, and make an impact.</p>
					<div class="flex justify-center md:justify-start">
						<a href="#register" class="bg-gray-800 px-6 py-2 text-sm font-medium text-white rounded-md transition-colors hover:bg-gray-700">
							Register Now
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section id="faq" class="px-[40px] mx-auto py-[100px] w-full text-center bg-white">
		<div class="flex flex-col gap-[60px] max-w-[1000px] mx-auto">
			<h2>FAQ</h2>
			<div class="flex flex-col bg-gray-200 rounded-xl">
				{#each faqItems as item, index}
					<div class="flex flex-col">
						<button class="flex flex-row gap-[10px] items-center text-left button-text p-[20px]" on:click={() => item.expanded = !item.expanded}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`h-5 w-5 transition-transform duration-200 ${item.expanded ? 'rotate-45' : ''}`}>
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
							{item.question} 
						</button>
						{#if item.expanded}
							<p class="text-left pt-[0px] pb-[20px] pl-[50.28px] pr-[20px]">{item.answer}</p>
						{/if}
						{#if index < faqItems.length - 1}
							<div class="h-[1px] bg-gray-300 mx-[20px]"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Meet Our Team Section -->
	<section id="team" class="px-[40px] mx-auto py-[100px] w-full text-center bg-[#F7F7F7]">
		<div class="flex flex-col gap-[60px] max-w-[1000px] mx-auto">
			<h2>Meet Our Team</h2>
			<div class="flex flex-col md:flex-row gap-[20px]">
			<!-- Column 1 -->
				<div class="flex flex-col gap-[20px] w-full">
				<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
					<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
					<div class="flex flex-col justify-center">
						<p class="text-[20px] font-bold text-left">Name</p>
						<p class="text-gray-800 text-[14px] text-left">Role</p>
					</div>
				</div>
				<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
					<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
					<div class="flex flex-col justify-center">
						<p class="text-[20px] font-bold text-left">Name</p>
						<p class="text-gray-800 text-[14px] text-left">Role</p>
					</div>
				</div>
				<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
					<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
					<div class="flex flex-col justify-center">
						<p class="text-[20px] font-bold text-left">Name</p>
						<p class="text-gray-800 text-[14px] text-left">Role</p>
					</div>
				</div>
				</div>
			<!-- Column 2 -->
				<div class="flex flex-col gap-[20px] w-full">
					<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
						<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
						<div class="flex flex-col justify-center">
							<p class="text-[20px] font-bold text-left">Name</p>
							<p class="text-gray-800 text-[14px] text-left">Role</p>
						</div>
					</div>
					<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
						<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
						<div class="flex flex-col justify-center">
							<p class="text-[20px] font-bold text-left">Name</p>
							<p class="text-gray-800 text-[14px] text-left">Role</p>
						</div>
					</div>
					<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
						<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
						<div class="flex flex-col justify-center">
							<p class="text-[20px] font-bold text-left">Name</p>
							<p class="text-gray-800 text-[14px] text-left">Role</p>
						</div>
					</div>
					</div>
				<!-- Column 3 -->
					<div class="flex flex-col gap-[20px] w-full">
						<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
							<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
							<div class="flex flex-col justify-center">
								<p class="text-[20px] font-bold text-left">Name</p>
								<p class="text-gray-800 text-[14px] text-left">Role</p>
							</div>
						</div>
						<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
							<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
							<div class="flex flex-col justify-center">
								<p class="text-[20px] font-bold text-left">Name</p>
								<p class="text-gray-800 text-[14px] text-left">Role</p>
							</div>
						</div>
						<div class="flex flex-row gap-[15px] p-[30px] bg-gray-200 rounded-xl">
							<div class="bg-gray-400 w-[50px] h-[50px] rounded-full"></div>
							<div class="flex flex-col justify-center">
								<p class="text-[20px] font-bold text-left">Name</p>
								<p class="text-gray-800 text-[14px] text-left">Role</p>
							</div>
						</div>
						</div>

			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="cta" class="px-[40px] mx-auto py-[100px] w-full text-center bg-white">
		<div class="flex flex-col gap-[60px] max-w-[1000px] mx-auto">
			<h2>Ready to Hack?</h2>
			<div class="flex justify-center">
						<a href="#register" class="bg-gray-800 px-6 py-2 text-sm font-medium text-white rounded-md transition-colors hover:bg-gray-700">
							Register Now
						</a>
			</div>
		</div>
	</section>
</main>

<!-- Footer Section -->
<footer class="bg-gray-800 text-white py-[14px] px-[20px]">
	<div class="mx-auto flex justify-between">
		<p class="text-sm">&copy; 2023 LakerHacks. All rights reserved.</p>
		<div class="flex gap-8">
			<a href="#about" class="hover:underline text-sm">About</a>
			<a href="#faq" class="hover:underline text-sm">FAQ</a>
			<a href="https://discord.gg/GJrP3cQt2x" class="hover:underline text-sm">Join Our Discord</a>
		</div>
	</div>
</footer>

<style>
	/* Add any additional custom styles here */
	:global(html) {
		scroll-behavior: smooth;
	}

	.button-text {
		font-size: 1.5rem; /* 24px */
		line-height: 1.5;
		cursor: pointer;
	}
</style>
