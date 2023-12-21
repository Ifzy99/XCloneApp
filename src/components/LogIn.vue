<template>
  <form @submit.prevent="logger">
   <div class="container">
        <div class="card">
            <a class="singup">Sign in to X</a>
            <div class="inputBox1">
                <input type="text" required="required" name="email"   v-model="v$.login.email.$model"/>
                <span class="user">Email</span>
            </div>

            <div class="inputBox">
                <input type="password" required="required"  name="password" v-model="v$.login.password.$model"/>
                <span>Password</span>
            </div>

            <button class="enter" type="submit">Log in</button>
             
            <div>
              <button class="enter" >Forgot Password?</button>
            </div>

            <div class="mbFooter mt-4">
            <p  @click="goTo">Don't have an account? <span class="text-primary">Sign up</span></p>
          </div>
        </div>
      </div>
    </form>    

</template>

<script>

import useValidate from '@vuelidate/core';
import {required, minLength,maxLength,email} from '@vuelidate/validators';
import axios from 'axios';
export default {
  components:{
  },

  setup(){
    return{v$: useValidate()}
  }, 

  data(){
    return{
      login:{
        email:'',
        password:''
    }
    }
  },

  validations(){
    return{
      login:{
        email:{required, email},
        password:{required, min:minLength(8), max:maxLength(12)}
    }
    }
  },

  methods:{

    logger(){
         console.log("clicked");
          console.log(this.v$.login);
  
      // console.log('v$', this.v$);
      //  console.log('v$.login.email', this.v$.login.email);
  
          console.log(this.login);
          if(this.v$.login.$invalid){
              console.log('Form is Invalid');
          }else{
              axios.post('http://localhost:8000/api/signin', this.login).then((res)=>{
               // console.log(res)
                  if(res.data.status){
                   this.message = res.data.message
                   localStorage.setItem('userID', res.data.userID)
                   // console.log(this.message);   
                   this.$router.push('/dashboard')
   
                  }else{
                   this.errors = res.data.errors
                   console.log(this.errors);
                  }
              })
  
          }
          },


          goTo(){
            this.$router.push('/x')
          }
  }
    


}
</script>

<style>
.singup {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-top: 1.5em;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 550px;
  width: 500px;
  flex-direction: column;
  gap: 35px;
  border-radius: 15px;
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8,
        -16px -16px 32px #fefefe;
  border-radius: 8px;
}

.inputBox,
.inputBox1 {
  position: relative;
  width: 250px;
}

.inputBox input,
.inputBox1 input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  color: #000;
  font-size: 1em;
  background: transparent;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transition: 0.1s;
  border-bottom-left-radius: 8px;
}

.inputBox span,
.inputBox1 span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox1 input:valid~span,
.inputBox1 input:focus~span {
  transform: translateX(156px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox input:valid,
.inputBox input:focus,
.inputBox1 input:valid,
.inputBox1 input:focus {
  border: 2px solid #000;
  border-radius: 8px;
}

.enter {
  height: 45px;
  width: 150px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 3em;
}

.enter:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>