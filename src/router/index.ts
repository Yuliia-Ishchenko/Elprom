import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/view/Home.vue'
import Products from '@/view/Products.vue'
import Career from '@/view/Career.vue'
import Contact from '@/view/Contact.vue'
import About from '@/view/About.vue'
import News from '@/view/News.vue'
import Reference from '@/view/References.vue'
import ElMechElprom from '@/view/Career/ElectromechanicElprom.vue'
import Switchboard from '@/view/Products/Switchboard.vue'
import Photovoltaic from '@/view/Products/Photovoltaic.vue'
import ElectricalInstallation from '@/view/Products/ElectricalInstallation.vue'
import { PageName } from '@/enums/PageName'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.Home,
    component: Home,
  },
  {
    path: '/products',
    name: PageName.Products,
    component: Products,
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
    path: '/reference',
    name: PageName.Reference,
    component: Reference,
  },
  {
    path: '/career/electromechanicElprom',
    name: PageName.ElMechElprom,
    component: ElMechElprom,
  },
  {
    path: '/products/switchboard',
    name: PageName.Switchboard,
    component: Switchboard,
  },
  {
    path: '/products/photovoltaic',
    name: PageName.Photovoltaic,
    component: Photovoltaic,
  },
  {
    path: '/products/electricalInstallation',
    name: PageName.ElectricalInstallation,
    component: ElectricalInstallation,
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
