<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import NavItem from './NavItem.svelte';
	import NavButton from './NavButton.svelte';
	import Logo from '$lib/assets/logo.png';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	const { navItems } = $props();

	// For responsive navigation
	let isMenuOpen: boolean = $state(false);

	function toggleMenu(): void {
		isMenuOpen = !isMenuOpen;
	}

	// Close menu when clicking outside
	onMount(() => {
		if (!browser) return;

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
			if (browser) document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="sticky top-0 bg-[#0b111f] z-50 {!isMenuOpen ? 'border-b border-gray-800' : ''}">
	<!-- Mobile header with logo and menu button -->
	<div
		class="flex items-center justify-between px-[20px] py-[14px] xl:hidden"
	>
		<div class="flex items-center">
			<a href={base + "/"} aria-label="Go to Home" class="flex items-center gap-2">
				<img src={Logo} alt="LakerHacks Logo" class="h-[40px] w-auto" />
				<span class="text-2xl font-bold"><span class="text-[#FFE34F]">Laker</span><span class="text-[#9CC747]">Hacks</span></span>
			</a>
		</div>
		<NavButton {isMenuOpen} {toggleMenu} />
	</div>

	<!-- Navigation -->
	{#if isMenuOpen}
		<nav
			transition:slide={{ duration: 300 }}
			class="fixed inset-0 top-[68px] bg-[#0b111f] border-b border-gray-800 px-[20px] py-[14px] xl:static xl:block"
		>
			<div class="flex h-full items-center justify-between">
				<div class="hidden xl:flex xl:items-center">
					<a href={base + "/#home"} aria-label="Go to Home" class="flex items-center gap-2">
						<img src={Logo} alt="LakerHacks Logo" class="h-[40px] w-auto" />
						<span class="text-2xl font-bold"><span class="text-[#FFE34F]">Laker</span><span class="text-[#9CC747]">Hacks</span></span>
					</a>
				</div>
				<div
					class="flex w-full flex-col items-center justify-center gap-[20px] xl:w-auto xl:flex-row"
				>
					{#each navItems as item}
						<NavItem
							href={item.href}
							label={item.id === 'discord' ? 
								`<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>Join Discord` 
								: item.label}
							class={`${
								item.id === 'register'
									? 'rounded-md bg-[#D4563F] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#D4563F]/80'
									: item.id === 'discord'
										? 'rounded-md bg-[#5865F2] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4752C4] flex items-center justify-center'
										: 'block w-auto rounded-md px-3 py-2 text-center text-white transition-colors hover:bg-gray-100 hover:text-gray-900 md:inline-block'
							}`}
							onClick={() => isMenuOpen = false}
						/>
					{/each}
				</div>
			</div>
		</nav>
	{:else}
		<nav class="hidden xl:block border-b border-gray-800 px-[20px] py-[14px]">
			<div class="flex h-full items-center justify-between">
				<div class="hidden xl:flex xl:items-center">
					<a href={base + "/#home"} aria-label="Go to Home" class="flex items-center gap-2">
						<img src={Logo} alt="LakerHacks Logo" class="h-[40px] w-auto" />
						<span class="text-2xl font-bold"><span class="text-[#FFE34F]">Laker</span><span class="text-[#9CC747]">Hacks</span></span>
					</a>
				</div>
				<div
					class="flex w-full flex-col items-center justify-center gap-[20px] xl:w-auto xl:flex-row"
				>
					{#each navItems as item}
						<NavItem
							href={item.href}
							label={item.id === 'discord' ? 
								`<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>Join Discord` 
								: item.label}
							class={`${
								item.id === 'register'
									? 'rounded-md bg-[#D4563F] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#D4563F]/80'
									: item.id === 'discord'
										? 'rounded-md bg-[#5865F2] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4752C4] flex items-center justify-center'
										: 'block w-auto rounded-md px-3 py-2 text-center text-white transition-colors hover:bg-gray-100 hover:text-gray-900 md:inline-block'
							}`}
							onClick={() => isMenuOpen = false}
						/>
					{/each}
				</div>
			</div>
		</nav>
	{/if}
</div>
