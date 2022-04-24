<template>
  <div>
    <default-header />
    <Nuxt />
    <other-footer />
  </div>
</template>
<script>
import DefaultHeader from "@/components/layouts/header";
import OtherFooter from "@/components/layouts/otherFooter.vue";
export default {
  components: { DefaultHeader, OtherFooter }
};
</script>
<style></style>
