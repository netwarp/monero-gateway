<script>
	import { onMount } from 'svelte'
	
	import ioClient from 'socket.io-client'
	import QrCode from 'svelte-qrcode'
	import ClipBoard from 'clipboard'
	import swal from 'sweetalert'

	let payment = window.payment

	

	// play with clipboard
	let is_copy = false
	const clipboard = new ClipBoard('.btn')

	clipboard.on('success', function(e) {
	    console.info('Action:', e.action);
	    console.info('Text:', e.text);
	    console.info('Trigger:', e.trigger);

	    is_copy = true

	    setTimeout( () => is_copy = false, 3000 )

	    e.clearSelection();
	})

	clipboard.on('error', function(e) {
	    console.error('Action:', e.action);
	    console.error('Trigger:', e.trigger);
	})



	// play with qrcode
	const window_width = window.innerWidth


	// socket io
	let io = ioClient(`/gateway`, {
		query: {
			page: 'gateway',
			payment_id: payment._id
		}
	})

	io.on('message', (message) => {
		alert(message)
	})

	io.on('pop', (message) => {
		alert('pop')
		swal('Payment received', 'thanks you', 'success')
	})

	function testSocket() {
		io.emit('test')
	}
</script>

<div class="gateway-container">

	<button on:click={testSocket}>test specific socket</button>

	<div class="gateway-header">
		<div class="title">
			Order: { payment._id }
		</div>
		<div>
			{ payment.payment_id }
		</div>
	</div>

	<div class="gateway-body">
		
		<div class="alert success hide">
			
		</div>

		<div class="qrcode-container">
			<QrCode value="{payment.uri}" padding="10" size="400" />
		</div>

		<div class="amount">
			
		</div>

		<input id="address" value="{payment.txid}" hidden>

		{#if is_copy}
			<div>
				Copy in your clipboard
			</div>
		{/if}

		<button 
			class="btn" 
			data-clipboard-action="cut" data-clipboard-target="#address">
				{payment.txid}
		</button>
	</div>

	<div class="gateway-footer">
		yourwebsite.com
	</div>

	{#if payment.payed}
		<div>
			<a href="back to site">Back to site</a>
		</div>
	{/if}
</div>