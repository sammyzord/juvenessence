<script setup lang="ts">
import TitleSection from "./components/TitleSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import BlogSection from "./components/BlogSection.vue";
import { ref, onMounted, Ref } from "vue";
import { opacityHelper } from "./utils/opacity";

const scroll = (position = 0) => {
  window.scrollTo({ top: position, behavior: "smooth" });
};

const about = () => {
  selected.value = "about";
  scroll(screen.height - 100);
};

const contact = () => {
  selected.value = "contact";
  scroll(document.body.scrollHeight);
};

const position = ref(0);

const selected: Ref<undefined | string> = ref(undefined);

onMounted(() => {
  window.addEventListener("scroll", function () {
    position.value = window.scrollY;
  });
});
</script>

<template>
  <div class="image">
    <div
      class="flex flex-col justify-center items-center bg-stone-800/50 backdrop-blur transition ease-in-out duration-700"
      :class="`backdrop-opacity-${opacityHelper(position)}`"
    >
      <TitleSection
        @about="about"
        @contact="contact"
        :position="position"
        :selected="selected"
      ></TitleSection>
      <AboutSection :position="position"></AboutSection>
      <BlogSection></BlogSection>
      <ContactSection></ContactSection>
    </div>
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
