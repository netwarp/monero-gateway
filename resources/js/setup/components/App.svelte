<script>
	import { slide } from '../_stores'

	let current_slide

	const unsubscribe = slide.subscribe(value => current_slide = value)


	import Intro from './Intro'
	import Check_Software from './Check_Software'
	import Check_Database from './Check_Database'
    import Completed from './Completed'

    let bubbles = [
        'Intro',
        'Software',
        'Database',
        'Done'
    ]
</script>

<div class="container mt-3">

<!-- 
<ul class="progress-indicator">
    <li class="completed">
        <span class="bubble"></span>
        Start <br><small>(complete)</small>
    </li>
    <li class="completed">
        <span class="bubble"></span>
        Check install <br><small>(complete)</small>
    </li>
    <li class="active">
        <span class="bubble"></span>
        Step 3. <br><small>(active)</small>
    </li>
    <li>
        <span class="bubble"></span>
        Step 4.
    </li>
    <li>
        <span class="bubble"></span>
        Step 5.
    </li>
</ul>
-->

	<div class="col-md-8 mx-auto">
        <ul class="progress-indicator">
            {#each bubbles as bubble, index}
                <li class="{$slide === index ? 'active' : ($slide > index) ? 'completed' : 'pending' }">
                    <span class="bubble"></span>
                    <span>{bubble}</span>
                </li>
            {/each}
        </ul>


		<b>{$slide}</b>

		{#if $slide === 0}
			<Intro />
		{:else if $slide === 1}
			<Check_Software />
		{:else if $slide === 2}
			<Check_Database />
        {:else if $slide === 3}
            <Completed />
		{/if}
	</div>
</div>

