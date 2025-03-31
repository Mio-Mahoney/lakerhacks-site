<script lang="ts">
	import Navbar from '$lib/Components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Video from '$lib/assets/lakerhacks-promo.mp4';
	import Logo from '$lib/assets/logo.png';
	import Captions from '$lib/assets/lakerhacks-promo-captions.vtt';
	import TeamItem from '$lib/Components/TeamItem.svelte';
	import CSALogo from '$lib/assets/CSA_logo.png';
	import WonzonesLogo from '$lib/assets/Wonzones_logo.png';
	import HCIOLogo from '$lib/assets/HCIO_logo.png';
	import CSTEPLogo from '$lib/assets/CSTEP_logo.png';
	import Image1 from '$lib/assets/image1.png';
	import Image2 from '$lib/assets/image2.png';
	import HarrisonImage from '$lib/assets/harrisonrussell.png';
	import SamanthaImage from '$lib/assets/samanthabrown.png';
	import HamadiImage from '$lib/assets/hamadibelghachi.png';
	import HenryImage from '$lib/assets/henryrose.png';
	import EliFereiraImage from '$lib/assets/elifereira.png';
	import MioImage from '$lib/assets/miomahoney.png';
	import WilliamImage from '$lib/assets/williamstone.png';
	import EliDeCampoImage from '$lib/assets/elidecampo.png';
	import JosephImage from '$lib/assets/josephvega.png';
	import RileyImage from '$lib/assets/rileynixon.png';
	import LandonImage from '$lib/assets/landonrusco.png';
	import JackImage from '$lib/assets/jackgallagher.png';
	import JessImage from '$lib/assets/jessmetzner.png';
	import Plyr from 'plyr';
	import 'plyr/dist/plyr.css';

	// For responsive navigation
	let isMenuOpen: boolean = false;

	// Countdown timer
	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	function updateCountdown() {
		const targetDate = new Date('2025-04-19T10:00:00-04:00'); // 10:00 AM EST
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		days = Math.floor(difference / (1000 * 60 * 60 * 24));
		hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((difference % (1000 * 60)) / 1000);
	}

	onMount(() => {
		updateCountdown();
		const timer = setInterval(updateCountdown, 1000);

		// Initialize Plyr
		const player = new Plyr('#video-player', {
			controls: [
				'play-large',
				'play',
				'progress',
				'current-time',
				'mute',
				'volume',
				'captions',
				'settings',
				'pip',
				'fullscreen'
			],
			hideControls: true,
			keyboard: { focused: true, global: true },
			fullscreen: { 
				enabled: true,
				iosNative: true // Use native iOS fullscreen
			},
			clickToPlay: true,
			ratio: '16:9'
		});
		
		// For better mobile handling
		const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		
		// Handle fullscreen on mobile when playing
		if (isMobile) {
			player.on('play', () => {
				try {
					// Request fullscreen when user plays on mobile
					const container = player.elements.container;
					if (container) {
						if (container.requestFullscreen) {
							container.requestFullscreen();
						} else if ((container as any).webkitRequestFullscreen) {
							(container as any).webkitRequestFullscreen();
						} else if ((container as any).mozRequestFullScreen) {
							(container as any).mozRequestFullScreen();
						} else if ((container as any).msRequestFullscreen) {
							(container as any).msRequestFullscreen();
						}
					}
				} catch (error) {
					console.log('Fullscreen request failed:', error);
				}
			});
		}
		
		// Add video dimming effect when not playing
		const videoContainer = document.querySelector('.video-container');
		player.on('playing', () => {
			videoContainer?.classList.remove('video-paused');
			videoContainer?.classList.add('video-playing');
		});
		
		player.on('pause', () => {
			videoContainer?.classList.remove('video-playing');
			videoContainer?.classList.add('video-paused');
		});
		
		// Set initial state to paused/dimmed
		videoContainer?.classList.add('video-paused');

		return () => {
			clearInterval(timer);
			player.destroy();
		};
	});

	function toggleMenu(): void {
		isMenuOpen = !isMenuOpen;
	}

	const registrationURL = 'https://forms.gle/uqoj1GAksMGaDaoNA';
	const discordURL = 'https://discord.gg/GJrP3cQt2x';

	const navItems: NavItem[] = [
		{ id: 'about', label: 'About', href: '#about' },
		{ id: 'schedule', label: 'Schedule', href: 'https://docs.google.com/document/d/1r5AaIp5RkBok8eb7P_FQI4Kbtw61lSyn7mpS82NYmII/edit?usp=sharing' },
		{ id: 'faq', label: 'FAQ', href: '#faq' },
		{ id: 'team', label: 'Team', href: '#team' },
		{ id: 'discord', label: 'Join Our Discord', href: discordURL },
		{ id: 'register', label: 'Register Now', href: registrationURL }
	];

	const faqItems: FAQItem[] = [
		{
			question: 'What is a hackathon?',
			answer: 'Hackathons are events where people come together to build innovative projects and compete for prizes. At LakerHacks, you\'ll have 24 hours to work with your team to create something amazing. It\'s a great opportunity to learn valuable skills, meet other developers, and build your portfolio. Whether you\'re a beginner or an experienced programmer, hackathons are perfect for pushing your boundaries.',
			expanded: false
		},
		{ 
			question: 'Who can participate?', 
			answer: 'SUNY Oswego students who are passionate about technology and innovation can participate! No matter your major or background, if you\'re excited about building something cool and learning new skills, LakerHacks is for you.',
			expanded: false 
		},
		{
			question: "What if I don't have a team?",
			answer: 'We\'ll help you find a team. At the beginning of the hackathon, we\'ll have team formation activities where you can meet other participants and form teams. You can also join our Discord server before the event to connect with potential teammates.',
			expanded: false
		}, 
		{
			question: "What if I don't have any coding experience?",
			answer: "That's exactly why we have mentors and workshops! We'll have experienced developers and industry professionals available throughout the event to help you learn and build. Our beginner-friendly workshops can help you get started. Many successful hackathon participants start with no coding experience - it's all about the willingness to learn and create!",
			expanded: false
		},
		{
			question: "What if I don't have an idea?",
			answer: 'No problem! We\'ll announce our exciting theme and tracks during the opening ceremony, which will give you and your team plenty of inspiration.',
			expanded: false
		}
	];

	function handleFAQClick(index: number): void {
		// Close all other FAQs
		faqItems.forEach((item, i) => {
			if (i !== index) {
				item.expanded = false;
			}
		});
		// Toggle the clicked FAQ
		faqItems[index].expanded = !faqItems[index].expanded;
	}

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

