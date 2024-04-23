<template>
  <div class="container">
    <div class="footer-copyright inner-padding">
      <a class="fweight-700" href="#">ElpromService Group {{ currentYear }} ©</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
</script>

<style lang="scss" scoped>
.footer-copyright {
  display: flex;
  justify-content: center;
  a {
    font-weight: 700;
    font-family: Arial, 'Source Sans Pro', sans-serif;
    color: #81848f;
    outline: 0;
    background-color: transparent;
    text-decoration: none;
    font-size: 15px;
  }
}
</style>
