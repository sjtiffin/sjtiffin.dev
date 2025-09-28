<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto flex max-w-2xl flex-col justify-center px-4">
	<header>
		<a href="/" class="btn">Home</a>
		<a href="/projects" class="btn">Projects</a>
		<a href="https://github.com/sjtiffin" target="_blank" class="btn">Github</a>
		<a href="https://linkedin.com/in/sjtiffin" target="_blank" class="btn">LinkedIn</a>
	</header>
	{@render children?.()}
</div>
