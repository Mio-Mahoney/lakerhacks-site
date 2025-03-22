<script lang="ts">
	import { onMount } from 'svelte';
	import NavItem from './NavItem.svelte';
	import NavButton from './NavButton.svelte';

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
	<div class="flex items-center justify-between py-[14px] px-[20px] border-b border-gray-200 xl:hidden">
		<div class="flex items-center">
			<a href="/" aria-label="Go to Home">
				<img src="/logo.png" alt="LakerHacks Logo" class="h-[40px] w-auto" />
			</a>
		</div>
		<NavButton {isMenuOpen} {toggleMenu} />
	</div>

	<!-- Navigation -->
	<nav class={`${isMenuOpen ? 'block' : 'hidden'} bg-white py-[14px] px-[20px] border-b border-gray-200 xl:block`}>
		<div
			class="flex justify-between items-center"
		>
			<div class="hidden xl:flex xl:items-center">
				<a href="/" aria-label="Go to Home">
					<img src="/logo.png" alt="LakerHacks Logo" class="h-[40px] w-auto" />
				</a>
			</div>
			<div class="flex flex-col xl:flex-row gap-[20px] justify-center items-center w-full xl:w-auto">
				{#each navItems as item}
					<NavItem 
						href={item.href} 
						label={item.label} 
						class={`${
							item.id === 'register' ? 'bg-gray-800 px-6 py-2 text-sm font-medium text-white rounded-md transition-colors hover:bg-gray-700 ' :
							item.id === 'discord' ? 'bg-gray-800 px-6 py-2 text-sm font-medium text-white rounded-md transition-colors hover:bg-gray-700 ' :
							'block w-auto px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors md:inline-block text-center'
						}`}
					/>
				{/each}
			</div>
		</div>
	</nav>
</div>
