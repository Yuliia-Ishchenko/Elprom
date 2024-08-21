<template>
  <div class="ingeteam-link" @click="goToIngeteam">
    <div class="as-menu-link">Ingeteam a.s.</div>
  </div>
</template>

<script lang="ts" setup>
function goToIngeteam() {
  window.open('https://www.ingeteam.cz', '_blank')
}
</script>

<style lang="scss" scoped>
.ingeteam-link {
  position: fixed;
  right: 4px;
  top: 6px;
  z-index: 3;
  background: var(--menu-bg-color);
  .as-menu-link {
    padding: 17px 18px 13px 18px;
    font-size: 13px;
    font-weight: 600;
    font-family: Arial, 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    line-height: 40px;
    color: white;

    transform: translate(0, 0);
    transition-duration: 300ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
  }
  .as-menu-link:hover {
    cursor: pointer;

    transform: translate(0, 10px);
    transition-duration: 300ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
  }
}
</style>
