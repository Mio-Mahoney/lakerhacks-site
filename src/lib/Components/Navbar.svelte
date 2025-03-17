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
	<div class="flex items-center justify-between p-4 md:hidden">
		<div class="flex items-center">
			<img src="/logo.png" alt="LakerHacks Logo" class="h-8 w-auto mr-2" />
		</div>
		<NavButton {isMenuOpen} {toggleMenu} />
	</div>

	<!-- Navigation -->
	<nav class={`${isMenuOpen ? 'block' : 'hidden'} bg-white px-2 py-4 shadow-sm md:block`}>
		<div
			class="mx-auto flex max-w-6xl flex-col space-y-2 md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-4"
		>
			<div class="hidden md:flex md:items-center">
				<img src="/logo.png" alt="LakerHacks Logo" class="h-8 w-auto mr-2" />
			</div>
			<div class="flex flex-col md:flex-row md:space-x-4">
				{#each navItems as item, i}
					<NavItem 
						href={item.href} 
						label={item.label} 
						external={item.external}
						isLastItem={i === navItems.length - 1} 
					/>
				{/each}
			</div>
		</div>
	</nav>
</div>
