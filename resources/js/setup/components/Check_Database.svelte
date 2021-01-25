<script>
	import { slide } from '../_stores'

	import swal from 'sweetalert'

	function testConnection() {
		alert('ok')
	}
</script>

<div class="card">
	<div class="card-header">
		Check database
	</div>
	<div class="card-body">

		<div class="mb-3">
			<code>
			CREATE DATABASE "gateway" WITH OWNER "postgres" ENCODING 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
  			</code>
		</div>

		<form>
			<div class="form-group mb-3">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">Username</div>
					</div>
					<input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
				</div>
			</div>

			<div class="form-group mb-3">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">Password</div>
					</div>
					<input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Password">
				</div>
			</div>

			<div class="form-group mb-3">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">Database</div>
					</div>
					<input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Database">
				</div>
			</div>

			<div class="form-group mb-3">
				<button class="btn btn-primary" type="button" on:click={ () => testConnection() }>Test database</button>
			</div>
		</form>

		<div class="d-flex justify-content-between mt-3">
			<button class="btn btn-primary" on:click={ () => $slide-- }>Previous</button>
			<button class="btn btn-primary" on:click={ () => $slide++ }>Next</button>
		</div>
	</div>
</div>