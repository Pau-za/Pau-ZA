<template>
  <div>
    <Mandala/>
    <div class="container">
      <h3 class="title">These are some of my skills</h3>
      <ToolsIcons/>
    </div>
  </div>
</template>

<script>
import ToolsIcons from "@/components/ToolsIcons";
import Mandala from "@/components/Mandala";
export default {
  name: "tools",
  components: {
    Mandala,
    ToolsIcons
  }
};
</script>
