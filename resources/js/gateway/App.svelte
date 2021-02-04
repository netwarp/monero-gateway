<script>	
	import ioClient from 'socket.io-client'
	import QrCode from 'svelte-qrcode'
	import ClipBoard from 'clipboard'
	import swal from 'sweetalert'

	let payment = window.payment

	// play with clipboard
	let is_copy = false
	is_copy = true
	setTimeout( () => is_copy = false, 3000 )
	

	// play with qrcode
	const window_width = window.innerWidth

	// socket io
	let io = ioClient(`/gateway`, {
		query: {
			page: 'gateway',
			payment_id: payment._id
		}
	})

	io.on('pop', (message) => {
		swal('Payment received', 'thanks you', 'success')
	})
</script>

<div class="gateway-container">

	<div class="gateway-header">
		<div class="title">
			Order id: { payment._id }
		</div>
		<div>
			payment_id: { payment.payment_id }
		</div>
	</div>

	<div class="gateway-body">
		<div class="data">

			<div class="kv">
				<div class="key">
					Amount:
				</div>
				<div class="value">
					{ payment.amount } XMR
				</div>
			</div>

			<div class="kv">
				<div class="key">
					Address:
				</div>
				<div class="value">
					{ payment.address }
				</div>
			</div>

			<div class="kv">
				<div class="key">
					Payment id:
				</div>
				<div class="value">
					{ payment.payment_id }
				</div>
			</div>

			<div class="kv">
				<div class="key">
					Uri:
				</div>
				<div class="value">
					{ payment.uri }
				</div>
			</div>
		</div>

		<div class="qrcode-container">
			<QrCode value="{payment.uri}" padding="0" size="300" background="#ffffff" />
		</div>	
	</div>
</div>