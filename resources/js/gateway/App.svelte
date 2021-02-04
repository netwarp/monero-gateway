<script>	
	import ioClient from 'socket.io-client'
	import QrCode from 'svelte-qrcode'
	import CopyToClipboard from "svelte-copy-to-clipboard";
	import swal from 'sweetalert'

	let payment = window.payment
	//payment.status = 'completed'
	
	// socket io
	let io = ioClient(`/gateway`, {
		query: {
			page: 'gateway',
			payment_id: payment._id
		}
	})

	io.on('pop', (message) => {
		payment.status = 'completed'
		swal('Payment received', 'thanks you', 'success')
	})

	const handleSuccessfullyCopied = (e) => {
		alert(`successfully copied to clipboard!`);
	}

	const handleFailedCopy = () => {
		alert('failed to copy :(');
	}

	const Converter = {
		xmrToAtomicUnits(number) {
			return number * 1_000_000_000_000 
		},

		atomicUnitsToXmr(number) {
			return (number / 1_000_000_000_000).toFixed(12)
		}
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

				<CopyToClipboard text="{Converter.atomicUnitsToXmr(payment.amount)}" on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
				      <button class="value" on:click={copy}>{Converter.atomicUnitsToXmr(payment.amount)} XMR</button>
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

	<div class="gateway-footer {payment.status === 'completed' ? 'success' : ''}">
		{#if payment.status === 'completed'}
			<div>
				<span>Payment completed</span>
				<span><a href="/yourwebsite">Go back to website</a></span>
			</div>
		{/if}
	</div>
</div>