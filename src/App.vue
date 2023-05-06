<script setup lang="ts">
import TitleSection from "./components/TitleSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center image">
    <TitleSection></TitleSection>
    <AboutSection></AboutSection>
    <ContactSection></ContactSection>
  </div>
</template>

<style scoped>
.image {
  background-image: url("./assets/stock-photo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
