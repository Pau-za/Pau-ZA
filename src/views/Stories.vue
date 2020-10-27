<template>
  <div>
    <Mandala/>
    <h3 class="title">¿Cómo llegué a la programación?</h3>
    <StoryTellingImg/>
    <StoriesBlog/>
  </div>
</template>

<script>
import Mandala from "@/components/Mandala";
import StoriesBlog from "@/components/StoriesBlog";
import StoryTellingImg from "@/components/StoryTellingImg";
export default {
  name: "Stories",
  components: {
    Mandala,
    StoriesBlog,
    StoryTellingImg
  }
};
</script>
