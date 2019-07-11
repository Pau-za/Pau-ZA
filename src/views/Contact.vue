<template>
  <div>
    <Mandala />
    <h3 class="title">Contact Me</h3>
    <h5 class="title">Let's create awesome things!</h5>
    <div class="container">
      <ContactInfo/>
    </div>
  </div>
</template>

<script>
import Mandala from "@/components/Mandala";
import ContactInfo from "@/components/ContactInfo";
export default {
  name: "Concact",
  components: {
    Mandala,
    ContactInfo
  }
};
</script>

