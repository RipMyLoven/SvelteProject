<script>
	import { goto, stores } from '@sapper/app';
	import ListErrors from '../_components/ListErrors.svelte';
	import * as api from 'api.js';

	const { session } = stores();

	let username = '';
	let name = '';
	let password = '';
	let errors = null;

	async function submit(event) {
		try {
			const response = await post(`auth/register`, { username, name, password });

			if (response.errors) {
				errors = response.errors;
			} else if (response.user) {
				$session.user = response.user;
				goto('/');
			}
		} catch (err) {
			errors = { server: [err.message] };
		}
	}
</script>

<svelte:head>
	<title>Sign up • Conduit</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Sign up</h1>
				<p class="text-xs-center">
					<a href="/login">Have an account?</a>
				</p>

				{#if errors}
					<div class="alert alert-danger" role="alert"><ListErrors {errors}/></div>
				{/if}

				<form on:submit|preventDefault={submit}>
					<fieldset class="form-group">
						<input class="form-control form-control-lg" type="text" required placeholder="Your username" bind:value={username}>
					</fieldset>
					<fieldset class="form-group">
						<input class="form-control form-control-lg" type="text" required placeholder="name" bind:value={name}>
					</fieldset>
					<fieldset class="form-group">
						<input class="form-control form-control-lg" type="password" required placeholder="Password" bind:value={password}>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right">
						Sign up
					</button>
				</form>
			</div>
		</div>
	</div>
</div>