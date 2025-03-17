<script lang="ts">
	let { href, label } = $props<{
		href: string;
		label: string;
	}>();
</script>

<a 
	{href} 
	class="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors md:inline-block"
>
	{label}
</a>
