<template>
  <div class="inquiryForm-container">
    <p class="">{{ t('inquiryFormIn.text1') }}</p>
    <div class="">
      <form class="inquiryForm" method="post" action="">
        <FloatLabel>
          <InputText id="name" v-model="name" :invalid="showError && !name" />
          <label for="name">{{ t('inquiryFormIn.name') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="phone" v-model="phone" :invalid="showError && !phone" />
          <label for="phone">{{ t('inquiryFormIn.phone') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="email" v-model="email" :invalid="showError && !email" />
          <label for="email">{{ t('inquiryFormIn.email') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="street" v-model="street" :invalid="showError && !street" />
          <label for="street">{{ t('inquiryFormIn.street') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="number" v-model="number" :invalid="showError && !number" />
          <label for="number">{{ t('inquiryFormIn.number') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="psc" v-model="psc" :invalid="showError && !psc" />
          <label for="psc">{{ t('inquiryFormIn.psc') }}</label>
        </FloatLabel>
        <div class="region">
          <FloatLabel>
            <InputText id="region" v-model="region" :invalid="showError && !region" />
            <label for="region">{{ t('inquiryFormIn.region') }}</label>
          </FloatLabel>
        </div>
        <FloatLabel>
          <InputText id="consump" v-model="consump" :invalid="showError && !consump" />
          <label for="consump">{{ t('inquiryFormIn.consump') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="square" v-model="square" :invalid="showError && !square" />
          <label for="square">{{ t('inquiryFormIn.square') }}</label>
        </FloatLabel>
        <div class="radio-btn">
          <RadioButton v-model="radioVal" inputId="ingredient1" variant="filled" :value="option[0]" />
          <label for="ingredient1" class="ml-2">{{ t('inquiryFormIn.radio1') }}</label>
        </div>
        <div class="radio-btn">
          <RadioButton v-model="radioVal" inputId="ingredient2" variant="filled" :value="option[1]" />
          <label for="ingredient2" class="ml-2">{{ t('inquiryFormIn.radio2') }}</label>
        </div>
        <div class="form-textarea">
          <FloatLabel>
            <Textarea v-model="textarea" rows="5" />
            <label>{{ t('inquiryFormIn.textarea') }}</label>
          </FloatLabel>
        </div>
        <div class="form-btn">
          <Button class="p-button-danger" :label="t('inquiryFormIn.btnSend')" @click="onSend" />
          <Button class="p-button-danger" :label="t('inquiryFormIn.btnCancel')" @click="onCancel" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const option = ref(['person', 'firma'])
const showError = ref(false)
const name = ref()
const phone = ref()
const email = ref()
const street = ref()
const number = ref()
const psc = ref()
const region = ref()
const consump = ref()
const square = ref()
const radioVal = ref(option.value[0])
const textarea = ref()
const emit = defineEmits(['onCancel'])
function onCancel() {
  emit('onCancel')
}
function onSend() {
  showError.value = true
  //sending logic
  //   onCancel()
}
</script>

<style lang="scss">
.p-dialog-header {
  padding: 1rem;
}
.inquiryForm-container {
  max-width: 30rem;

  p {
    margin-top: 0;
    margin-bottom: 30px;
    color: #ba122b;
  }
}
.inquiryForm {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
  .form-btn {
    grid-column: 1 / span 2;
    display: flex;
    justify-content: center;
    button {
      margin: 0.5rem;
      background-color: #ba122b;
    }
    button:hover {
      background-color: #9e0a20;
    }
  }
  .region {
    grid-column: 1 / span 2;
  }
  .form-textarea {
    grid-column: 1 / span 2;
    textarea {
      width: 100%;
    }
  }
  input {
    width: 100%;
  }
  label {
    font-size: 0.8rem;
  }
  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #e6e9ec;
    border-color: #8f9396;
  }
  .p-inputtext:enabled:hover {
    border-color: #8f9396;
  }
  .p-float-label:has(input:focus) label {
    top: -0.55rem;
  }
  .p-float-label:has(input:focus) label,
  .p-float-label:has(input.p-filled) label,
  .p-float-label:has(input:-webkit-autofill) label,
  .p-float-label:has(textarea:focus) label,
  .p-float-label:has(textarea.p-filled) label,
  .p-float-label:has(.p-inputwrapper-focus) label,
  .p-float-label:has(.p-inputwrapper-filled) label {
    top: -0.55rem;
  }
  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: 10px;
    height: 10px;
    background-color: #8c8787;
  }
  .p-radiobutton.p-variant-filled.p-highlight .p-radiobutton-box {
    background: none;
  }
  .p-radiobutton.p-highlight .p-radiobutton-box {
    border-color: #8c8787;
    background: #8c8787;
  }
}
</style>
