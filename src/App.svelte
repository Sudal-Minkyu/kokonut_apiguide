<script>
  import Router from 'svelte-spa-router'
  import routes from './routes.js'


  // 레이아웃
  import Header from "./components/Header.svelte"

</script>

<Header />
<Router {routes} />