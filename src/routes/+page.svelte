<script>
	import { onMount } from 'svelte';
	import Logo from '$lib/icon.svg';
	import '$lib/main.scss';
	let results = false;

	onMount(() => {
		fetch('https://a.stomprocket.io/api/v1/ip')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				results = data;
			});
	});
</script>

<header class="header">
	<img class="logo" src={Logo} alt="Stomp Rocket Logo" />
	<p class="logoText">Stomp Rocket IP</p>
</header>
<main class="appContent">
	<h1>What's my ip?</h1>
	<p class="text-glow text-gradient ip">{results ? results.ip : ''}</p>
	<p class="location">
		<span class="text-gradient">{results ? results.location.city : ''}</span>
		{results ? results.location.region : ''}, {results ? results.location.country : ''}
	</p>
	<p class="browser">
		{results ? results.browser.name : ''}
		{results ? results.browser.version : ''}
		{results ? results.browser.os : ''}
	</p>
	<p>{results ? results.userAgent : ''}</p>
</main>
<footer class="footer">
	<p class="designed">
		Designed and built by <a
			class="text-glow text-gradient"
			href="https://www.ronanfuruta.com?r=srip"
			target="_blank">Ronan Furuta</a
		>
	</p>
</footer>
