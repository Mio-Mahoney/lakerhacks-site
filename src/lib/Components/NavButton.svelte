<script lang="ts">
	let { isMenuOpen, toggleMenu } = $props<{
		isMenuOpen: boolean;
		toggleMenu: () => void;
	}>();
</script>

<button onclick={toggleMenu} class="text-gray-700 focus:outline-none" aria-label="Toggle menu">
	<svg class="pointer-events-none h-[40px] w-[40px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		{#if isMenuOpen}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"
			></path>
		{:else}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			></path>
		{/if}
	</svg>
</button>
