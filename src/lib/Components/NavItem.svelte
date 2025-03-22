<script lang="ts">
	let { href, label, class: customClass = '' } = $props<{
		href: string;
		label: string;
		class?: string;
	}>();
</script>

<a 
	{href} 
	class={`block w-auto ${customClass}`}
>
	{label}
</a>
