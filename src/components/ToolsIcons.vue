<template>
  <div>
    <div class="row tools-icons">
      <div class="col l4 m4 s2 center"></div>
      <a href="https://vuejs.org/v2/guide/" target="blank">
        <img
          id="vue"
          class="icons col l1 m1 s2 responsive-img"
          src="../assets/icons/vue-logo.png"
          alt="vuejs"
          title="vuejs"
        >
      </a>
      <a href="https://www.javascript.com/" target="blank">
        <img
          id="js"
          class="icons col l1 m1 s2 responsive-img"
          src="../assets/icons/javascript.png"
          alt="javascript"
          title="javascript"
        >
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="blank">
        <img
          id="html"
          class="icons col l1 m1 s2 responsive-img"
          src="../assets/icons/HTML_Logo.png"
          alt="html5"
          title="html5"
        >
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank">
        <img
          id="css"
          class="icons col l1 m1 s2 responsive-img"
          src="../assets/icons/css3-512.png"
          alt="css3"
          title="css3"
        >
      </a>
      <div class="col l4 m4 s2 center"></div>
    </div>
    
    <div class="row tools-icons">
      <div class="col l3 m3 s1 center"></div>
      <a href="https://nodejs.org/en/" target="blank">
        <img
          id="node"
          class="icons col l1 m1 s1 responsive-img"
          src="../assets/icons/nodejs.png"
          alt="nodejs"
          title="nodejs"
        >
      </a>
      <a href="https://console.firebase.google.com/u/0/" target="blank">
        <img
          id="firebase"
          class="icons col l1 m1 s1 responsive-img"
          src="../assets/icons/firebase.png"
          alt="firebase"
          title="firebase"
        >
      </a>
      <a href="https://materializecss.com/" target="blank">
        <img
          id="materialize"
          class="icons col l1 m1 s1 responsive-img"
          src="../assets/icons/materialize3.png"
          alt="materialize"
          title="materialize"
        >
      </a>
      <a href="https://jestjs.io/" target="blank">
        <img
          id="jest"
          class="icons col l1 m1 s1 responsive-img"
          src="../assets/icons/jest-logo.png"
          alt="jest"
          title="jest"
        >
      </a>
      <a href="https://github.com/" target="blank">
        <img
          id="github"
          class="icons col l1 m1 s1 responsive-img"
          src="../assets/icons/Octocat.png"
          alt="github"
          title="Github"
        >
      </a>
      <div class="col l3 m3 s1 center"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolsIcons"
};
</script>

<style scoped>
.tools-icons {
  margin-top: 6%;
}

#vue,
#js,
#node,
#jest,
#html,
#css,
#firebase {
  width: 8%;
}

#materialize {
  width: 11%;
}

#github {
  width: 10%;
}

#linkedin {
  width: 5%;
}

#s-icon {
  width: 5%;
}

@media screen and (max-width: 600px) {
  #vue,
  #js,
  #node,
  #jest,
  #html,
  #css,
  #firebase {
    width: 15%;
  }

  #materialize {
    width: 22%;
  }

  #github {
    width: 20%;
  }
}
</style>
