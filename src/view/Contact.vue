<template>
  <div class="line-btm vp-1">
    <div class="bg-color-red">
      <div class="container">
        <h1 class="text-white">{{ t('menubar.contact') }}</h1>
        <img class="img-responsive" src="/src/assets/img/line-white-small2.png" alt="" />
      </div>
      <div class="vp-1"></div>
    </div>
    <div class="container line-btm" style="padding-bottom: 2rem">
      <div class="bg-color-red department">
        <h3 class="text-white">{{ t('contact.department_1') }}</h3>
      </div>
      <div class="contact-person">
        <div class="">
          <div class="cp-name">Roman Piskala</div>
          <div class="cp-position">{{ t('contact.position_6') }}</div>
          <div class="cp-contact">
            <PersonContact email="piskala@elpromservice.cz" phone="+420 602 200 225"></PersonContact>
          </div>
        </div>
      </div>
      <div class="bg-color-red department">
        <h3 class="text-white">{{ t('contact.department_2') }}</h3>
      </div>
      <div class="contact-person">
        <div class="">
          <div class="cp-name">Pavel Piskala</div>
          <div class="cp-position">{{ t('contact.position_1') }}</div>
          <div class="cp-contact">
            <PersonContact email="piskala.pavel@elpromservice.cz" phone="420 602 544 937"></PersonContact>
          </div>
        </div>
      </div>
      <div class="bg-color-red department">
        <h3 class="text-white">{{ t('contact.department_3') }}</h3>
      </div>
      <div class="contact-person">
        <div class="">
          <div class="cp-name">Pavel Piskala</div>
          <div class="cp-position">{{ t('contact.position_1') }}</div>
          <div class="cp-contact">
            <PersonContact email="piskala.pavel@elpromservice.cz" phone="+ 420 602 544 937"></PersonContact>
          </div>
        </div>
        <div class="">
          <div class="cp-name">Jan Fichna</div>
          <div class="cp-position">{{ t('contact.position_2') }}</div>
          <div class="cp-contact">
            <PersonContact email="fichna@elpromservice.cz" phone="+ 420 601 346 733"></PersonContact>
          </div>
        </div>
      </div>
      <div class="bg-color-red department">
        <h3 class="text-white">{{ t('contact.department_4') }}</h3>
      </div>
      <div class="contact-person">
        <div class="cp-row">
          <div class="line-btm" style="margin-bottom: 1rem; padding-bottom: 0.5rem">
            <div class="cp-name">Ing. Miroslav Žáček</div>
            <div class="cp-position">{{ t('contact.position_3') }}</div>
            <div class="cp-contact">
              <PersonContact email="zacek@elpromservice.cz" phone="+ 420 739 552 899"></PersonContact>
            </div>
          </div>
          <div class="">
            <div class="cp-name">Marek Dudek</div>
            <div class="cp-position">{{ t('contact.position_4') }}</div>
            <div class="cp-contact">
              <PersonContact email="dudek@elpromservice.cz" phone="+ 420 722 950 795"></PersonContact>
            </div>
          </div>
        </div>
        <div class="cp-row">
          <div class="line-btm" style="margin-bottom: 1rem; padding-bottom: 0.5rem">
            <div class="cp-name">Vilém Kufka</div>
            <div class="cp-position">{{ t('contact.position_7') }}</div>
            <div class="cp-contact">
              <PersonContact email="kufka@elpromservice.cz" phone="+ 420 777 620 695"></PersonContact>
            </div>
          </div>
          <div class="">
            <div class="cp-name">Dalibor Krupa</div>
            <div class="cp-position">{{ t('contact.position_5') }}</div>
            <div class="cp-contact">
              <PersonContact email="krupa@elpromservice.cz" phone="+ 420 777 464 739"></PersonContact>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-block container vp-1">
      <div class="contact-info">
        <h2>Elprom Service s.r.o.</h2>
        <p>
          Technologická 371/1 <br />
          708 00 Ostrava-Pustkovec
        </p>
        <p class="color-heading">
          IČ: 28640098<br />
          DIČ: CZ28640098
        </p>
        <PersonContact email="info@elpromservice.cz" phone="+420 602 200 225"></PersonContact>
        <PersonContact phone="+420 722 950 795"></PersonContact>
      </div>
      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2323696268536!2d18.1527028!3d49.8380941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e12bdcce362d%3A0xa7286d2a0f5ded32!2sELPROM+SERVICE+s.r.o.!5e0!3m2!1sen!2scz!4v1514982934052"
          width="100%"
          height="100%"
          frameborder="0"
          style="border: 0"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import PersonContact from '@/components/PersonContact.vue'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.department {
  margin: 1rem 0;
  text-align: center;
  padding: 0.4rem 0;
  border-radius: 3px;
  h3 {
    margin: 0;
  }
}
.contact-block {
  display: flex;

  justify-content: space-between;
}
.contact-map {
  height: 20rem;
  width: 40rem;
}
.contact-person {
  display: flex;
  justify-content: space-around;
}
.cp-row {
  margin-bottom: 1rem;
}
.cp-name {
  font-weight: bolder;
  font-size: large;
}
.cp-position {
  margin-bottom: 0.5rem;
  color: gray;
}
</style>
