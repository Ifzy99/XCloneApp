<template>
  
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

            <!-- <div class="text-center  {{ Dmessage ? 'success' : 'danger'}}">{{ Dmessage }}</div> -->
            <small v-if="message">{{ message }}</small>

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
             <button type="submit" class="bTn text-dark  text-center px-2" data-bs-dismiss="modal" aria-label="Close"  :disabled="(v$.form.$invalid)">
                  Create an account
             </button>
             </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import useValidate from '@vuelidate/core';
import {required, minLength,maxLength,email} from '@vuelidate/validators';
import axios from 'axios'

export default {
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
          }
      },

  setup(){
    return{v$: useValidate()}
  }, 

  validations() {
    return{
        form:{
        name:{required, max: maxLength(20), min: minLength(5)},
        email: {required, email},
        age: {required},
        address: {required},
        password: {required, min: minLength(6), max: maxLength(8)}
        },
      }
},
      methods:{
        handleSubmit(){          
        console.log(this.v$.form);
        if(this.v$.form.$invalid){
            console.log("Form is invalid");
        }else{
            axios.post('http://localhost:8000/api/register', this.form).then((res)=>{
                if(res.data.status){
                    this.message = res.data.message
                    console.log(this.message);
                    this.$router.push('/')
                }else{
                    this.errors = res.data.errors
                    console.log(this.errors);
                    this.$router.push('/')
                }
            })
        }
    },

    goBack(){
      this.$router.push('/')
    }
},

}

</script>

<style>
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
    background-color: #e7cfcf;
   }
   .bTn:hover{
    background-color: rgb(196, 192, 192);
   }
</style>