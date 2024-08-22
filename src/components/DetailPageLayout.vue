<template>
  <div class="detail-page-layout line-btm">
    <div class="row-img-carusel bg-gray">
      <div v-if="$props.pageName" class="find-out-more container" @click="goToPage()">
        <Button :label="`<<`" plain text />
      </div>
      <div class="main-title container">
        <h2>{{ props.mainTitle }}</h2>
      </div>
      <div class="img-carusel container">
        <Galleria
          :value="$props.imgArr"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          :circular="true"
          :showItemNavigators="true">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
          </template>
        </Galleria>
      </div>
    </div>

    <div class="main-contant container">
      <h3>{{ $props.isProducts ? t('About the product') : t('About the service') }}</h3>
      <slot name="main-contant"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'primeicons/primeicons.css'
import Galleria from 'primevue/galleria'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const { t } = useI18n()

const props = defineProps<{
  mainTitle: string
  imgArr: any[]
  isProducts: boolean
  pageName?: string
}>()
const router = useRouter()
function goToPage() {
  if (props.pageName) router.push({ name: props.pageName })
}
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
])
</script>

<style lang="scss" scoped>
.detail-page-layout {
  .find-out-more {
    .p-button {
      padding: 0 0.7rem 0.2rem 0.3rem;
      font-size: x-large;
      letter-spacing: -0.3rem;
    }
    margin-bottom: 0.5rem;
  }
  .row-img-carusel,
  .main-contant {
    padding: 2rem 0;
  }
  .img-carusel {
    display: flex;
    justify-content: center;
  }
}
</style>
