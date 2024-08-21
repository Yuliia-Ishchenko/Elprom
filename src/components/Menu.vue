<template>
  <div class="elprm-menu line-btm bg-white">
    <div class="container">
      <Menubar :model="items" :key="menuKey" breakpoint="1073px">
        <template #start>
          <ItemLogo @click="goToPage" />
        </template>
        <template #item="{ item, props }">
          <a v-ripple class="flex align-items-center" v-bind="props.action">
            <ItemDefault :item="item" :item-props="props" v-if="!item.itemLang" />
          </a>
        </template>
        <template #end>
          <div class="topMenu-lang">
            <ChangeLang />
          </div>
        </template>
      </Menubar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Menubar from 'primevue/menubar'
import ItemDefault from '@/components/Menu/ItemDefault.vue'
import ItemLogo from '@/components/Menu/ItemLogo.vue'
import ChangeLang from '@/components/ChangeLang.vue'
import { PageName } from '@/enums/PageName'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const router = useRouter()
const route = useRoute()
const pathName = computed(() => route.fullPath)
const menuKey = ref(0)
watch(
  () => pathName.value,
  () => {
    styleItem()
  }
)

const items = computed(() => [
  {
    id: 2,
    label: t('menubar.products'),
    name: PageName.Products,
    class: 'bg-hove-none borderbott-hover text-slide',
    // isOverlayPanel: true,
    items: [
      {
        label: t('products.label.l1'),
        class: 'sub-item-prod',
        icon: 'pi pi-bolt',
        command: () => {
          router.push({ name: PageName.Switchboards })
        },
      },
      {
        label: t('products.label.l2'),
        class: 'sub-item-prod',
        icon: 'pi pi-wrench',
        command: () => {
          router.push({ name: PageName.ElectricalInstallation })
        },
      },
      {
        label: t('products.label.l3'),
        class: 'sub-item-prod',
        icon: 'pi pi-microsoft',
        command: () => {
          router.push({ name: PageName.Photovoltaic })
        },
      },
      {
        label: t('products.label.l5'),
        class: 'sub-item-prod',
        icon: 'pi pi-cog',
        command: () => {
          router.push({ name: PageName.Services })
        },
      },
    ],
  },
  {
    id: 3,
    label: t('menubar.career'),
    name: PageName.Career,
    class: 'bg-hove-none borderbott-hover text-slide',
    command: () => {
      router.push({ name: PageName.Career })
    },
  },
  {
    id: 5,
    label: t('menubar.contact'),
    name: PageName.Contact,
    class: 'bg-hove-none borderbott-hover text-slide',
    icon: 'pi pi-envelope',
    command: () => {
      router.push({ name: PageName.Contact })
    },
  },
  {
    id: 6,
    label: t('menubar.about'),
    name: PageName.About,
    class: 'bg-hove-none borderbott-hover text-slide',
    command: () => {
      router.push({ name: PageName.About })
    },
  },
])
function goToPage() {
  router.push({ name: PageName.Home })
}

function styleItem() {
  items.value.forEach((item: any) => {
    if (pathName.value.includes(`${item.name?.toLowerCase()}`)) {
      if (!item.class.includes('borderbottred')) item.class += ' borderbottred'
    } else {
      const classArr = item.class.split(' ')
      const index = classArr.indexOf('borderbottred')
      if (index !== -1) classArr.splice(index, 1)
      item.class = classArr.join(' ')
    }
  })
  menuKey.value++
}
</script>

<style lang="scss"></style>
