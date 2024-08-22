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
import IMG_1015 from '/src/assets/img/global_services/IMG_1015@2x.jpg'
import IMG_1015small from '/src/assets/img/global_services/IMG_1015small.jpg'
import IMG_1031 from '/src/assets/img/global_services/IMG_1031@2x.jpg'
import IMG_1031small from '/src/assets/img/global_services/IMG_1031small.jpg'
import IMG_1006 from '/src/assets/img/global_services/IMG_1006@2x.jpg'
import IMG_1006small from '/src/assets/img/global_services/IMG_1006small.jpg'
import IMG_0969 from '/src/assets/img/global_services/IMG_0969@2x.jpg'
import IMG_0969small from '/src/assets/img/global_services/IMG_0969small.jpg'
const { t } = useI18n()
const title = computed(() => t('global_services.serv_title_1'))
const imgUrlList = [
  {
    itemImageSrc: IMG_1015,
    thumbnailImageSrc: IMG_1015small,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: IMG_1031,
    thumbnailImageSrc: IMG_1031small,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: IMG_1006,
    thumbnailImageSrc: IMG_1006small,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: IMG_0969,
    thumbnailImageSrc: IMG_0969small,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
]
</script>

<style lang="scss" scoped></style>
