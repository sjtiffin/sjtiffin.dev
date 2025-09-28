<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import sara from '$lib/assets/me.jpg';

	import { GithubIcon, LinkedinIcon } from '@lucide/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto flex max-w-2xl flex-col justify-center px-4">
	<header class="mt-4 mb-16 flex items-center space-x-2">
		<a href="/" class="btn border-secondary">Home</a>
		<a href="/projects" class="btn border-secondary">Projects</a>
		<a href="https://github.com/sjtiffin" target="_blank" class="btn border-secondary"
			><GithubIcon /></a
		>
		<a href="https://linkedin.com/in/sjtiffin" target="_blank" class="btn border-secondary"
			><LinkedinIcon /></a
		>
		<div class="avatar ml-auto">
			<div class="w-24 rounded-full ring-2 ring-secondary">
				<img src={sara} alt="Sara Tiffin" />
			</div>
		</div>
	</header>
	{@render children?.()}
</div>
