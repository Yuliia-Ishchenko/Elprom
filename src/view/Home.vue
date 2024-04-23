<template>
  <div class="line-btm">
    <div class="home-gallerie">
      <Galleria
        :value="images"
        :numVisible="4"
        :auto-play="true"
        containerStyle="max-width: 640px"
        :showThumbnails="false"
        :showIndicators="true"
        :circular="true">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </Galleria>
      <div class="baner">
        <h2>{{ t('baner.row1') }}</h2>
        <h2>{{ t('baner.row2') }}</h2>
        <h1>{{ t('baner.row3') }}</h1>
        <p class="text-red">{{ t('baner.row4') }}</p>
      </div>
    </div>
    <div class="container services vp-1">
      <div class="service-item" @click="goToPage(PageName.Switchboard)">
        <div class="serv-img">
          <img
            src="/src/assets/img/services/steel-passive.svg"
            alt="steel"
            class="tile-menu-passive"
            style="margin-top: 20px; height: 65px" />
          <img
            src="/src/assets/img/services/steel-active.svg"
            alt="steel"
            class="tile-menu-active"
            style="margin-top: 20px; height: 65px" />
        </div>
        <div class="serv-name">
          <span style="text-align: center">{{ t('products.label.l1') }}</span>
        </div>
      </div>
      <div class="service-item" @click="goToPage(PageName.ElectricalInstallation)">
        <div class="serv-img">
          <img
            src="/src/assets/img/services/service-passive.svg"
            alt="steel"
            class="tile-menu-passive"
            style="margin-top: 20px; height: 65px" />
          <img
            src="/src/assets/img/services/service-active.svg"
            alt="steel"
            class="tile-menu-active"
            style="margin-top: 20px; height: 65px" />
        </div>
        <div class="serv-name">
          <span style="text-align: center">{{ t('products.label.l2') }}</span>
        </div>
      </div>
      <div class="service-item" @click="goToPage(PageName.Photovoltaic)">
        <div class="serv-img">
          <img
            src="/src/assets/img/services/cogs-passive.svg"
            alt="steel"
            class="tile-menu-passive"
            style="margin-top: 20px; height: 65px" />
          <img
            src="/src/assets/img/services/cogs-active.svg"
            alt="steel"
            class="tile-menu-active"
            style="margin-top: 20px; height: 65px" />
        </div>
        <div class="serv-name">{{ t('products.label.l3') }}</div>
      </div>
      <div class="service-item" @click="goToPageByName('#pr-l-4')">
        <div class="serv-img">
          <img
            src="/src/assets/img/services/other-passive.svg"
            alt="steel"
            class="tile-menu-passive"
            style="margin-top: 20px; height: 65px" />
          <img
            src="/src/assets/img/services/other-active.svg"
            alt="steel"
            class="tile-menu-active"
            style="margin-top: 20px; height: 65px" />
        </div>
        <div class="serv-name">{{ t('products.label.l4') }}</div>
      </div>
    </div>
    <div class="home-about bg-gray inner-padding">
      <div class="home-text container">
        <h1>{{ t('home.text1') }}</h1>
        <p>
          {{ t('home.text2') }}
        </p>
      </div>
      <div class="home-links container">
        <div class="selected-item-info">
          <div class="info-title">
            <h3>{{ selectedItem.title }}</h3>
          </div>
          <div class="info-img">
            <img :src="selectedItem.src" />
          </div>
        </div>
        <div class="links-item-list">
          <div
            :class="`l-item ${selectedItem.id == 1 ? ' active' : ''}`"
            @click="goToPage(PageName.Reference)"
            @mouseover="onChangedInfo(0)">
            <div class="l-item-img"><i class="pi pi-globe"></i></div>
            <div class="l-item-text">
              <h3>{{ t('footerLinks.references') }}</h3>
              <p>{{ t('home.item1') }}</p>
            </div>
          </div>
          <div
            :class="`l-item ${selectedItem.id == 2 ? ' active' : ''}`"
            @click="goToPage(PageName.Career)"
            @mouseover="onChangedInfo(1)">
            <div class="l-item-img"><i class="pi pi-users"></i></div>
            <div class="l-item-text">
              <h3>{{ t('menubar.career') }}</h3>
              <p>{{ t('home.item2') }}</p>
            </div>
          </div>
          <div
            :class="`l-item ${selectedItem.id == 3 ? ' active' : ''}`"
            @click="goToPage(PageName.About)"
            @mouseover="onChangedInfo(2)">
            <div class="l-item-img"><i class="pi pi-thumbs-up"></i></div>
            <div class="l-item-text">
              <h3>{{ t('home.text3') }}</h3>
              <p>{{ t('home.item5') }}</p>
            </div>
          </div>
          <div
            :class="`l-item ${selectedItem.id == 4 ? ' active' : ''}`"
            @click="goToPage(PageName.Contact)"
            @mouseover="onChangedInfo(3)">
            <div class="l-item-img"><i class="pi pi-envelope"></i></div>
            <div class="l-item-text">
              <h3>{{ t('menubar.contact') }}</h3>
              <p>{{ t('home.item4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import Galleria from 'primevue/galleria'
import { useI18n } from 'vue-i18n'
import { PageName } from '@/enums/PageName'
import { useRouter } from 'vue-router'
import img1 from '/src/assets/img/Aktuality-obrazek.jpg'
import img2 from '/src/assets/img/elprom_o_nas_background.jpg'
import img3 from '/src/assets/img/Kariera-obrazek.png'
import img4 from '/src/assets/img/Nase-kompetence-obrazek.jpg'
import img1_2 from '/src/assets/img/skrine.jpg'
import img2_2 from '/src/assets/img/Kariera-obrazek2.png'
import img3_2 from '/src/assets/img/elprom_o_nas_background2.jpg'
import img4_2 from '/src/assets/img/contact-us.png'
const { t } = useI18n()
const router = useRouter()
const images = ref([
  {
    itemImageSrc: img1,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: img2,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: img3,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: img4,
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
])

const itemList = computed(() => [
  {
    id: 1,
    title: t('footerLinks.references'),
    src: img1_2,
    routerUrl: PageName.Reference,
  },
  {
    id: 2,
    title: t('menubar.career'),
    src: img2_2,
    routerUrl: PageName.Career,
  },
  {
    id: 3,
    title: t('home.text3'),
    src: img3_2,
    routerUrl: PageName.About, //partnery
  },
  {
    id: 4,
    title: t('menubar.contact'),
    src: img4_2,
    routerUrl: PageName.Contact,
  },
])
const selectedItem = ref(itemList.value[0])

watch(
  () => itemList.value,
  () => {
    selectedItem.value = itemList.value[selectedItem.value.id - 1]
  }
)
function onChangedInfo(indexItem: number) {
  selectedItem.value = itemList.value[indexItem]
}
function goToPage(namePage: string) {
  router.push({ name: namePage })
}
function goToPageByName(aHash: string) {
  router.push({ path: '/products', hash: aHash })
}
</script>

<style lang="scss">
.home-about {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .home-text {
    text-align: center;
    margin-bottom: 2rem;
    p {
      font-weight: 700;
      font-style: italic;
    }
  }
  .selected-item-info {
    text-align: center;
    margin-bottom: 2rem;
    .info-img {
      width: 400px;
      height: 300px;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .links-item-list {
    display: flex;
    justify-content: center;
    .active {
      background: var(--menu-bg-color) !important;
      h3,
      p,
      .l-item-img {
        color: white !important;
      }
    }
    .l-item {
      height: 242px;
      width: 200px;
      padding: 50px;
      background: white;
      margin: 0 3px;
      text-align: center;
      border-radius: 2px;
      .l-item-text {
        margin-top: 2rem;
        transform: translate3d(0, 0, 0);
        transition-duration: 300ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
      }
      .l-item-img {
        color: #999caa;
        transform: translate3d(0, 0, 0);
        transition-duration: 300ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
      }
      .pi {
        font-size: 1.5rem;
      }
      p {
        color: #999caa;
      }
    }
    .l-item:hover {
      background: var(--menu-bg-color);
      cursor: pointer;
      .l-item-text {
        transform: translate3d(0, -30%, 0);
        transition-duration: 300ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
      }
      .l-item-img {
        color: white;
        opacity: 0;
        transform: translate3d(0, -100%, 0);
        transition-duration: 300ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
      }
      h3,
      p {
        color: white !important;
      }
    }
  }
}
.baner {
  position: absolute;
  top: 0;
  width: 50%;
  padding: 6% 4%;
  h2,
  h1 {
    color: var(--gray-text-color);
    margin: 0;
  }
  h1,
  h2,
  p {
    text-transform: uppercase;
  }
}
.services {
  display: flex;
  justify-content: center;
}
.service-item:hover {
  background: var(--menu-bg-color);
  width: 200px;
  border-radius: 3px;
  .tile-menu-passive {
    display: none;
  }
  .tile-menu-active {
    display: block;
  }
  .serv-img {
    color: white;
  }
  .serv-name {
    color: white;
  }
}
.service-item {
  background: var(--gray-bg-color);
  width: 200px;
  border-radius: 5px;
  margin: 0 1rem;
  cursor: pointer;
  .tile-menu-active {
    display: none;
  }
  .serv-img {
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .serv-name {
    height: 70px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--menu-bg-color);
    overflow-wrap: break-word;
  }
}
.home-gallerie {
  position: relative;
  .p-galleria {
    max-width: none !important;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button {
    width: 0.6rem;
    height: 0.6rem;
    background-color: white;
    border: 1px solid gray;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: var(--menu-bg-color);
  }
  ul {
    margin-top: -2.5rem;
    z-index: 1;
  }
}
</style>
