<template>
    <div>
        <Mandala/>
        <h3 class="title">Contact Me!</h3>
        <ContactInfo/>
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
}
</script>

