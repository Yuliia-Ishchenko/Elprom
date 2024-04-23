<template>
  <div class="line-btm container inn-p-btm">
    <div class="line-btm vp-1">
      <h1>{{ t('menubar.career') }}</h1>
      <p>{{ t('about.about_1') }}</p>
    </div>
    <div class="career-hr">
      <p class="text-red">{{ t('career.hr1') }}</p>
      <div class="career-hr-info">
        <div class="hr-photo">
          <img src="/src/assets/img/sabinaVichova.png" alt="HR" class="hr-img" />
        </div>
        <div class="hr-contact">
          <h2>Mgr. Sabina Víchová</h2>
          <h5>{{ t('career.hr2') }}</h5>
          <div class="vp-1">
            <PersonContact
              email="sabina.vichova@ingeteam.com"
              phone="+420 597 476 816"
              linked-in="Sabina Víchová"></PersonContact>
          </div>
        </div>
      </div>
    </div>
    <div class="career-position cp-left bg-color-red">
      <div class="cp-photo">
        <img src="/src/assets/img/electromechanic_elprom.jpg" alt="" class="cp-photo-img" />
      </div>
      <div class="cp-description">
        <div class="cp-header line-btm">
          <h2 class="text-white">{{ t('career.position1') }}</h2>
          <img src="/src/assets/img/Logo_Elprom_white.png" alt="logo" />
        </div>
        <ul class="cp-list">
          <li>{{ t('career.position1_descr_1') }}</li>
          <li>{{ t('career.position1_descr_2') }}</li>
          <li>{{ t('career.position1_descr_3') }}</li>
          <li>{{ t('career.position1_descr_4') }}</li>
        </ul>
        <div class="cp-btn">
          <Button class="p-button-secondary" @click="goToPage(PageName.ElMechElprom)">{{
            t('career.btn_detail')
          }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PersonContact from '@/components/PersonContact.vue'
import Button from 'primevue/button'
import { PageName } from '@/enums/PageName'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
function goToPage(pageName: string) {
  router.push({ name: pageName })
}
</script>

<style lang="scss" scoped>
.career-hr {
  max-width: 60%;
  padding: 0 1rem;
  .career-hr-info {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    .hr-photo {
      margin-right: 2rem;
      .hr-img {
        height: 200px;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }

    .hr-contact {
      h2 {
        margin: 0;
      }
    }
  }
}
.career-position {
  display: flex;
  border-radius: 6px;
  padding: 2rem 1rem;
  .cp-photo {
    .cp-photo-img {
      max-width: 300px;
      border-radius: 6px;
    }
  }
  .cp-description {
    padding-left: 1.5rem;
    width: 100%;
    .cp-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cp-list {
      margin: 1rem 0;
      li {
        color: white;
        line-height: 1.7;
      }
    }
    .cp-btn {
      display: flex;
      justify-content: end;
    }
  }
}
</style>
