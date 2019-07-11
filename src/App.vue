<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper grey darken-4">
        <router-link to="/" class="brand-logo right">
          <img id="my-logo" src="./assets/pauza-logo.png" alt="pauza-logo">
        </router-link>
        <a href="#" class="sidenav-trigger" data-target="side-menu">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
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
    <ul class="sidenav" id="side-menu">
      <li>
        <router-link to="/tools">Tools</router-link>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <router-link to="/aboutme">About me</router-link>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  
   methods: {
    activate: document.addEventListener("DOMContentLoaded", () => {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    })
  }
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

#my-logo {
  width: 10%;
  margin-top: 1%;
  margin-left: 82%;
}

.title {
  font-family: "Mali", cursive;
  font-family: "Indie Flower", cursive;
  font-family: "Handlee", cursive;
  font-family: "Gloria Hallelujah", cursive;
}

.text {
  font-family: "Oswald", sans-serif;
  font-family: "Saira Semi Condensed", sans-serif;
  font-family: "Fjalla One", sans-serif;
  font-family: "Josefin Sans", sans-serif;
}
</style>
