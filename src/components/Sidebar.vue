<template >
  <div class="flex min-h-screen font-serif bg-gray-100">
    <div
      class="flex flex-wrap items-center justify-between w-screen h-12 bg-white md:flex-col md:w-52 md:justify-start md:items-start md:min-h-screen"
    >
      <div class="h-12 pl-5 text-lg font-semibold leading-12">
        <a href="#">KAKI HOME</a>
      </div>

      <button
        class="mr-3 rounded-sm md:hidden focus:outline-none focus:ring-2 ring-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
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
      <div
        class="flex flex-col w-full px-10 py-2 space-y-2 leading-8 bg-white md:px-2"
      >
        <router-link
          to="/navbar"
          tag="button"
          class="rounded-full hover:bg-red-100 md:text-left md:pl-3"
        >
          Navbar
        </router-link>
        <router-link
          to="/a"
          class="rounded-full hover:bg-red-100 md:text-left md:pl-3"
        >
          Navbar
        </router-link>
        <router-link
          to="/a"
          class="rounded-full hover:bg-red-100 md:text-left md:pl-3"
        >
          Navbar
        </router-link>
        <router-link
          to="/a"
          class="rounded-full hover:bg-red-100 md:text-left md:pl-3"
        >
          Navbar
        </router-link>
        <router-link
          to="/a"
          class="rounded-full hover:bg-red-100 md:text-left md:pl-3"
        >
          Navbar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
</style>