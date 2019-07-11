<template>
  <div>
    <Mandala/>
    <h3 class="title">Here I show you some of my projects</h3>
    <CardsProjects/>
  </div>
</template>

<script>
import Mandala from "@/components/Mandala";
import CardsProjects from "@/components/CardsProjects";
export default {
  name: "Projects",
  components: {
    Mandala,
    CardsProjects
  }
};
</script>
