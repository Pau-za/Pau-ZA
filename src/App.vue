<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper grey darken-4">
        <router-link to="/" class="brand-logo right">Logo</router-link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/tools">Tools</router-link>
          </li>
          <li>
            <router-link to="/projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/aboutme">About me</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
