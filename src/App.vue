<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
