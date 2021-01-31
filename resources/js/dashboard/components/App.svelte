<script>
	import { view } from '../_stores'

	import Home from './Home'
	import Network from './Network'
	import Transactions from './Transactions'
	import Payments from './Payments'
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-2" id="sidebar">
			<nav>
				<ul>
					
					<li class="{ $view === 'home' ? 'active' : '' }" on:click={ () => $view = 'home' }>
						<span>
							<i class="bi bi-house-door"></i> Home
						</span>
					</li>

					<li class="{ $view === 'network' ? 'active' : '' }" on:click={ () => $view = 'network' }>
						<span>
							<i class="bi bi-hdd-network"></i> Network
						</span>
					</li>

					<li class="{ $view === 'transactions' ? 'active' : '' }" on:click={ () => $view = 'transactions' }>
						<span><i class="bi bi-wallet2"></i> Transactions <small>(in wallet)</small> </span>
					</li>

					<li class="{ $view === 'payments' ? 'active' : '' }" on:click={ () => $view = 'payments' }>
						<span><i class="bi bi-credit-card"></i> Payments <small>( in database)</small></span>

						<ul class="mx-4">
							<li class="{ $view === 'incoming' ? 'active' : '' }" on:click={ () => $view = 'incoming' }><i class="bi bi-arrow-repeat"></i> Incoming</li>
						</ul>
					</li>
					
				</ul>
			</nav>
		</div>
		<div class="col-md">
			<div class="row">
			 <header class="">
			 	<div class="nav_item">
			 		<i class="bi bi-person-circle"></i>
			 	</div>
			 	<div class="nav_item">
			 		<i class="bi bi-bell"></i>
			 	</div>
			 </header>
			 </div>

			 <main>
			 	{#if $view === 'home'}
			 		<Home />
			 	{:else if $view === 'network'}
			 		<Network />
			 	{:else if $view === 'transactions'}
			 		<Transactions />
			 	{:else if $view === 'payments'}
			 		<Payments />
				{/if}
			 </main>
		</div>
	</div>
</div>

