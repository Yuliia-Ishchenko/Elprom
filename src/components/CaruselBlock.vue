<template>
  <div class="">
    <Carousel :value="products" :numVisible="3" :numScroll="1" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <img :src="`${slotProps.data.image}`" :alt="slotProps.data.name" class="w-full border-round img-carusel" />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import Carousel from 'primevue/carousel'
import img1 from '/src/assets/img/Aktuality-obrazek2.jpg'
import img2 from '/src/assets/img/elprom_o_nas_background2.jpg'
import img3 from '/src/assets/img/Kariera-obrazek2.png'
import img4 from '/src/assets/img/Nase-kompetence-obrazek2.jpg'
import { ref } from 'vue'
const products = ref([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: img1,
  },
  {
    id: '1001',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: img2,
  },
  {
    id: '1002',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: img3,
  },
  {
    id: '1003',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: img4,
  },
])
</script>

<style lang="scss">
.img-carusel {
  padding: 0 0.2rem;
}
</style>
