<template>
  <div class="container line-btm vp-1">
    <BreadCrumb :items="items" :home="home" />
    <div class="line-btm">
      <h1>{{ t('products.label.l2') }}</h1>
    </div>
    <div class="vp-1">
      <p>{{ t('installation.text1') }}</p>
      <p>{{ t('installation.text2') }}</p>
      <p>{{ t('installation.text3') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PageName } from '@/enums/PageName'
import BreadCrumb from '@/components/BreadCrumb.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()
const items = computed(() => [{ label: t('products.label.l2'), pageName: PageName.ElectricalInstallation }])
const home = computed(() => {
  return { label: t('menubar.products'), pageName: PageName.Products }
})
</script>

<style lang="scss" scoped></style>
