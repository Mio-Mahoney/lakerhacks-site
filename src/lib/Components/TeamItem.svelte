<script lang="ts">
	let { name, role, image, linkedinUrl } = $props<{
		name: string;
		role: string;
		image?: string;
		linkedinUrl?: string;
	}>();
</script>

<div class="flex flex-row gap-2 sm:gap-4 rounded-xl bg-[#0B111F]/50 backdrop-blur-sm border border-white/10 p-3 sm:p-5 transition-all duration-300 hover:bg-[#0B111F]/90 hover:border-[#9CC747]/50 hover:shadow-md hover:shadow-[#9CC747]/5 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
	<div class="h-12 w-12 flex-shrink-0 rounded-full overflow-hidden">
		{#if image}
			<img src={image} alt={`${name}'s profile picture`} class="h-full w-full object-cover" />
		{:else}
			<div class="h-full w-full bg-white/10"></div>
		{/if}
	</div>
	<div class="flex flex-col justify-center min-w-0">
		<div class="flex items-center gap-2">
			<p class="text-left text-base font-bold text-[#FFE34F] truncate">{name}</p>
			{#if linkedinUrl}
				<a href={linkedinUrl} target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-white/80 transition-colors" aria-label={`${name}'s LinkedIn profile`}>
					<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
				</a>
			{/if}
		</div>
		<span class="text-left text-[14px] text-white/80">{role}</span>
	</div>
</div>
