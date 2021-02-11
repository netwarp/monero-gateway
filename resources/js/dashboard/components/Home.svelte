<script>
	const code = [
		{
			status: 'Completed',
			color: 'green'
		},
		{
			status: 'Pending',
			color: 'orange'
		},
		{
			status: 'Canceled',
			color: 'red'
		}
	]
</script>
<div class="row mt-3 text-center">
	<div class="col-md">
		<div class="card">
			<div class="card-header">
				Transactions today
			</div>
			<div class="card-body">
				22
			</div>
		</div>
	</div>
	<div class="col-md">
		<div class="card">
			<div class="card-header">
				Transactions this week
			</div>
			<div class="card-body">
				22
			</div>
		</div>
	</div>
	<div class="col-md">
		<div class="card">
			<div class="card-header">
				Transactions totals
			</div>
			<div class="card-body">
				200
			</div>
		</div>
	</div>
</div>
<div class="row mt-3">
	<div class="col-md">
		<div class="card">
			<div class="card-header">
				Latest transactions
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Status</th>
							<th>Amount</th>
							<th>Created at</th>
							<th>Updated at</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>ezez</td>
							<td><i class="bi bi-circle-fill"></i> Completed</td>
							<td>1.2</td>
							<td>22/22/22</td>
							<td>22/22/22</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>