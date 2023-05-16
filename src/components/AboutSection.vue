<template>
  <div
    class="flex flex-col items-center bg-stone-200 w-full md:w-10/12 text-stone-900 pb-20 px-10 md:px-20 gap-y-20"
  >
    <div class="flex flex-col items-center w-full space-y-20 mt-20">
      <div class="w-full border-t-2 border-stone-400"></div>
      <h1 class="about-title font-bold text-stone-700 w-72 sm:w-96 text-center">
        ABOUT US
      </h1>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-x-20 gap-y-10">
      <div class="w-full lg:w-1/2">
        <img
          src="../assets/about-photo.jpg"
          alt=""
          class="object-cover h-image w-full"
        />
      </div>
      <div
        class="flex flex-col gap-y-8 font-serif italic md:text-xl leading-loose md:indent-8 w-full lg:w-1/2"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tristique, quam eu sollicitudin fringilla, odio arcu aliquam tellus,
          at bibendum risus urna et diam. Donec ac arcu neque. Vivamus dignissim
          arcu mauris, nec laoreet felis condimentum vitae. Etiam sodales ac
          turpis nec molestie. Suspendisse a sapien ut dui placerat sagittis.
        </p>
        <p>
          Nulla facilisi. Nullam sed velit enim. Ut id turpis commodo, consequat
          nisl vestibulum, volutpat neque. Vivamus faucibus ac augue non
          lacinia. Donec tristique blandit turpis id maximus. Suspendisse
          euismod massa vel nulla egestas pretium. Integer neque massa,
          pellentesque a venenatis non, semper sed mi. Ut tristique tortor id
          consectetur semper. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Nam eget porta nisi, in dictum arcu.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-image {
  height: 60vh;
}
.about-title {
  font-size: 4rem;
  line-height: 1;
}
@media only screen and (max-width: 500px) {
  .about-title {
    font-size: 3rem;
    line-height: 1;
  }
}
</style>
