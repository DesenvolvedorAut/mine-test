import Vue from 'vue'
import VueRouter from 'vue-router'
import info from "@/views/info";
import minesweeper from "@/views/minesweeper";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: '',
        component: minesweeper,
        meta: {title: 'Minesweeper'}
    },
    {
        path: '/information',
        name: 'Information - Minesweeper',
        component: info,
        meta: {title: 'Information - Minesweeper'}
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
})

export default router
