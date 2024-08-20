<template>
  <div class="line-btm inner-padding">
    <div class="container">
      <div class="footer-links">
        <div class="fl-row">
          <h4>{{ t('menubar.products') }}</h4>
          <ul class="list-unstyled footer-list">
            <li class="footer-list-item">
              <a @click="goToPage(PageName.Switchboards)">» {{ t('products.label.l1') }}</a>
            </li>
            <li class="footer-list-item">
              <a @click="goToPage(PageName.ElectricalInstallation)">» {{ t('products.label.l2') }}</a>
            </li>
            <li class="footer-list-item">
              <a @click="goToPage(PageName.Photovoltaic)">» {{ t('products.label.l3') }}</a>
            </li>
            <li class="footer-list-item">
              <a @click="goToPage(PageName.Services)">» {{ t('products.label.l5') }}</a>
            </li>
          </ul>
        </div>
        <div class="fl-row">
          <h4>{{ t('footerLinks.company') }}</h4>
          <ul class="list-unstyled footer-list">
            <li class="footer-list-item">
              <a @click="goToPage(PageName.Career)">» {{ t('menubar.career') }}</a>
            </li>
            <li class="footer-list-item">
              <a @click="goToPage(PageName.About)">» {{ t('menubar.about') }}</a>
            </li>
            <!-- <li class="footer-list-item">
              <a @click="goToPage(PageName.Reference)">» {{ t('footerLinks.references') }}</a>
            </li> -->
            <li class="footer-list-item">
              <a @click="goToPage(PageName.News)">» {{ t('footerLinks.news') }}</a>
            </li>
            <li class="footer-list-item">
              <a href="https://www.ingeteam.cz/" target="_blank">» Ingeteam a. s.</a>
            </li>
          </ul>
        </div>
        <div class="fl-row">
          <div class="row-contact">
            <h4>{{ t('menubar.contact') }}</h4>
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item">
                <a @click="goToPage(PageName.Contact)"><i class="pi pi-envelope" /> {{ t('footerLinks.contactUs') }}</a>
              </li>
            </ul>
          </div>
          <div class="row-lang">
            <h4>{{ t('footerLinks.changLng') }}</h4>
            <ChangeLang />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PageName } from '@/enums/PageName'
import { useI18n } from 'vue-i18n'
import ChangeLang from '@/components/ChangeLang.vue'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
function goToPage(pageName: string) {
  router.push({ name: pageName })
}
</script>

<style lang="scss" scoped>
.footer-links {
  display: grid;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  a:focus,
  a:hover,
  a:active {
    outline: 0;
    color: #999caa;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
