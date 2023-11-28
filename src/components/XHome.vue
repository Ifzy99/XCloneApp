<template>
  <div class="homePg mx-auto ">
     <div class="xlogo mx-auto">
        <img class="xl" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.jpg" alt="X logo">
     </div>
     <div class="mainTxt mx-auto">
         <div class="bldTxt">
            <h1 class="text-start">Happening now</h1>
            <h3 class="mt-5 mb-4 text-start">Join today.</h3>
         </div>
         <div class="signUpBtn">
            <button class="bTn bg-light d-block"><img class="coyLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="">Sign up with Google</button>
            <button class="bTn bg-light d-block mt-2"><img class="coyLogo" src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="">Sign up with Apple</button>
         </div>
         <div class="opt d-flex">
            <hr>
            <p>or</p>
            <hr>
         </div>
         
         <button class="bTn bg-primary text-light d-block" @click="userSignup"  data-bs-toggle="modal" data-bs-target="#signupModal"
         >Create account</button>
         <small class="d-block text-start mt-2" style="width: 60%; font-size:0.7rem; ">By signing up, you agree to the <span class="text-primary"> Terms of Service</span> and <span class="text-primary">Privacy Policy</span>, including <span>Cookie Use</span>.</small>

         <div class="signInbtn mt-5">
            <h5 class="text-start fw-bold">Already have an account?</h5>
            <button class="bTn d-block bg-light text-primary" data-bs-toggle="modal" data-bs-target="#loginModal" @click="userLogin">Sign in</button>
         </div>
     </div>

</div>


    <!-- SignUp Modal  -->   
        <!-- Modal -->
        <div class="modal fade" id="signupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header d-flex">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="goBack"></button>
        <!-- <h1 class="modal-title fs-5 mx-auto ps-5" id="staticBackdropLabel">Create your account</h1> -->
      </div>
      <div class="modal-body mx-auto" style="width: 80%;">
           <div class="mbHeader">
             <h2 class="fw-bolder text-start mt-3 my-5">Create your account</h2>

             <!-- <div v-if="message ! ==null">
                 <span class="text-sm" :class="{'text-danger':errors, 'text-success': !errors}">{{ message }}</span>
            </div> -->

            <!-- <div class="text-center  {{ message ? 'success' : 'danger'}}">{{ meassage }}</div> -->

             <form  @submit.prevent="handleSubmit">
                <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="Name" style="height: 4rem;" name="name" v-model="v$.form.name.$model"/>
                </div>
                <div v-for="(error,index) in v$.form.name.$errors" :key="index">
                   <span class="text-danger text-sm">{{ error.$message }}</span>
                </div>

                <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="Email" style="height: 4rem;" name="email" v-model="v$.form.email.$model"/>
                </div>
                <div v-for="(error,index) in v$.form.email.$errors" :key="index">
                   <span class="text-danger text-sm">{{ error.$message }}</span>
                </div>

                <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="Age" style="height: 4rem;" name="age" v-model="v$.form.age.$model"/>
                 </div>
                 <div v-for="(error,index) in v$.form.age.$errors" :key="index">
                   <span class="text-danger text-sm">{{ error.$message }}</span>
                </div>

                <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="Address" style="height: 4rem;" name="address" v-model="v$.form.address.$model"/>
                 </div>
                 <div v-for="(error,index) in v$.form.address.$errors" :key="index">
                   <span class="text-danger text-sm">{{ error.$message }}</span>
                </div>

                <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="Password" style="height: 4rem;" name="password" v-model="v$.form.password.$model"/>
                 </div>
                 <div v-for="(error,index) in v$.form.password.$errors" :key="index">
                   <span class="text-danger text-sm">{{ error.$message }}</span>
                </div>
                
                <div class="form-group mt-5">
                <h5 class="text-start fw-bold">Date of birth</h5>
                <p class="text-start" style="font-size:0.7rem;">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>


                <div class="d-flex mt-3">
                <select name="month" id="" v-model="month" class="form-control w-75" >
                    <option value="" disabled selected>Month</option>
                    <option value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <select name="" id="" v-model="day" class="form-control w-25">
                    <option value="" disabled selected>Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>

                <select name="" id="" v-model="year" class="w-50">
                    <option value="" disabled selected>Year</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            </div>

            <div class="form-group mt-5">
             <button type="submit" class="bTn text-light bg-secondary text-center px-2"  :disabled="(v$.form.$invalid)">
                  Create an account
             </button>
             </div>
          </form>
        </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> -->
    </div>
  </div>
