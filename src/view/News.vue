<template>
  <div class="container">
    <div class="line-btm vp-1">
      <h1>{{ t('footerLinks.news') }}</h1>
    </div>
    <div class="line-btm vp-1 row-news">
      <p>{{ formatDate('2023-4-11') }}</p>
      <h3>{{ t('news.news1_title') }}</h3>
      <p>{{ t('news.news1_text') }}</p>
    </div>
    <div class="line-btm vp-1 row-news">
      <p>{{ formatDate('2021-11-20') }}</p>
      <h3>{{ t('news.news2_title') }}</h3>
      <p>{{ t('news.news2_text') }}</p>
    </div>
    <div class="line-btm vp-1 row-news">
      <p>{{ formatDate('2021-10-11') }}</p>
      <h3>{{ t('news.news3_title') }}</h3>
      <p>{{ t('news.news3_text') }}</p>
    </div>
    <div class="line-btm vp-1 row-news">
      <p>{{ formatDate('2021-9-10') }}</p>
      <h3>{{ t('news.news4_title') }}</h3>
      <p>{{ t('news.news4_text') }}</p>
    </div>
    <div class="line-btm vp-1 row-news">
      <p>{{ formatDate('2021-8-26') }}</p>
      <h3>{{ t('news.news5_title') }}</h3>
      <p>{{ t('news.news5_text') }}</p>
    </div>
    <div class="line-btm vp-1 row-news">
      <p>{{ formatDate('2021-5-19') }}</p>
      <h3>{{ t('news.news6_title') }}</h3>
      <p>{{ t('news.news6_text') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

function formatDate(date: string) {
  const d = new Date(date)
  const loc = locale.value == 'cz' ? 'cs-CZ' : 'en-US'
  let formattedDate = d.toLocaleDateString(loc, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return formattedDate
}
</script>

<style lang="scss" scoped>
.row-news {
  p:first-child {
    text-transform: capitalize;
    font-weight: bolder;
  }
}
</style>
