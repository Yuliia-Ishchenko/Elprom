<template>
  <div class="line-btm">
    <div class="container line-btm">
      <h1>{{ t('menubar.about') }}</h1>
    </div>
    <div class="container line-btm vp-1">
      <p class="text-red">{{ t('about.about_1') }}</p>
      <p>{{ t('about.about_2') }}</p>
      <p>{{ t('about.about_3') }}</p>
      <p>{{ t('about.about_4') }}</p>
    </div>
    <div class="container line-btm vp-1">
      <h2>{{ t('about.gallery') }}</h2>
      <CaruselBlock></CaruselBlock>
    </div>
    <div class="container vp-1">
      <h2>{{ t('about.certificate') }}</h2>
      <div class="sertificate">
        <div class="sert-block box-shadow">
          <img
            class="img-responsive"
            src="/src/assets/img/sertificate/1082-2022-SC-Q-ELPROM-SERVICE-s.r.o.-pdf.jpg"
            alt=""
            @click="showDialog" />
          <p>{{ t('about.sertificateName_1') }}</p>
        </div>
        <div class="sert-block box-shadow">
          <img class="img-responsive" src="/src/assets/img/sertificate/cert2.jpg" alt="" @click="showDialog" />
          <p>{{ t('about.sertificateName_1') }}</p>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    v-model:visible="zoomImg.value"
    modal
    :style="{ width: 'content' }"
    :closable="true"
    class="dialogCastomClass">
    <Image :src="zoomImg.src" alt="Image" imageStyle="height: 75vh" />
  </Dialog>
</template>

<script lang="ts" setup>
import Image from 'primevue/image'
import Dialog from 'primevue/dialog'
import CaruselBlock from '@/components/CaruselBlock.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const { t } = useI18n()
const zoomImg = ref({ value: false, src: '' })
function showDialog(event: any) {
  console.log(event)
  zoomImg.value.value = true
  zoomImg.value.src = event.target.currentSrc
}
</script>

<style lang="scss" scoped>
.sertificate {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .box-shadow img {
    box-shadow: 6px -2px 4px -2px rgba(0, 0, 0, 0.1), -6px 0px 4px -2px rgba(0, 0, 0, 0.1),
      6px -6px 18px 0px rgba(0, 0, 0, 0.1), -6px 6px 18px 0px rgba(0, 0, 0, 0.1);
  }
  .sert-block {
    text-align: center;
    img {
      width: 250px;
      cursor: pointer;
    }

    p {
      font-weight: bolder;
    }
  }
}
</style>
<style lang="scss">
.dialogCastomClass {
  .p-dialog-content {
    overflow-y: hidden;
  }
  .p-dialog-header {
    padding: 0.2rem;
    .p-dialog-header-icon {
      width: 1.2rem;
      height: 1.2rem;
      .p-icon {
        width: 0.7rem;
        height: 0.7rem;
      }
    }
  }
}
</style>
