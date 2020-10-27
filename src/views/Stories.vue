<template>
  <div>
    <Mandala/>
    <h3 class="title">My Story</h3>
    <StoriesBlog/>
  </div>
</template>

<script>
import Mandala from "@/components/Mandala";
import StoriesBlog from "@/components/StoriesBlog";
export default {
  name: "Stories",
  components: {
    Mandala,
    StoriesBlog
  }
};
</script>
