<script lang="ts">
	import { onMount } from 'svelte';
	import NavItem from './NavItem.svelte';
	import NavButton from './NavButton.svelte';
	import Logo from '$lib/assets/logo.png';

	const { navItems } = $props();

	// For responsive navigation
	let isMenuOpen: boolean = $state(false);

	function toggleMenu(): void {
		isMenuOpen = !isMenuOpen;
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

<div class="sticky top-0 bg-white">
	<!-- Mobile header with logo and menu button -->
	<div
		class="flex items-center justify-between border-b border-gray-200 px-[20px] py-[14px] xl:hidden"
	>
		<div class="flex items-center">
			<a href="/" aria-label="Go to Home">
				<img src={Logo} alt="LakerHacks Logo" class="h-[40px] w-auto" />-
			</a>
		</div>
		<NavButton {isMenuOpen} {toggleMenu} />
	</div>

	<!-- Navigation -->
	<nav
		class={`${isMenuOpen ? 'block' : 'hidden'} border-b border-gray-200 bg-white px-[20px] py-[14px] xl:block`}
	>
		<div class="flex items-center justify-between">
			<div class="hidden xl:flex xl:items-center">
				<a href="/#home" aria-label="Go to Home">
					<img src={Logo} alt="LakerHacks Logo" class="h-[40px] w-auto" />
				</a>
			</div>
			<div
				class="flex w-full flex-col items-center justify-center gap-[20px] xl:w-auto xl:flex-row"
			>
				{#each navItems as item}
					<NavItem
						href={item.href}
						label={item.label}
						class={`${
							item.id === 'register'
								? 'rounded-md bg-gray-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 '
								: item.id === 'discord'
									? 'rounded-md bg-gray-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 '
									: 'block w-auto rounded-md px-3 py-2 text-center text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 md:inline-block'
						}`}
					/>
				{/each}
			</div>
		</div>
	</nav>
</div>
