<script>	
	import ioClient from 'socket.io-client'
	import QrCode from 'svelte-qrcode'
	import CopyToClipboard from "svelte-copy-to-clipboard";
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

	const handleSuccessfullyCopied = (e) => {
		alert(`successfully copied to clipboard!`);
	}

	const handleFailedCopy = () => {
		alert('failed to copy :(');
	}


</script>

<div class="gateway-container">

	<div class="gateway-header">
		<div class="title">
			Order id: { payment._id }
		</div>
	</div>

	<div class="gateway-body">
		<div class="data">

			<div class="kv">
				<div class="key">
					Amount:
				</div>

				<CopyToClipboard text="{payment.amount}" on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
				      <button class="value" on:click={copy}>{payment.amount}</button>
				</CopyToClipboard>
			</div>

			<div class="kv">
				<div class="key">
					Address:
				</div>

				<CopyToClipboard text="{payment.address}" on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
				      <button class="value" on:click={copy}>{payment.address}</button>
				</CopyToClipboard>
			</div>

			<div class="kv">
				<div class="key">
					Payment id:
				</div>

				<CopyToClipboard text="{payment.payment_id}" on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
				      <button class="value" on:click={copy}>{payment.payment_id}</button>
				</CopyToClipboard>
			</div>

			<div class="kv">
				<div class="key">
					Uri:
				</div>

				<CopyToClipboard text="{payment.uri}" on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
				      <button class="value" on:click={copy}>{payment.uri}</button>
				</CopyToClipboard>
			</div>
		</div>

		<div class="qrcode-container">
			<QrCode value="{payment.uri}" padding="0" size="300" background="#ffffff" />
		</div>	
	</div>
</div>