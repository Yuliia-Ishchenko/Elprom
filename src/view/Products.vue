<template>
  <div class="line-btm vp-1">
    <div class="container line-btm">
      <h1>{{ t('menubar.products') }}</h1>
    </div>
    <div class="product-block vp-1 line-btm">
      <div class="container">
        <h2 @click="goToPage(PageName.Switchboard)">{{ t('products.label.l1') }}</h2>
        <p>{{ t('switchboard.text1') }}</p>
        <p>{{ t('switchboard.text2') }}</p>
        <p class="color-red">{{ t('switchboard.text3') }}</p>
      </div>
      <div class="img-row">
        <div class=""><img src="/src/assets/img/news/img_2760_optimized-300x225.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_3787_optimized-300x225.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_3798_optimized-300x225.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_2760_optimized-300x225.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_3787_optimized-300x225.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_3798_optimized-300x225.jpg" alt="" /></div>
      </div>
    </div>
    <div class="product-block vp-1 line-btm">
      <div class="container">
        <h2 @click="goToPage(PageName.ElectricalInstallation)">{{ t('products.label.l2') }}</h2>
        <p>{{ t('installation.text1') }}</p>
        <p>{{ t('installation.text2') }}</p>
        <p>{{ t('installation.text3') }}</p>
      </div>
      <div class="img-row">
        <div class=""><img src="/src/assets/img/news/IMG_0642-225x300.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/IMG_0846-225x300.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/IMG_0843-225x300.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_2759_optimized-225x300.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_2764_optimized-225x300.jpg" alt="" /></div>
        <div class=""><img src="/src/assets/img/news/img_3795_optimized-225x300.jpg" alt="" /></div>
      </div>
    </div>
    <div class="product-block vp-1 line-btm">
      <div class="container">
        <h2 @click="goToPage(PageName.Photovoltaic)">{{ t('products.label.l3') }}</h2>
        <p class="color-red">{{ t('photovoltaic.text1') }}</p>
      </div>
      <div class="img-row" id="pr-l-4">
        <div class=""><img src="/src/assets/img/news/IMG_20230331_092012-300x170.jpg" alt="" /></div>
      </div>
    </div>
    <div class="product-block vp-1">
      <div class="container">
        <h2>{{ t('products.label.l4') }}</h2>
        <ul>
          <li>{{ t('productNext.text1') }}</li>
          <li>{{ t('productNext.text2') }}</li>
          <li>{{ t('productNext.text3') }}</li>
          <li>{{ t('productNext.text4') }}</li>
          <li>{{ t('productNext.text5') }}</li>
          <li>{{ t('productNext.text6') }}</li>
          <li>{{ t('productNext.text7') }}</li>
          <li>{{ t('productNext.text8') }}</li>
          <li>{{ t('productNext.text9') }}</li>
          <li>{{ t('productNext.text10') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PageName } from '@/enums/PageName'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
function goToPage(pageName: string) {
  router.push({ name: pageName })
}
</script>

<style lang="scss" scoped>
.product-block {
  h2 {
    cursor: pointer;
  }
  li {
    line-height: 1.42857143;
  }
  .img-row {
    display: flex;
    justify-content: center;
    div {
      margin: 0 0.2rem;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
