<template>
  <div class="references-overlay-content">
    <div class="ov-c-lnk" @click="goToPage(PageName.Switchboards)">
      <span class="pi pi-bolt"></span>
      <span>{{ t('products.label.l1') }}</span>
    </div>
    <div class="ov-c-lnk" @click="goToPage(PageName.ElectricalInstallation)">
      <span class="pi pi-wrench"></span>
      <span>{{ t('products.label.l2') }}</span>
    </div>
    <div class="ov-c-lnk" @click="goToPage(PageName.Photovoltaic)">
      <span class="pi pi-microsoft"></span>
      <span>{{ t('products.label.l3') }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { PageName } from '@/enums/PageName'
const { t } = useI18n()
const router = useRouter()
function goToPage(namePage: string) {
  router.push({ name: namePage })
}
</script>

<style lang="scss">
.references-overlay-content {
  .ov-c-lnk {
    padding: 0.7rem 0.5rem 0.7rem 0;
    border-bottom: 1px solid #ba122b;
    border-radius: 0;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scaling */

    .pi {
      margin: 0 0.5rem;
      transition: color 0.3s ease; /* Smooth transition for color */
    }
  }

  .ov-c-lnk:hover {
    cursor: pointer;
    transform: scale(1.05); /* Slightly increase the size of the entire link */

    .pi {
      color: #ba122b;
    }
  }
}
</style>
