<script lang="ts">
	let { href, label } = $props<{
		href: string;
		label: string;
	}>();
</script>

<a {href} class="">
	{label}
</a>
