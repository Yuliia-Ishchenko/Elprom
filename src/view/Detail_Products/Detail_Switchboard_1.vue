<template>
  <DetailPageLayout :main-title="title" :img-arr="imgUrlList" :is-products="true" :pageName="PageName.Switchboards">
    <template v-slot:main-contant>
      <p>{{ t('global_sw.sw_text_1') }}</p>
      <p>{{ t('global_sw.sw_text_1_2') }}</p>
      <p>
        <span> – {{ t('global_sw.sw_text_1_2_list1') }}</span> <br />
        <span> – {{ t('global_sw.sw_text_1_2_list2') }}</span> <br />
        <span> – {{ t('global_sw.sw_text_1_2_list3') }}</span> <br />
      </p>
    </template>
  </DetailPageLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { PageName } from '@/enums/PageName'
import DetailPageLayout from '@/components/DetailPageLayout.vue'
import IMG_1015 from '/src/assets/img/global_switchboard/Symbol-93@2x.jpg'
import IMG_1015small from '/src/assets/img/global_switchboard/Symbol-93@small.jpg'
import IMG_1031 from '/src/assets/img/global_switchboard/Symbol-92@2x.jpg'
import IMG_1031small from '/src/assets/img/global_switchboard/Symbol-92@small.jpg'
import IMG_1006 from '/src/assets/img/global_switchboard/Symbol-91@2x.jpg'
import IMG_1006small from '/src/assets/img/global_switchboard/Symbol-91@small.jpg'
import IMG_0969 from '/src/assets/img/global_switchboard/Symbol-95@2x.jpg'
import IMG_0969small from '/src/assets/img/global_switchboard/Symbol-95@smal.jpg'
const { t } = useI18n()
const title = computed(() => t('global_sw.sw_title_1'))
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
