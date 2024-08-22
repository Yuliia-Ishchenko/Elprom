<template>
  <DetailPageLayout :main-title="title" :img-arr="imgUrlList" :is-products="false" :pageName="PageName.Services">
    <template v-slot:main-contant> {{ t('global_services.serv_text_1') }}</template>
  </DetailPageLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { PageName } from '@/enums/PageName'
import DetailPageLayout from '@/components/DetailPageLayout.vue'
const { t } = useI18n()
const title = computed(() => t('global_services.serv_title_1'))
const imgUrlList = [
  {
    itemImageSrc: '/src/assets/img/global_services/IMG_1015@2x.jpg',
    thumbnailImageSrc: '/src/assets/img/global_services/IMG_1015@small.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '/src/assets/img/global_services/IMG_1031@2x.jpg',
    thumbnailImageSrc: '/src/assets/img/global_services/IMG_1031@small.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '/src/assets/img/global_services/IMG_1006@2x.jpg',
    thumbnailImageSrc: '/src/assets/img/global_services/IMG_1006@small.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '/src/assets/img/global_services/IMG_0969@2x.jpg',
    thumbnailImageSrc: '/src/assets/img/global_services/IMG_0969@small.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
]
</script>

<style lang="scss" scoped></style>
