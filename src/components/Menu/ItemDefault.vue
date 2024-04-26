<template>
  <span :class="item.icon" />
  <span class="ml-2" @click="redirect" style="width: 100%">{{ item.label }}</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  item?: any
  itemProps?: any
}>()
function redirect() {
  if (props.item.url) window.open(props.item.url, '_blank')
}
</script>

<style lang="scss"></style>
