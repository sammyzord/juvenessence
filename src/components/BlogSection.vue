<script setup lang="ts">
const postFiles: Record<
  string,
  Record<string, string | string[]>
> = import.meta.glob("../assets/posts/**/post.json", {
  eager: true,
});

const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
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
      v-for="[_key, post] in Object.entries(postFiles)"
      class="flex flex-col gap-y-2 text-stone-500"
    >
      <h2 class="text-stone-700 text-3xl font-semibold">{{ post.title }}</h2>
      <p class="text-lg">
        <span class="font-semibold text-stone-700">Date:</span>
        {{ formatDate(post.date as string) }}
      </p>
      <div class="border-b-2 border-stone-500 w-1/2 mb-4"></div>
      <p v-for="paragraph in post.paragraphs" class="mb-4">
        {{ paragraph }}
      </p>
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
