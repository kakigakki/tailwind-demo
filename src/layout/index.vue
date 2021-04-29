<template >
  <Sidebar></Sidebar>
  <div class="custom-width">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Sidebar from "../components/Sidebar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Sidebar,
  },
});
</script>

<style scoped>
</style>