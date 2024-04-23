<template>
  <div class="line-btm">
    <Breadcrumb :home="props.home" :model="props.items">
      <template #item="{ item }">
        <a @click="goToPage(item.pageName)">
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from 'primevue/breadcrumb'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps<{
  items?: any
  home?: any
}>()
function goToPage(pageName: string) {
  router.push({ name: pageName })
}
</script>

<style lang="scss" scoped></style>
