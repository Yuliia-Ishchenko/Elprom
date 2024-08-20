<template>
  <div class="global-switchboard line-btm">
    <div class="bg-gray">
      <div class="container gl-swb-row">
        <div class="gl-swb-col gs-r-text">
          <h2>{{ t('global_sw.sw_title_1') }}</h2>
          <p>{{ t('global_sw.sw_text_1') }}</p>
          <p>{{ t('global_sw.sw_text_1_2') }}</p>
          <p>
            <span> – {{ t('global_sw.sw_text_1_2_list1') }}</span> <br />
            <span> – {{ t('global_sw.sw_text_1_2_list2') }}</span> <br />
            <span> – {{ t('global_sw.sw_text_1_2_list3') }}</span> <br />
          </p>
        </div>
        <div class="gl-swb-col gs-r-img">
          <img src="/src/assets/img/global_switchboard/1sohab4j.png" alt="" />
        </div>
      </div>
    </div>

    <div class="">
      <div class="container gl-swb-row">
        <div class="gl-swb-col gs-r-img">
          <img src="/src/assets/img/global_switchboard/p-2.jpg" alt="" />
        </div>
        <div class="gl-swb-col gs-r-text">
          <h2>{{ t('global_sw.sw_title_2') }}</h2>
          <p>{{ t('global_sw.sw_text_2') }}</p>
          <p>{{ t('global_sw.sw_text_2_2') }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray">
      <div class="container gl-swb-row">
        <div class="gl-swb-col gs-r-text">
          <h2>{{ t('global_sw.sw_title_3') }}</h2>
          <p>{{ t('global_sw.sw_text_3') }}</p>
          <p>{{ t('global_sw.sw_text_3_2') }}</p>
          <p>
            <span> – {{ t('global_sw.sw_text_3_2_list1') }}</span> <br />
            <span> – {{ t('global_sw.sw_text_3_2_list2') }}</span> <br />
          </p>
        </div>
        <div class="gl-swb-col gs-r-img">
          <img src="/src/assets/img/global_switchboard/vysuvny_mmc-593x570.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="">
      <div class="container gl-swb-row">
        <div class="gl-swb-col gs-r-img">
          <img src="/src/assets/img/global_switchboard/p-3.jpg" alt="" />
        </div>
        <div class="gl-swb-col gs-r-text">
          <h2>{{ t('global_sw.sw_title_4') }}</h2>
          <p>{{ t('global_sw.sw_text_4') }}</p>
          <p>{{ t('global_sw.sw_text_4_2') }}</p>
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
.global-switchboard {
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
