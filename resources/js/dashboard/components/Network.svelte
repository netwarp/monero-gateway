<script>
	import axios from 'axios'
	import swal from 'sweetalert'

	//--rpc-bind-ip 127.0.0.1 --rpc-bind-port 18089 --disable-rpc-login --log-level 2 --wallet-file sn1 --prompt-for-password --stagenet

	let info = {
		height: null,
		nettype: null,
	 	status: null,
	 	synchronized: null,
		
		busy_syncing: null,
		version: null,
		update_available: null,
		free_space: null,
		
	}

	async function getInfo() {
		try {
			const url = '/api/daemon'

			const reponse = await axios.post(url, {
				"jsonrpc": "2.0",
				"id":"0", 
				"method":"get_info",
				"params": {}
			})

			const data = await reponse.data
			const result = data.result

			for (const [key, value] of Object.entries(info)) {
				info[key] = result[key]
			}

			console.log(info)

		} catch (error) {
			swal('Nope', 'Nope', 'error')
		}
	}

	getInfo()
</script>

<div class="row mt-3">
	<h1 class="h3">Network</h1>
	<div class="col-md-6">
		

		<div class="card mt-3">
			<div class="card-header">
				Wallet
			</div>
			<div class="card-body">
				<span class="">22332323 / 232323232323233</span> |
				<span>90%</span> 
				<div class="progress">
					<div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6">

		<div class="card mt-3">
			<div class="card-header">
				Daemon
			</div>
			<div class="card-body">
				<span class="">22332323 / {info.height}</span> |
				<span>30%</span> 
				<div class="progress">
					<div class="progress-bar" role="progressbar" style="width: 28%;" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>

		<div class="card mt-3">
			<div class="card-header d-flex justify-content-between align-items-center">
				Network info <button class="btn btn-secondary" on:click="{ () => getInfo() }">Refresh</button>
			</div>
			<div class="card-body">
				<table class="table table-bordered table-striped">
					<tbody>
						{#each Object.keys(info) as key}
							<tr>
								<td>{key}</td>
								<td>{info[key]}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

