<template>
  <div>
    <Mandala/>
    <h3 class="title">About Me</h3>
    <MyInfo/>
  </div>
</template>

<script>
import Mandala from "@/components/Mandala";
import MyInfo from "@/components/MyInfo";
export default {
  name: "AboutMe",
  components: {
    Mandala,
    MyInfo
  }
};
</script>
