<template>
  <div>
    <HeaderSection />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "./components/global/HeaderSection.vue";
import FooterSection from "./components/global/FooterSection.vue";

export default {
  components: {
    HeaderSection,
    FooterSection,
  }
}
</script>