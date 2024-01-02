import { createRouter, createWebHistory } from "vue-router";
// import HelloWorld from '../components/HelloWorld.vue'
import XHome from '../components/XHome.vue'
import SignupModal from '../components/SignupModal.vue'
import LogIn from '../components/LogIn.vue'
import DashBoard from '../components/DashBoard.vue'
import PostButton from '../components/PostButton.vue'
import SideNav from '../components/SideNav.vue'
import DashbdModal from '../components/DashbdModal.vue'



const routes = [
    {
        path:'/',
        component:XHome,
        name: "Home"
    },
    {
        path: '/x',
        component:XHome,
        name: 'x'
    },
    {
        path:'/signup',
        component:SignupModal,
        name:"signup"
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
        path:'/postBtn',
        component:PostButton,
        name:'postBtn'
    },
    {
        path:'/side',
        component:SideNav,
        name:'side'
    },
    {
        path:'/dashboard/modal',
        component:DashbdModal,
        name:'dashModal'
    }
]

const router = createRouter ({
     history: createWebHistory(),
     routes
})

export default router;