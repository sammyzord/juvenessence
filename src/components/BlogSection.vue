<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
const postFiles: Record<
  string,
  Record<string, string | string[]>
> = import.meta.glob("../assets/posts/**/post.json", {
  eager: true,
});

const loaded: Ref<boolean> = ref(false);
const images: Ref<Record<string, any>> = ref({});

const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const getPictures = async () => {
  const keys = Object.keys(postFiles);

  for (const key of keys) {
    const path = key.replace("post.json", "picture");

    const jpgImage = await import(`${path}.jpg`);
    if (jpgImage.default.includes("/@fs")) {
      const pngImage = await import(`${path}.png`);
      images.value[key] = pngImage.default;
    } else {
      images.value[key] = jpgImage.default;
    }
  }
};

onMounted(async () => {
  await getPictures();
  loaded.value = true;
});
</script>

<template>
  <div
    class="flex flex-col space-y-20 items-center bg-stone-200 w-full md:w-10/12 px-10 md:px-20 pb-28"
  >
    <div class="flex flex-col items-center w-full space-y-10 mt-20">
      <div class="w-full border-t-2 border-stone-400"></div>
      <h2 class="blog-title font-bold text-stone-700 w-72 sm:w-96 text-center">
        BLOG
      </h2>
    </div>
    <div
      v-for="[key, post] in Object.entries(postFiles)"
      class="flex flex-col gap-y-2 text-stone-500"
    >
      <h2 class="text-stone-700 text-3xl font-semibold">{{ post.title }}</h2>
      <p class="text-lg">
        <span class="font-semibold text-stone-700">Date:</span>
        {{ formatDate(post.date as string) }}
      </p>
      <div class="border-b-2 border-stone-500 w-1/2 mb-4"></div>
      <div class="">
        <img
          :src="images[key]"
          class="w-11/12 sm:w-72 sm:h-96 object-cover sm:float-right mb-8 sm:mx-4 sm:mb-0"
        />
        <p v-for="paragraph in post.paragraphs" class="mb-4">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-title {
  font-size: 4rem;
  line-height: 1;
}
@media only screen and (max-width: 500px) {
  .blog-title {
    font-size: 3rem;
    line-height: 1;
  }
}

::selection {
  color: #44403c;
  background-color: #a8a29e;
}
</style>
