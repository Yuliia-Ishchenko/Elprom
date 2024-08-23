<template>
  <DetailPageLayout :main-title="title" :img-arr="imgUrlList" :is-products="true">
    <template v-slot:main-contant>
      <p class="text-bold color-red">{{ t('photovoltaic.text2') }}</p>
      <p>
        <span> – {{ t('photovoltaic.text9') }}</span> <br />
        <span> – {{ t('photovoltaic.text3') }}</span> <br />
        <span> – {{ t('photovoltaic.text4') }}</span> <br />
        <span> – {{ t('photovoltaic.text5') }}</span> <br />
        <span> – {{ t('photovoltaic.text6') }}</span> <br />
        <span> – {{ t('photovoltaic.text7') }}</span> <br />
        <span> – {{ t('photovoltaic.text8') }}</span> <br />
      </p>
      <br />
      <p class="text-bold color-red" style="margin-bottom: 0">{{ t('photovoltaic.text10') }}</p>
      <div class="" style="display: flex; justify-content: space-between">
        <div class="">
          <p class="text-bold">{{ t('photovoltaic.text11') }}</p>
          <p>
            <span> – {{ t('photovoltaic.text12') }}</span> <br />
            <span> – {{ t('photovoltaic.text13') }}</span> <br />
            <span> – {{ t('photovoltaic.text14') }}</span> <br />
          </p>
        </div>
        <div class="">
          <p class="text-bold">{{ t('photovoltaic.text15') }}</p>
          <p>
            <span> – {{ t('photovoltaic.text16') }}</span> <br />
            <span> – {{ t('photovoltaic.text17') }}</span> <br />
          </p>
        </div>
      </div>
    </template>
  </DetailPageLayout>
  <div class="container line-btm vp-1">
    <div class="vp-1" style="text-align: center">
      <p class="color-red">
        {{ t('photovoltaic.text18') }}
        <span class="career-icons">
          <a :href="`mailto:info@elpromservice.cz`" class="email">info@elpromservice.cz</a>
        </span>
        {{ t('photovoltaic.text19') }}
      </p>
      <Button class="p-button-danger" :label="t('inquiryForm')" @click="dialogVisible = true" />
    </div>
  </div>
  <Dialog v-model:visible="dialogVisible" modal :header="t('inquiryFormIn.header')">
    <InquiryForm @on-cancel="dialogVisible = false" />
  </Dialog>
</template>

<script lang="ts" setup>
import DetailPageLayout from '@/components/DetailPageLayout.vue'
import InquiryForm from '@/components/InquiryForm.vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

import IMG_1015 from '/src/assets/img/global_photovl/Photov_1.jpg'
import IMG_1015small from '/src/assets/img/global_photovl/Photov_1@small.jpg'
import IMG_1031 from '/src/assets/img/global_photovl/Photov_2.jpg'
import IMG_1031small from '/src/assets/img/global_photovl/Photov_2@small.jpg'
import IMG_1006 from '/src/assets/img/global_photovl/Photov_3.jpg'
import IMG_1006small from '/src/assets/img/global_photovl/Photov_3@small.jpg'
import IMG_0969 from '/src/assets/img/global_photovl/Photov_4.jpg'
import IMG_0969small from '/src/assets/img/global_photovl/Photov_4@small.jpg'
const { t } = useI18n()
const dialogVisible = ref(false)
const title = computed(() => t('products.label.l3'))
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

<style lang="scss" scoped>
.text-bold {
  font-weight: 700;
}
li {
  line-height: 1.42857143;
}
a {
  color: var(--gray-text-color);
  font-weight: 600;
}
a:focus,
a:hover,
a:active {
  outline: 0;
  color: #999caa;
  text-decoration: none;
}
</style>
