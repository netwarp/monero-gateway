<script>
	import { slide } from '../_stores'


</script>

<div class="card">
	<div class="card-header">
		Welcome
	</div>
	<div class="card-body">
		<div>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>

		<div class="d-flex justify-content-end mt-3">
			<button class="btn btn-primary btn-" on:click={ () => $slide++ }>Start <i class="bi bi-arrow-right-short"></i></button>
		</div>
	</div>
</div>