</div>


<!-- Login Modal  -->
<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header d-flex">
          <img class="mx-auto" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.jpg" alt="" style="width: 50px;">
        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="goBack"></button> -->
        <!-- <h1 class="modal-title fs-5 mx-auto ps-5" id="staticBackdropLabel">Create your account</h1> -->
      </div>
      <div class="modal-body mx-auto" style="width: 80%;">
           <div class="mbHeader">
             <h2 class="fw-bolder">Sign in to X</h2>

             <div class="signInBtn">
            <button class="bTn bg-light d-block  mx-auto" style="width: 75%;"><img class="coyLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="">Sign in with Google</button>
            <button class="bTn bg-light d-block mt-2 mx-auto" style="width: 75%;"><img class="coyLogo" src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="">Sign in with Apple</button>
               </div>   
               <div class="opt d-flex">
                 <hr class="w-25 mx-auto">
                   <p class="mx-auto">or</p>
                  <hr class="w-25 mx-auto">
                </div>

             <form @submit.prevent="loginUser">
                <div class="form-group mt-3">
                    <input type="text" class="form-control mx-auto" placeholder="Email" name="email" style="height: 4rem; width: 75%;" v-model="v$.login.email.$model"/>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control mx-auto" placeholder="Password" name="password" style="height: 4rem; width: 75%;" v-model="v$.login.password.$model" />
                </div>

            <div class="form-group mt-5">
             <button type="submit" class="bTn  bg-dark text-light bg-secondary text-center px-2" style="width: 75%;"  data-bs-dismiss="modal" aria-label="Close">
                  Login
             </button>
             </div>
          </form>

          <button class="bTn mt-3" style="width: 75%;">Forgot Password?</button>

          <div class="mbFooter mt-4">
            <p>Don't have an account? <span class="text-primary" data-bs-toggle="modal"  data-bs-target="#signupModal" >Sign up</span></p>
          </div>
        </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> -->
    </div>
  </div>
</div>



</template>

<script>
import useValidate from '@vuelidate/core';
import {required, minLength,maxLength,email} from '@vuelidate/validators';
import axios from 'axios'

export default {
    
setup(){
    return{v$: useValidate()}
  }, 

  data(){
  return{
    form:{
    name:'',
    email:'',
    age:'',
    address:'',
    password:''
    },
    month:'',
    day:'',
    year:'',
    message:'',
    errors: [],

    login:{
        email:'',
        password:''
    }
    
  }
},
  validations() {
  return{
    form:{
     name:{required, max: maxLength(20), min: minLength(5)},
     email: {required, email},
     age:  {required},
     address: {required},
     password: {required, min: minLength(6), max: maxLength(8)}
    },

    login:{
        email:{required, email},
        password:{required, min:minLength(8), max:maxLength(12)}
    }
  }
},

methods: {
    //   userSignup(){
    //        this.$router.push('signup ')
    //   },

    handleSubmit(){
        // console.log(this.v$.form);
        if(this.v$.form.$invalid){
            console.log("Form is invalid");
        }else{
            axios.post('http://localhost:8000/api/register', this.form).then((res)=>{
                // console.log(res)
                if(res.data.status){
                    this.message = res.data.message
                    console.log(this.message);
                    // this.$router.push('/login')
                }else{
                    this.errors = res.data.errors
                    console.log(this.errors);
                }
            })

        }
    },

    goBack(){
        this.$router.push('x')
    },

    // userLogin(){
    //    this.$router.push('login')
    // },

    loginUser(){
        // console.log(this.login);
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
        }
}


}
</script>

<style>
     hr{
    border-style:double;
    border-color: #b2bdbd;
    border-width: 3px;
    height: 0px;
    margin: 10px auto;
    width: 30%;
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
   }
   .xl{
    width: 80%;
    padding-top: 3rem;
    margin-top: 3rem;
   }
   .bTn{
    padding: 0.7rem 4rem;
    font-size: 16px;
    border-radius: 30px 30px 30px 30px;
    border: 0.6rem;
    cursor: pointer;
    transition: all 0.5s;
    vertical-align: middle;
    width: 65%;
   }
   .coyLogo{
    width: 20px;
   }
</style>