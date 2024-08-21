<template>
  <div class="online">
    <Menu />
    <IngeteamLink />
    <main>
      <router-view />
      <ScrollTop />
    </main>
    <FooterLinks />
    <FooterCopyright />
  </div>
</template>

<script setup lang="ts">
import ScrollTop from 'primevue/scrolltop'
import Menu from '@/components/Menu.vue'
import FooterCopyright from '@/components/FooterCopyright.vue'
import FooterLinks from '@/components/FooterLinks.vue'
import IngeteamLink from '@/components/IngeteamLink.vue'
</script>

<style scoped>
main {
  margin-top: 83px;
}
</style>
