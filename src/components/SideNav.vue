<template>
  <div>
    <div class="container section">
      <a href="#" class="sidenav-trigger" data-target="side-menu">
        <i class="material-icons">menu</i>
      </a>
    </div>
    <ul class="sidenav" id="side-menu">
      <li>
        <p>hola</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  methods: {
    activate: document.addEventListener("DOMContentLoaded", () => {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    })
  }
};
</script>

