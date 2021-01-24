<script>
	import ioClient from 'socket.io-client'
	import swal from 'sweetalert'
	import QrCode from 'svelte-qrcode'
	import ClipBoard from 'clipboard'

	/**
	 * Get some data about payment
	 *
	 *
	 */
	let payment = {
		txid: new URL(window.location).searchParams.get('txid'),
		amount: 0.03,
		payed: false
	}

	/**
	 * Set qrcode size
	 *
	 */
	const window_width = window.innerWidth

	// play with clipboard
	var clipboard = new ClipBoard('.btn');

	let is_copy = false

	clipboard.on('success', function(e) {
	    console.info('Action:', e.action);
	    console.info('Text:', e.text);
	    console.info('Trigger:', e.trigger);

	    is_copy = true

	    setTimeout( () => is_copy = false, 3000 )

	    e.clearSelection();
	});

	clipboard.on('error', function(e) {
	    console.error('Action:', e.action);
	    console.error('Trigger:', e.trigger);
	});



	// socket io
	let io = ioClient()

	io.on('tx_done', (tx) => {
		swal('Good job!', 'You clicked the button!', 'success')
	})
</script>

<div class="gateway-container">
	<div class="gateway-header">
		<div class="title">
			Order: #23232
		</div>
		<div>
			{payment.txid}
		</div>
	</div>
	<div class="gateway-body">
		
		<div class="alert success hide">
			
		</div>

		<div class="qrcode-container">
			<QrCode value="{payment.txid}" padding="10" size="400" />
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