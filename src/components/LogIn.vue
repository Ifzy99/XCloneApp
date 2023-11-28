<template>



<div>{{ userStore.count }}</div>
</template>

<script>

// import {required, minLength,maxLength,email} from '@vuelidate/validators';
// import axios from 'axios'
import {useUserStore} from '../myStore/UserStore'
export default {

  setup(){
        const userStore = useUserStore();

        return {userStore}
    },

}
</script>

<style>

</style>