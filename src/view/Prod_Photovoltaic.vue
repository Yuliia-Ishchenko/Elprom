<template>
  <div class="global-photovoltaic line-btm">
    <div class="bg-gray">
      <div class="container gl-swb-row">
        <div class="gl-swb-col gs-r-text">
          <h2>{{ t('products.label.l3') }}</h2>
          <p>{{ t('photovoltaic.text1') }}</p>
        </div>
        <div class="gl-swb-col gs-r-img">
          <img src="/src/assets/img/global_photovl/mitigating-impact-photovoltaic-plants_1584x960.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.global-photovoltaic {
  h2 {
    font-size: 36px;
  }
  .gl-swb-row {
    display: flex;
    align-items: stretch;
    .gl-swb-col {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .gs-r-text {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .gs-r-img {
      height: fit-content;
      overflow: hidden;
      img {
        transition: transform 0.3s ease;
      }
    }
    .gs-r-img:hover {
      img {
        transform: scale(1.02);
      }
    }
  }
}
</style>
