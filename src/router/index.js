import { createRouter, createWebHashHistory } from 'vue-router'
import svgChart from '../components/svgChart.vue'
import canvasChart from '../components/canvasChart.vue'

const routes = [
  {
    path: '/',
    name: 'svgChart',
    component: svgChart
  },
  {
    path: '/svgChart',
    name: 'svgChart2',
    component: svgChart
  },
  {
    path: '/canvasChart',
    name: 'canvasChart',
    component: canvasChart
  },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router