<template>
  <ul class="list-unstyled">
    <li v-if="email">
      Email:
      <span class="career-icons">
        <i class="pi pi-envelope" />
        <a :href="`mailto:${email}`" class="email">{{ email }}</a>
      </span>
    </li>
    <li v-if="phone">
      Tel:
      <span class="career-icons">
        <i class="pi pi-phone" />
        <a :href="`tel:${number}`">{{ phone }}</a>
      </span>
    </li>
    <li v-if="linkedIn">
      LinkedIn:
      <span class="career-icons">
        <i class="pi pi-linkedin" />
        <a :href="`https://www.linkedin.com/in/sabina-v%C3%ADchov%C3%A1`" target="_blank">{{ linkedIn }}</a>
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  phone?: any
  email?: any
  linkedIn?: any
}>()
const number = computed(() => props.phone.replace(/\s/g, ''))
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: -1px;
}
li {
  padding: 3px 0;
}
.career-icons {
  margin-left: 7px;
  font-size: 18px;
  position: relative;

  i {
    position: absolute;
    margin-right: 5px;
  }
  a {
    margin-left: 25px;
    font-weight: 600;
  }
  .email {
    font-size: 15px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    font-family: Arial, 'Source Sans Pro', sans-serif;
    color: #bfc1c7;
  }
  a:focus,
  a:hover,
  a:active {
    outline: 0;
    color: #999caa;
    text-decoration: none;
  }
}
.career-icons:hover i {
  color: black;
  font-size: 20px;
}
</style>