<main class="flex flex-col text-white">
	<!-- Hero Section -->
	<section id="home" class="mx-auto w-full px-4 py-[100px] text-center ">
		<div class="mx-auto flex w-full max-w-[1000px] flex-col gap-[60px]">
			<div class="flex flex-col gap-[10px]">

				<!-- Countdown Timer -->
				<div class="flex justify-center gap-1">
					<div class="bg-[#0B111F]/50 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1 w-[70px]">
						<div class="text-lg font-bold text-[#9CC747]">{days}</div>
						<div class="text-[10px] text-white/80">Days</div>
					</div>
					<div class="bg-[#0B111F]/50 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1 w-[70px]">
						<div class="text-lg font-bold text-[#9CC747]">{hours}</div>
						<div class="text-[10px] text-white/80">Hours</div>
					</div>
					<div class="bg-[#0B111F]/50 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1 w-[70px]">
						<div class="text-lg font-bold text-[#9CC747]">{minutes}</div>
						<div class="text-[10px] text-white/80">Minutes</div>
					</div>
					<div class="bg-[#0B111F]/50 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1 w-[70px]">
						<div class="text-lg font-bold text-[#9CC747]">{seconds}</div>
						<div class="text-[10px] text-white/80">Seconds</div>
					</div>
				</div>
				<h1><span class="text-[#9CC747]">Laker</span><span class="text-[#FFE34F]">Hacks</span></h1>
				<p class="text-white/80">April 19th-20th, 2025</p>

				<div class="mt-4 flex flex-col justify-center gap-[10px] max-w-[400px] mx-auto">
					<a
						href={registrationURL}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-[#D4563F] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#D4563F]/80"
					>
						Register Now
					</a>
					<a
						href="https://docs.google.com/document/d/1r5AaIp5RkBok8eb7P_FQI4Kbtw61lSyn7mpS82NYmII/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-[#0B111F] border border-[#D4563F] px-6 py-2 text-sm font-medium text-[#D4563F] transition-all hover:bg-[#050a14]"
					>
						View Schedule
					</a>
				</div>
			</div>

			<!-- Promo video section -->
			<div class="video-container mx-auto aspect-video w-full max-w-[1000px] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden relative">
				<video id="video-player" class="plyr__video-embed" playsinline>
					<source src={Video} type="video/mp4" />
					<track kind="captions" src={Captions} srclang="en" label="English" default />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="mx-auto w-full px-4 py-[100px] text-center">
		<div class="mx-auto flex max-w-[1000px] flex-col gap-[40px]">
			<h2 class="text-[#9CC747]">About</h2>
			<div class="flex flex-col  rounded-xl bg-[#0B111F]/50 backdrop-blur-sm border border-white/10 p-4 xl:p-8">
				<p class="font-normal text-white/80 text-sm xl:text-[24px]">
					Launching this spring, LakerHacks is SUNY Oswego's student-led annual hackathon—a multi-day event where students design, code, and innovate. With hands-on workshops, talks from industry professionals, and fun activities, it's the perfect place to learn, create, and connect.
				</p>
			</div>
		</div>
	</section>

	<!-- Sponsors Section -->
	<section id="sponsors" class="mx-auto w-full px-4 py-[100px] text-center ">
		<div class="mx-auto flex max-w-[1000px] flex-col gap-[40px]">
			<h2 class="text-[#9CC747]">Sponsors</h2>
			<div class="flex flex-wrap justify-center gap-[40px]">
				<img src={CSALogo} alt="CSA Logo" class="h-[100px] w-auto" />
				<img src={WonzonesLogo} alt="Wonzones Logo" class="h-[100px] w-auto" />
				<img src={HCIOLogo} alt="HCIO Logo" class="h-[100px] w-auto" />
				<img src={CSTEPLogo} alt="CSTEP Logo" class="h-[100px] w-auto" />
			</div>
			<p class="text-white/80">Looking to sponsor? Email us at <a href="mailto:lakerhacks@oswego.edu" class="text-[#D4563F] hover:underline">lakerhacks@oswego.edu</a> for more details!</p>
		</div>
	</section>

	<!-- Schedule/CTA Section -->
	<section id="schedule" class="mx-auto w-full px-4 py-[100px] ">
		<div class="mx-auto flex max-w-[1000px] flex-col gap-[60px]">
			<div class="flex flex-col gap-[50px] xl:flex-row-reverse">
				<div class="w-full xl:w-1/2 xl:h-full">
					<img src={Image1} alt="Students collaborating at a hackathon" class="w-full h-full rounded-xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.3)]" />
				</div>
				<div class="flex w-full xl:w-1/2 flex-col justify-center gap-8 text-center xl:text-left">
					<div class="flex flex-col gap-4">
						<h2 class="text-center xl:text-left text-[#9CC747]">Why Hack?</h2>
						<p class="text-center xl:text-left text-white/80">
							Build something great, collaborate with like-minded innovators, and make an impact.
						</p>
					</div>
					<div class="flex justify-center xl:justify-start">
						<a
							href={registrationURL}
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-md bg-[#D4563F] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#D4563F]/80"
						>
							Register Now
						</a>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-[50px] xl:flex-row">
				<div class="w-full xl:w-1/2 xl:h-full">
					<img src={Image2} alt="Students presenting their hackathon project" class="w-full h-full rounded-xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.3)]" />
				</div>
				<div class="flex w-full xl:w-1/2 flex-col justify-center gap-8 text-center xl:text-left">
					<div class="flex flex-col gap-4">
						<h2 class="text-center xl:text-left text-[#9CC747]">What to Expect</h2>
						<p class="text-center xl:text-left text-white/80">
							Solve real challenges, get expert mentorship, and compete for prizes.
						</p>
					</div>
					<div class="flex justify-center xl:justify-start">
						<a
							href="https://docs.google.com/document/d/1r5AaIp5RkBok8eb7P_FQI4Kbtw61lSyn7mpS82NYmII/edit?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-md bg-[#0B111F] border border-[#D4563F] px-6 py-2 text-sm font-medium text-[#D4563F] transition-all hover:bg-[#050a14]"
						>
							View Schedule
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section id="faq" class="mx-auto w-full px-4 py-[100px] text-center">
		<div class="mx-auto flex max-w-[1000px] flex-col gap-[40px]">
			<h2 class="text-[#9CC747]">FAQ</h2>
			<div class="flex flex-col rounded-xl bg-[#0B111F]/50 backdrop-blur-sm border border-white/10">
				{#each faqItems as item, index}
					<div class="flex flex-col">
						<button
							class="button-text flex flex-row items-center gap-[10px] p-[12px] xl:p-[20px] text-left hover:bg-white/5 transition-all {index === 0 ? 'rounded-t-xl' : ''} {index === faqItems.length - 1 ? 'rounded-b-xl' : ''}"
							on:click={() => handleFAQClick(index)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class={`transition-transform duration-200 ${item.expanded ? 'rotate-45' : ''}`}
								style="width: 20px; height: 20px; flex-shrink: 0;"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
							<span class="text-base xl:text-lg">{item.question}</span>
						</button>
						{#if item.expanded}
							<div transition:slide={{ duration: 300 }}>
								<p class="pt-[0px] pr-[12px] xl:pr-[20px] pb-[12px] xl:pb-[20px] pl-[40px] xl:pl-[50.28px] text-left text-sm xl:text-base opacity-70">{item.answer}</p>
							</div>
							{#if index < faqItems.length - 1}
								<div class="mx-[20px] h-[1px] bg-gray-300/20"></div>
							{/if}
						{:else if index < faqItems.length - 1}
							<div class="mx-[20px] h-[1px] bg-gray-300/20"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Meet Our Team Section -->
	<section id="team" class="mx-auto w-full px-4 py-[100px] text-center">
		<div class="mx-auto flex max-w-[1000px] flex-col  gap-[40px]">
			<h2 class="text-[#9CC747]">Meet Our Team</h2>
			<div class="flex w-full flex-wrap gap-[20px]">
				<TeamItem name="Harrison Russell" role="Organizer" linkedinUrl="https://www.linkedin.com/in/harrisonrussell/" image={HarrisonImage} />
				<TeamItem name="Eli Fereira" role="Organizer" linkedinUrl="https://www.linkedin.com/in/eli-fereira/" image={EliFereiraImage} />
				<TeamItem name="Mio Mahoney" role="Organizer" linkedinUrl="https://www.linkedin.com/in/mio-mahoney/" image={MioImage} />
				<TeamItem name="Samantha Brown" role="Organizer" linkedinUrl="https://www.linkedin.com/in/samanthajeanneb/" image={SamanthaImage} />
				<TeamItem name="Hamadi Belghachi" role="Organizer" linkedinUrl="https://www.linkedin.com/in/hamadidesign/" image={HamadiImage} />
				<TeamItem name="William Stone" role="Organizer" linkedinUrl="https://www.linkedin.com/in/william-s-stone/" image={WilliamImage} />
				<TeamItem name="Eli DeCampo" role="Organizer" linkedinUrl="https://www.linkedin.com/in/eli-decampo-a28a27274/" image={EliDeCampoImage} />
				<TeamItem name="Landon Rusco" role="Organizer" linkedinUrl="https://www.linkedin.com/in/landon-rusco-3004a4358/" image={LandonImage} />
				<TeamItem name="Joseph Vega" role="Organizer" linkedinUrl="https://www.linkedin.com/in/jvega2/" image={JosephImage} />
				<TeamItem name="Henry Rose" role="Organizer" linkedinUrl="https://www.linkedin.com/in/hjrose29/" image={HenryImage} />
				<TeamItem name="Riley Nixon" role="Organizer" linkedinUrl="https://www.linkedin.com/in/riley-o-nixon/" image={RileyImage} />
				<TeamItem name="Jack Gallagher" role="Organizer" linkedinUrl="https://www.linkedin.com/in/jack-gallagher-/" image={JackImage} />
				<TeamItem name="Jess Metzner" role="Organizer" linkedinUrl="https://www.linkedin.com/in/jessica-metzner-a0033a1a2/" image={JessImage} />
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="cta" class="mx-auto w-full px-4 py-[100px] text-center">
		<div class="mx-auto flex max-w-[1000px] flex-col gap-[40px]">
			<h2 class="text-[#9CC747]">Ready to Hack?</h2>
			<div class="flex justify-center">
				<a
					href={registrationURL}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-md bg-[#D4563F] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#D4563F]/80"
				>
					Register Now
				</a>
			</div>
		</div>
	</section>
</main>

<!-- Footer Section -->
<footer class="bg-[#0B111F] border-t border-gray-800 px-[20px] py-[40px] text-white w-full">
	<div class="mx-auto max-w-[1000px]">
		<div class="flex flex-col xl:flex-row mb-[40px]">
			<div class="mb-[40px] xl:mb-0">
				<h3 class="text-[#9CC747] font-semibold mb-4 text-lg">Quick Links</h3>
				<ul class="space-y-2">
					<li><a href="#about" class="text-white/80 hover:text-white transition-colors">About</a></li>
					<li><a href="https://docs.google.com/document/d/1r5AaIp5RkBok8eb7P_FQI4Kbtw61lSyn7mpS82NYmII/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-white transition-colors">Schedule</a></li>
					<li><a href="#faq" class="text-white/80 hover:text-white transition-colors">FAQ</a></li>
					<li><a href="#team" class="text-white/80 hover:text-white transition-colors">Team</a></li>
				</ul>
			</div>
			<div class="mb-[40px] xl:mb-0 xl:ml-[100px]">
				<h3 class="text-[#9CC747] font-semibold mb-4 text-lg">Contact Us</h3>
				<ul class="space-y-2">
					<li>
						<a href="mailto:lakerhacks@oswego.edu" class="text-white/80 hover:text-[#D4563F] transition-colors">
							lakerhacks@oswego.edu
						</a>
					</li>
				</ul>
			</div>
			<div class="xl:ml-auto">
				<h3 class="text-[#9CC747] font-semibold mb-4 text-lg">Stay Connected</h3>
				<ul class="space-y-2">
					<li>
						<a 
							href={discordURL} 
							target="_blank" 
							rel="noopener noreferrer" 
							class="text-white/80 hover:text-[#5865F2] transition-colors inline-flex items-center gap-2"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
							Join Discord
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t border-gray-800 pt-8">
			<p class="text-[14px] text-white/60">&copy; {new Date().getFullYear()} LakerHacks</p>
		</div>
	</div>
</footer>

<style>
	/* Add any additional custom styles here */
	:global(html) {
		scroll-behavior: smooth;
	}

	main {
		background-image: url('/src/lib/assets/background-graphic.png');
		background-size: auto;
		background-repeat: no-repeat;
		background-position: center top;
		min-height: 100vh;
		overflow-x: hidden;
	}

	.button-text {
		font-size: 24px;
		line-height: 1.5;
		cursor: pointer;
	}

	/* Plyr custom styles */
	:global(.plyr) {
		--plyr-color-main: #D4563F;
		--plyr-video-background: #0B111F;
		border-radius: 0.75rem;
	}

	:global(.plyr--video) {
		border-radius: 0.75rem;
		overflow: hidden;
	}
	
	/* Video dimming effect styles */
	.video-container {
		transition: filter 0.5s ease-in-out;
	}
	
	.video-paused :global(video) {
		filter: brightness(0.65) saturate(0.8);
		transition: filter 0.5s ease-in-out;
	}
	
	.video-playing :global(video) {
		filter: brightness(1) saturate(1);
		transition: filter 0.5s ease-in-out;
	}
</style>
