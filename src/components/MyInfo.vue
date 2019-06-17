<template>
  <div class="row container">
    <div class="col l5 m5 s12">
      <img
        class="responsive-img z-depth-5"
        id="my-pic"
        src="../assets/Paulina-Zedillo.jpg"
        alt="paulina's picture"
      >
    </div>
    <div class="col l7 m7 s12 text-aboutme">
      <h4 class="title">Front-End Developer/MBiolSci</h4>
      <h6 class="text">
        I am Paulina Zedillo Avelleyra.
        <br>I studied Front-End in the
        <a href="https://www.laboratoria.la/">Laboratoria Bootcamp</a>, that empowers women to get into the tech industry and makes it more diverse.
        <br>I love to acquire new knowledge every day, and technology and sciences are great ways to do it!
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInfo"
};
</script>

<style scoped>
.text-aboutme {
  margin-top: 15%;
}

#my-pic {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

@media only screen and (max-width: 1024px) {
  .text-aboutme {
    margin-top: 5%;
  }
}
</style>
