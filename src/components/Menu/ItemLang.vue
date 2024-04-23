<template>
  <img
    v-if="item.name == 'cz'"
    src="../../assets/img/cze.png"
    class="img-thumbnail icon-small margin-right-10 color-heading language-current" />
  <img
    v-if="item.name == 'en'"
    src="../../assets/img/gbr.png"
    class="img-thumbnail icon-small margin-right-10 color-heading language-current" />
</template>

<script lang="ts" setup>
defineProps<{
  item?: any
  itemProps?: any
  root?: any
}>()
</script>

<style lang="scss" scoped>
.icon-small {
  width: 32px;
  height: 24px;
}
.language-current {
  position: relative;
  top: -1px;
}
.margin-right-10 {
  margin-right: 10px !important;
}
.color-heading {
  color: var(--gray-text-color)!important;
}
.img-thumbnail {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
img {
  vertical-align: middle;
}
</style>
