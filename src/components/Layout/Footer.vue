<script lang="ts">
const thisYear = new Date().getFullYear();

export default {
  data() {
    return { thisYear };
  },
};
</script>

<template>
  <div class="footer-box">
    {{ thisYear }}
  </div>
</template>

<style scoped>
.footer-box {
  margin-top: 5rem;
}
</style>
