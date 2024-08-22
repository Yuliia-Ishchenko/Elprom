<template>
  <div class="global-services">
    <div class="">
      <div class="global-services-row">
        <div class="gs-r-col">
          <img src="/src/assets/img/global_services/s-1-1265x811.png" alt="" />
        </div>
        <div class="gs-r-col"></div>
        <div class="container gs-absolute">
          <div class="gs-r-col"></div>
          <div class="gs-r-col gs-r-text">
            <h2 @click="goToPage(PageName.Service_1)">{{ t('global_services.serv_title_1') }}</h2>
            <p>{{ t('global_services.serv_text_1') }}</p>
            <div class="find-out-more" @click="goToPage(PageName.Service_1)">
              <Button :label="`${t('More')}>>`" plain text />
            </div>
          </div>
        </div>
      </div>

      <div class="global-services-row">
        <div class="container gs-absolute">
          <div class="gs-r-col gs-r-text">
            <h2>{{ t('global_services.serv_title_2') }}</h2>
            <p>{{ t('global_services.serv_text_2') }}</p>
          </div>
          <div class="gs-r-col"></div>
        </div>
        <div class="gs-r-col gs-bg"></div>
        <div class="gs-r-col">
          <img src="/src/assets/img/global_services/s-3-1265x811.png" alt="" />
        </div>
      </div>

      <div class="global-services-row">
        <div class="gs-r-col">
          <img src="/src/assets/img/global_services/s-2-1265x811.png" alt="" />
        </div>
        <div class="container gs-absolute">
          <div class="gs-r-col"></div>
          <div class="gs-r-col gs-r-text">
            <h2>{{ t('global_services.serv_title_3') }}</h2>
            <p>{{ t('global_services.serv_text_3') }}</p>
          </div>
        </div>
      </div>

      <div class="global-services-row">
        <div class="container gs-absolute">
          <div class="gs-r-col gs-r-text">
            <h2>{{ t('global_services.serv_title_4') }}</h2>
            <p>{{ t('global_services.serv_text_4') }}</p>
          </div>
          <div class="gs-r-col"></div>
        </div>
        <div class="gs-r-col gs-bg"></div>
        <div class="gs-r-col">
          <img src="/src/assets/img/global_services/s-6-1265x811.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button'
import { PageName } from '@/enums/PageName'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
function goToPage(namePage: string) {
  router.push({ name: namePage })
}
</script>

<style lang="scss" scoped>
.global-services {
  h2 {
    font-size: 36px;
  }
  .global-services-row {
    display: flex;
    align-items: stretch;
    position: relative;
    .gs-absolute {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      display: flex;
    }
    .gs-r-col {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
        height: auto;
      }
    }
    .gs-r-text {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2:hover,
      .find-out-more:hover {
        cursor: pointer;
      }
      .find-out-more {
        .p-button {
          padding: 0.2rem 0.5rem;
        }
      }
    }
    .gs-bg {
      background: var(--gray-bg-color);
    }
  }
}
</style>
