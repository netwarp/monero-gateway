<script>
	import { view } from '../_stores'

	import Home from './Home'
	import Network from './Network'
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-3 " id="sidebar">
			<nav>
				<ul>
					<li class="{ $view === 'home' ? 'active' : '' }" on:click={ () => $view = 'home' }><i class="bi bi-house-door"></i> Home</li>
					<li class="{ $view === 'network' ? 'active' : '' }" on:click={ () => $view = 'network' }><i class="bi bi-hdd-network"></i> Network</li>
					<li class="{ $view === 'transactions' ? 'active' : '' }" on:click={ () => $view = 'transactions' }><i class="bi bi-wallet2"></i> Transactions</li>
					<ul>
						<li>Incoming</li>
					</ul>
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
				{/if}
			 </main>
		</div>
	</div>
</div>

