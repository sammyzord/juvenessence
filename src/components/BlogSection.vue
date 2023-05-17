<script setup lang="ts">
// import { ref, onMounted, Ref } from "vue";
const postFiles: Record<
  string,
  Record<string, string | string[]>
> = import.meta.glob("../assets/posts/**/post.json", {
  eager: true,
});

const postPictures: Record<
  string,
  Record<string, string | string[]>
> = import.meta.glob("../assets/posts/**/picture.*", {
  eager: true,
});

console.log(postPictures);

const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const findKey = (key: string): string => {
  const number: string = key.split("/")[3];
  const item = Object.entries(postPictures).find((item) =>
    item[0].includes(number)
  );
  return item ? (item[1].default as string) : "";
};
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
          :src="findKey(key)"
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
