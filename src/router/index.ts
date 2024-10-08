import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/view/Home.vue'
import Career from '@/view/Career.vue'
import Contact from '@/view/Contact.vue'
import About from '@/view/About.vue'
import News from '@/view/News.vue'
import ElMechElprom from '@/view/Career/ElectromechanicElprom.vue'
import { PageName } from '@/enums/PageName'
import Prod_Services from '@/view/Prod_Services.vue'
import Prod_Switchboards from '@/view/Prod_Switchboards.vue'
import Prod_ElectricalInstallation from '@/view/Prod_ElectricalInstalation.vue'
import Prod_Photovoltaic from '@/view/Prod_Photovoltaic.vue'
import Service_1 from '@/view/Detaile_Services/Service_1.vue'
import Detail_Switchboard_1 from '@/view/Detail_Products/Detail_Switchboard_1.vue'
import Detail_Photovoltaic from '@/view/Detail_Products/Detail_Photovoltaic.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.Home,
    component: Home,
  },
  {
    path: '/career',
    name: PageName.Career,
    component: Career,
  },
  {
    path: '/contact',
    name: PageName.Contact,
    component: Contact,
  },
  {
    path: '/about',
    name: PageName.About,
    component: About,
  },
  {
    path: '/news',
    name: PageName.News,
    component: News,
  },
  {
    path: '/career/electromechanicElprom',
    name: PageName.ElMechElprom,
    component: ElMechElprom,
  },
  {
    path: '/photovoltaic',
    name: PageName.Photovoltaic,
    component: Prod_Photovoltaic,
  },
  {
    path: '/electricalInstallation',
    name: PageName.ElectricalInstallation,
    component: Prod_ElectricalInstallation,
  },
  {
    path: '/services',
    name: PageName.Services,
    component: Prod_Services,
  },
  {
    path: '/switchboards',
    name: PageName.Switchboards,
    component: Prod_Switchboards,
  },
  {
    path: '/services/detail_1',
    name: PageName.Service_1,
    component: Service_1,
  },
  {
    path: '/switchboards/detail_1',
    name: PageName.Switchboard_1,
    component: Detail_Switchboard_1,
  },
  {
    path: '/photovoltaic/detail_photovoltaic',
    name: PageName.Photovoltaic_detail,
    component: Detail_Photovoltaic,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
