<template>
  <div class="">
    <Carousel :value="products" :numVisible="3" :numScroll="1" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <img
          :src="'/src/assets/img' + slotProps.data.image"
          :alt="slotProps.data.name"
          class="w-full border-round img-carusel" />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import Carousel from 'primevue/carousel'
// import Button from 'primevue/button'
import { ref } from 'vue'
const products = ref([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: '/Aktuality-obrazek2.jpg',
  },
  {
    id: '1001',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: '/elprom_o_nas_background2.jpg',
  },
  {
    id: '1002',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: '/Kariera-obrazek2.png',
  },
  {
    id: '1003',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: '/Nase-kompetence-obrazek2.jpg',
  },
])
</script>

<style lang="scss">
.img-carusel {
  padding: 0 0.2rem;
}
</style>
