<template>
  <!-- <div class=""> -->
    <ul class="list-unstyled footer-list">
      <li class="footer-list-item" style="position: relative">
        <img
          v-if="locale == 'cz'"
          id="imgNavCze"
          src="../assets/img/cze.png"
          alt="Czech republic flag"
          class="img-thumbnail icon-small color-heading language-current"
          @click="showSubMenu = !showSubMenu" />
        <img
          v-if="locale == 'en'"
          id="imgNavCze"
          src="../assets/img/gbr.png"
          alt="Czech republic flag"
          class="img-thumbnail icon-small color-heading language-current"
          @click="showSubMenu = !showSubMenu" />
        <ul class="dropdown-menu list-unstyled" v-if="showSubMenu">
          <li>
            <img
              id="imgNavCze"
              src="../assets/img/cze.png"
              alt="CZE flag"
              class="img-thumbnail icon-small language"
              @click="changeLanguage('CZ')" />
          </li>
          <li>
            <img
              id="imgNavEng"
              src="../assets/img/gbr.png"
              alt="GBR flag"
              class="img-thumbnail icon-small language"
              @click="changeLanguage('EN')" />
          </li>
        </ul>
      </li>
    </ul>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const showSubMenu = ref(false)

const changeLanguage = (aLocale: string) => {
  if (aLocale == 'CZ') {
    locale.value = 'cz'
  }
  if (aLocale == 'EN') {
    locale.value = 'en'
  }
  showSubMenu.value = !showSubMenu.value
}
</script>

<style lang="scss" scoped>
.icon-small {
  width: 32px;
  height: 24px;
}
.language-current {
  position: relative;
  top: -1px;
}
.color-heading {
  color: var(--gray-text-color) !important;
}
.img-thumbnail {
  display: inline-block;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
img {
  vertical-align: middle;
  cursor: pointer;
}
.open > .dropdown-menu {
  display: block;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  img {
    margin: 5px 10px;
  }
}
</style>
