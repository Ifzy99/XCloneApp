<template>
    <button @click="userStore.count++">Press</button>
    <!-- <button @click="increaseCount"></button> -->

    <div>{{ userStore.count }}</div>
    {{ userStore.multiplyCount }}

    
    <div v-for="item in userStore.items" :key="item.id" >
        <p>{{ item.age }}</p>
        <button @click="userStore.deleteItem(item.id)" >Del</button>
    </div>
    <!-- <div v-for="avail in userStore.availableItems" :key=avail.id>
        {{ avail.name }}
       </div> -->

    <router-link to="/login">Login</router-link>
</template>

<script>
     import {useUserStore} from '../myStore/UserStore'
export default {
  
    setup(){
        const userStore = useUserStore();
        return {userStore}
    },
    
    increaseCount(){
        this.userStore.count++
    },
        

}
</script>

<style>

</style>