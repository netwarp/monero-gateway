<script>
	import axios from 'axios'
	import swal from 'sweetalert'

	async function fetchTransactions() {
		try {
			const url = '/api/wallet'

			const object ={ 
				"jsonrpc":"2.0", 
				"id":"0", 
				"method":"get_transfers",
				"params": {
					"in": true,
					"out": true
				}
			}

			const response = await axios.post(url, object)
			const result = data.result

		} catch (error) {
			swal('Nope', 'Nope', 'error')
		}
	}
</script>

<div class="row mt-3">
	<div class="col">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eveniet repellendus ab quibusdam voluptate impedit veritatis optio qui autem, vel labore sit minima, dolorum aspernatur eaque blanditiis, explicabo numquam libero!
	</div>
</div>