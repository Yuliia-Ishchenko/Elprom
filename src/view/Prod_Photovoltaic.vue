<template>
  <div class="container line-btm vp-1">
    <div class="line-btm">
      <h1>{{ t('products.label.l3') }}</h1>
    </div>
    <div class="line-btm vp-1">
      <p>{{ t('photovoltaic.text1') }}</p>
      <h3>{{ t('photovoltaic.text2') }}</h3>
      <ul>
        <li>{{ t('photovoltaic.text9') }}</li>
        <li>{{ t('photovoltaic.text3') }}</li>
        <li>{{ t('photovoltaic.text4') }}</li>
        <li>{{ t('photovoltaic.text5') }}</li>
        <li>{{ t('photovoltaic.text6') }}</li>
        <li>{{ t('photovoltaic.text7') }}</li>
        <li>{{ t('photovoltaic.text8') }}</li>
      </ul>
    </div>
    <div class="vp-1 line-btm">
      <h3>{{ t('photovoltaic.text10') }}</h3>
      <h3>{{ t('photovoltaic.text11') }}</h3>
      <ul>
        <li>{{ t('photovoltaic.text12') }}</li>
        <li>{{ t('photovoltaic.text13') }}</li>
        <li>{{ t('photovoltaic.text14') }}</li>
      </ul>
      <h3>{{ t('photovoltaic.text15') }}</h3>
      <ul>
        <li>{{ t('photovoltaic.text16') }}</li>
        <li>{{ t('photovoltaic.text17') }}</li>
      </ul>
    </div>
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
import InquiryForm from '@/components/InquiryForm.vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const { t } = useI18n()
const dialogVisible = ref(false)
</script>

<style lang="scss" scoped>
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
