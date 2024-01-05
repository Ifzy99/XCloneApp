<template>

  <!-- Landing Page Content  -->
  <div class="homePg mx-auto ">
     <div class="xlogo">
        <img class="xl" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.jpg" alt="X logo">
     </div>
     <div class="mainTxt mx-auto">
         <div class="bldTxt">
            <h1 class="text-start">Happening now</h1>
            <h3 class="mt-5 mb-4 text-start">Join today.</h3>
         </div>
         <div class="signUpBtn ">
            <button class="bTn d-block"><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" style="width: 32px;">Sign up with Google</button>
            <button class="bTn d-block mt-2"><img class="coyLogo" src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="">Sign up with Apple</button>
         </div>
         
         <button class="bTn bg-primary text-light d-block mt-5" @click="userSignup"  data-bs-toggle="modal" data-bs-target="#signupModal"
         >Create account</button>
         <small class="d-block text-start mt-2" style="width: 60%; font-size:0.7rem; ">By signing up, you agree to the <span class="text-primary"> Terms of Service</span> and <span class="text-primary">Privacy Policy</span>, including <span>Cookie Use</span>.</small>

         <div class="signInbtn mt-5">
            <h5 class="text-start">Already have an account?</h5>
            <button class="bTn d-block text-primary" @click="userLogin">Sign in</button>
         </div>
     </div>
  </div>
  <!-- Landing Page Content  -->


    <!-- SignUp Modal  -->   
        <SignupModal/>
    <!-- SignUp Modal  -->   


</template>

<script>
import SignupModal from './SignupModal.vue'

export default {
  components:{
    SignupModal
  },  
    

  data(){
  return{
    message:'',
    errors: [],

  }
},

methods: {
    // userSignup(){
    //   this.$router.push({path: '/signup'})
    // },

    userLogin(){
        this.$router.push('/login')
    },

}


}
</script>

<style>
     hr{
    border-style:double;
    border-color: #b2bdbd;
    border-width: 2px;
    height: 0px;
    margin: 10px auto;
    width: 40%;
   }
   span:hover{
    cursor: pointer;
    text-decoration: underline;
   }

   .homePg{
      display: flex;
      justify-content:space-between ;
      padding-top: 3rem;
   }
   .bldTxt h1{
    font-size: 3.75em;
    font-weight:900;
   }    
   .bldTxt h3{
    font-size: 2rem;
    font-weight:900;
   }
   .xlogo{
     flex-basis: 40%;
     margin: 0 auto;
   }
   .xl{
    width: 80%;
    padding-top: 3rem;
    margin-top: 3rem;
   }
   .signInbtn h5{
    font-weight: 600;
   }
   .bTn{
    padding: 0.7rem 4rem;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px 30px 30px 30px;
    border: 0.5rem;
    cursor: pointer;
    transition: all 0.5s;
    vertical-align: middle;
    width: 65%;
    background-color: #fff;
   }
   .bTn:hover{
    background-color: rgb(196, 192, 192);
   }
   .coyLogo{
    width: 20px;
   }
   .opt{
    display: flex;
    margin-left:-3rem;
   }

   @media (max-width: 768px) {
    .homePg{
      display: flex;
      flex-direction: column;
      margin-top: -3.6rem;
      padding-left: 1rem;
   }
   .xlogo{
    margin: -7rem 0 0 1.3rem;
    text-align: start;
   } 
   .xl{
    width: 15%;
   } 
   .bldTxt{
    margin:4rem 0 ;
   } 
   .bldTxt h1{
    font-size: 2.75em;
   }  
   .bldTxt h3{
    font-size: 1.5rem;
   } 
   .bTn{
    font-size: 12px;
    font-weight: 900;
   }
   }
</style>