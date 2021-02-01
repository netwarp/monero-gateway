<script>
	import { onMount } from 'svelte';
	import axios from 'axios'

	let payments = []

	// load payments
	onMount(async () => {
		const response = await axios.get('/api/payments')
		const data = await response.data

		payments = data
	})

	let amount = 132323232332323
	async function createPayment() {
		const response = await axios.post('/api/payments', { amount })
		const data = await response.data
		
		payments.unshift(data)

		payments = payments
	}

	const colors = {
		initialised: 'secondary',
		pending: 'warning',
		completed: 'success',
		cancelled: 'danger'
	}

	import { Helpers } from '../_stores'


	import ioClient from 'socket.io-client'

	
</script> 

<div class="row mt-3">
	<h1>Payments</h1>
	<div class="col-md">

		<div>
			<form on:submit|preventDefault={ createPayment }>
				<input type="text" placeholder="amount" bind:value={amount} >
				<button type="submit">Send</button>
			</form>
		</div>
	
		<div class="card">
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>ID <small>(in database)</small></th>
							<th>Status</th>
							<th>Amount</th>
							<th>Txid <small>(in wallet)</small></th> 
							<th>Created at</th>
							<th>Updated at</th>
						</tr>
					</thead>
					<tbody>
						{#each payments as payment }
							<tr>
								<td>{ payment._id }</td>
								<td><i class="bi bi-circle-fill text-{ colors[payment.status] }"></i> { payment.status }</td>
								<td>{ payment.amount }</td>
								<td>{ Helpers.formatLargeString(payment.payment_id) }</td>
								<td>{ payment.created_at }</td>
								<td>{ payment.updated_at }</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<div class="row mt-3">
	<div class="col-md">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae. Voluptatem id nisi, dolore, nam temporibus suscipit aliquid ipsum repellat neque tempora consequatur soluta quae asperiores mollitia sapiente quam recusandae.s
	</div>
</div>