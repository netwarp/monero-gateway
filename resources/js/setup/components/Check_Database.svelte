<script>
	import { slide } from '../_stores'

	import swal from 'sweetalert'

	let test_connection = false

	function testConnection() {
		if (test_connection) 
			swal('Good job!', 'The database exists', 'success')
		else
			swal('Oups!', 'The database does not exist', 'error')
	}

	let tables_created = false
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
			<fieldset>
				<legend>Check database</legend>

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
			</fieldset>

			<fieldset>
				<legend>Admin user</legend>

				<div class="form-group mb-3">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">Name</div>
						</div>
						<input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Name">
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

			</fieldset>
			

			<div class="form-group mb-3">
				<button class="btn btn-secondary" type="button" on:click={ () => testConnection() }>Test database</button>

				<button class="btn btn-secondary { ! test_connection ? 'disabled' : ''}" type="button" on:click={ () => testConnection() }>Create tables</button>
			</div>
		</form>

		<div class="d-flex justify-content-between mt-3">
			<button class="btn btn-primary" on:click={ () => $slide-- }><i class="bi bi-arrow-left-short"></i> Previous</button>
			<button class="btn btn-primary { ! tables_created ? 'disabled' : ''}" on:click={ () => $slide++ }>Next <i class="bi bi-arrow-right-short"></i></button>
		</div>
	</div>
</div>