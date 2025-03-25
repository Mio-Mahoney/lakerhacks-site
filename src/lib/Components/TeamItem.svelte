<script lang="ts">
	let { name, role } = $props();
</script>

<div class="flex flex-row gap-[15px] rounded-xl bg-gray-200 p-[30px]">
	<div class="h-[50px] w-[50px] rounded-full bg-gray-400"></div>
	<div class="flex flex-col justify-center">
		<p class="text-left text-[20px] font-bold">{name}</p>
		<p class="text-left text-[14px] text-gray-800">{role}</p>
	</div>
</div>
