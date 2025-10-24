<script>
	export let errors = null;
</script>

{#if errors}
	<ul class="error-messages">
		{#each Object.entries(errors) as [field, messages]}
			{#each messages as message}
				<li>{field} {message}</li>
			{/each}
		{/each}
	</ul>
{/if}
