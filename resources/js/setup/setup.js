import App from './components/App.svelte'

window.onbeforeunload = function(){
  return 'Are you sure you want to leave?';
};

const app = new App({
	target: document.body,
	props: {
		name: ''
	}
});

export default app