<template >
  <div class="flex h-20">
    <!-- Nav -->
    <div
      class="flex flex-wrap justify-between w-full h-20 text-white bg-black md:flex-nowrap"
    >
      <!-- LOGO -->
      <div class="z-30 flex items-center h-full pl-3 space-x-3 bg-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-16 h-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <p class="text-2xl text-">KAKI HOME</p>
      </div>
      <!-- MenuButton -->
      <button
        class="z-30 flex items-center justify-end flex-grow pr-3 bg-black focus:outline-none md:hidden"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <!-- Menu -->
      <div
        class="flex flex-col items-stretch w-screen text-xl text-center ease-in-out transform bg-black md:translate-y-0 md:flex-row md:space-x-5 md:items-center md:justify-end md:pr-3"
        :class="{ ' -translate-y-full': isMd, transition: screenWidth < 768 }"
      >
        <a
          href="#"
          class="h-10 leading-10 border-b-2 border-dotted md:border-none"
          >Home</a
        >
        <a
          href="#"
          class="h-10 leading-10 border-b-2 border-dotted md:border-none"
          >About</a
        >
        <a
          href="#"
          class="h-10 leading-10 border-b-2 border-dotted md:border-none"
          >Service</a
        >
        <a
          href="#"
          class="h-10 leading-10 border-b-2 border-dotted md:border-none md:bg-matisse-600 md:rounded-full md:w-24"
          >Log In</a
        >
        <a
          href="#"
          class="h-10 leading-10 border-b-2 border-dotted md:border-matisse-600 md:border-solid md:border-2 md:rounded-full md:w-24 md:leading-9"
          >Sign Up</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useScreenWidth from "./useScreenWidth";
export default defineComponent({
  setup() {
    const isMd = ref(true);
    const toggle = () => {
      isMd.value = !isMd.value;
    };
    const screenWidth = useScreenWidth();
    return {
      toggle,
      isMd,
      screenWidth,
    };
  },
});
</script>

<style scoped>
</style>