<template>
  <div id="app" >
    <nav id="main-nav">
      <h1>Vue Widget</h1>
      <ul v-for="route in routes">
        <li><router-link :to='route.path'>{{route.name}}</router-link></li>
      </ul>
    </nav>
    <main id="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import  routes  from './views';

export default {
  name: 'app',
  data() {
    return {
      routes
    }
  }
};
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#main-nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
}
#content {
  position: absolute;
  top: 0;
  left: 240px;
  right: 0;
  bottom: 0;
}
</style>
