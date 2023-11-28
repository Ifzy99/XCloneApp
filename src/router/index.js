import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import XHome from '../components/XHome.vue'
import LogIn from '../components/LogIn.vue'
import DashBoard from '../components/DashBoard.vue'
import TestWork from '../components/TestWork.vue'



const routes = [
    {
        path:'/',
        component:HelloWorld,
        name: "Home"
    },
    {
        path: '/x',
        component:XHome,
        name: 'x'
    },
    {
        path:'/login',
        component:LogIn,
        name:"login"
    },
    {
        path:'/dashboard',
        component:DashBoard,
        name:'dashboard'
    },
    {
        path:'/test',
        component:TestWork,
        name:'test'
    }
]

const router = createRouter ({
     history: createWebHistory(),
     routes
})

export default router;