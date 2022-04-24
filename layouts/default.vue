<template>
  <div>
    <default-header />
    <Nuxt />
    <default-footer />
  </div>
</template>
<script>
import DefaultHeader from "@/components/layouts/header";
import DefaultFooter from "@/components/layouts/defaultFooter.vue";
export default {
  components: { DefaultHeader, DefaultFooter }
};
</script>
<style></style>
