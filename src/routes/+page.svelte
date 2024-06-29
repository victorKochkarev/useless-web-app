<script lang="ts">
	import type { ActionData } from '../../.svelte-kit/types/src/routes/$types';

	export let form: ActionData
</script>

{#if form?.success }
	<h1 style="margin-bottom: 20px">
		{ form.excuse }
	</h1>
{/if}
<form method="POST" action="?/callForAction" class="prose">
	{#if form?.success }
		<h1>What else do you want me to do?</h1>
	{:else}
		<h1>What do you want me to do?</h1>
	{/if}

	<textarea name="actionText" class="textarea textarea-secondary"></textarea><br/>
	<button class="btn btn-secondary" >Just Do it</button>
</form>





