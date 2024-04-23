<template>
  <img src="../../assets/img/elprom_logo.jpg" alt="elprom_service_logo" class="img-logo" />
</template>

<script lang="ts" setup>
defineProps<{
  item?: any
  itemProps?: any
}>()
</script>

<style lang="scss" scoped>
.img-logo {
  width: 235px;
  margin-right: 2rem;
}
.img-logo:hover {
  cursor: pointer;
}
</style>
