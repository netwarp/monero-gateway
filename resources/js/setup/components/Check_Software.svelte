<script>
	import { slide } from '../_stores'
	import axios from 'axios'


	let softwares = [
		'Redis',
		'Postgres SQL',
		'Monero daemon',
		'Monero wallet',
	]

	async function check(software) {
		return new Promise((resolve, reject) => {

			const url = '/api/setup'

			axios.post(url, {
				software
			}).then(response => resolve(response.data))
		})
	}

	//check('git').then(response => console.log(response))



</script>

<div class="card">
	<div class="card-header">
		Install on your system
	</div>
	<div class="card-body">

		{#each softwares as software}
			<div class="mb-3">
				{software}
			</div>
		{/each}

		<div class="d-flex justify-content-between mt-3">
			<button class="btn btn-primary" on:click={ () => $slide-- }><i class="bi bi-arrow-left-short"></i> Previous</button>
			<button class="btn btn-primary" on:click={ () => $slide++ }>Next <i class="bi bi-arrow-right-short"></i></button>
		</div>		
	</div>
</div>