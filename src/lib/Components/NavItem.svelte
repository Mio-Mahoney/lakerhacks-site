<script lang="ts">
	let { href, label, class: customClass = '', onClick } = $props<{
		href: string;
		label: string;
		class?: string;
		onClick?: () => void;
	}>();

	// Check if the link is external
	const isExternal = href.startsWith('http');
</script>

<a 
	{href} 
	class={`block w-auto ${customClass}`}
	{...isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
	on:click={onClick}
>
	{@html label}
</a>
