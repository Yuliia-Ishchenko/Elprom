<template>
  <div class="container line-btm vp-1">
    <BreadCrumb :items="items" :home="home" />
    <h2>Montér elektrických rozváděčů / Montážní elektromechanik</h2>
    <p class="color-red">
      Pro naší dceřinnou společnost Elprom Service s.r.o. zabývající se výrobou rozváděčů a technologickými
      elektromontážemi hledáme uchazeče na pozici montér elektrických rozváděčů a montážní elektromechanik
    </p>
    <p class="color-red">Pracovní povinnosti:</p>
    <ul>
      <li>Výroba rozváděčů NN dle technické výrobní dokumentace</li>
      <li>Instalace a zapojování jednotlivých prvků v rozváděčích</li>
      <li>Montáž elektrických zařízení NN</li>
      <li>Připojování rozváděčů pro vnitřní i venkovní provedení</li>
      <li>Pokládka a zapojování kabelů, montáž zařízení a přístrojů</li>
      <li>Elektropráce v rozvodnách NN</li>
    </ul>
    <p class="color-red">Nabízíme:</p>
    <ul>
      <li>Pracovní poměr založený pracovní smlouvou nebo práci na živnostenský list</li>
      <li>Možnost kariérního a profesního růstu</li>
      <li>Ohodnocení dle pracovního zařazení</li>
      <li>Měsíční odměny</li>
      <li>Roční odměnu dle ekonomických ukazatelů společnosti</li>
      <li>Práce v jednosměnném provozu</li>
      <li>5ti denní pracovní týden</li>
      <li>25 dní dovolené</li>
      <li>Stravenkový paušál</li>
      <li>Možnost příspěvku na penzijní připojištění</li>
      <li>Místo výkonu práce Ostrava-Poruba</li>
      <li>Provozovna průmyslových montáží Ludgeřovice</li>
    </ul>
    <p class="color-red">Požadujeme:</p>
    <ul>
      <li>SOU / SŠ vzdělání v oboru elektro</li>
      <li>Schopnost orientovat se ve výkresové elektro dokumentaci výhodou nikoli podmínkou</li>
      <li>Schopnost samostatné práce i práce v týmu</li>
      <li>Manuální zručnost</li>
      <li>Odborná způsobilost dle NV 194/2022 (dříve vyhl.50/1978 Sb.) výhodou</li>
      <li>Praxe ve výrobě výhodou, pozice vhodná však i pro absolventy SOU/SŠ</li>
      <li>Možnost nástupu ihned nebo po dohodě</li>
    </ul>
    <Button class="p-button-danger" @click="downloadPdf('Elprom_montážník_elektro.pdf')">{{
      t('career.btn_download')
    }}</Button>
  </div>
</template>

<script lang="ts" setup>
import { PageName } from '@/enums/PageName'
import BreadCrumb from '@/components/BreadCrumb.vue'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()

const items = computed(() => [{ label: t('career.position1'), pageName: PageName.ElMechElprom }])
const home = computed(() => {
  return { label: t('menubar.career'), pageName: PageName.Career }
})
function downloadPdf(documentName: string) {
  const link = document.createElement('a')
  link.href = '/src/assets/pdf/' + documentName
  link.setAttribute('download', documentName)

  link.click()
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
}
li {
  line-height: 1.42857143;
}
button {
  margin: 1rem 0;
}
</style>
