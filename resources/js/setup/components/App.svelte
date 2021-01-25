<script>
	import { slide } from '../_stores'

	let current_slide

	const unsubscribe = slide.subscribe(value => current_slide = value)


	import Intro from './Intro'
	import Check_Software from './Check_Software'
	import Check_Database from './Check_Database'
</script>

<div class="container">

	<div class="col-md-8 mx-auto">
		<b>{$slide}</b>

		{#if $slide === 0}
			<Intro />
		{:else if $slide === 1}
			<Check_Software />
		{:else if $slide === 2}
			<Check_Database />
		{/if}
	</div>


	
</div>

