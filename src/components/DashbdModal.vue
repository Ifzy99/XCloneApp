<template>
          <!-- MyMODAl -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      <form class=" mx-auto" @submit.prevent="savePost">
    <div class="modal-content">
      <div class="modal-header d-flex" style="justify-content:space-between">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">

                    <textarea name="content" id="" cols="150" rows="5" class="form-control" placeholder="What's happening...."  aria-describedby="emailHelp" style="justify-content:start; border:none;" v-model="v$.post.content.$model"></textarea>
                    <div v-for="(error,index) in v$.post.content.$errors" :key="index">
                            <span class="text-danger text-sm">{{ error.$message }}</span>
                        </div>
            
                         <div class="input-div">
                            <input class="input" name="image" type="file"  @change="addImage"  multiple>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-info" @click="done" data-bs-dismiss="modal" aria-label="Close">Post</button> 
    </div>
</div>
</form>
  </div>
</div>



<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->


</template>

<script>
import axios from 'axios';
import useValidate from '@vuelidate/core'
import { maxLength,} from '@vuelidate/validators';


export default {

    setup(){
    return{v$: useValidate()}
  }, 

  data(){
        return{
            post:{
                content:'',  
            },
            images: [],
            allpost:[],
          }
      },

      validations(){
        return{
            post:{
                content:{max: maxLength(500)},
                }
              }
          },


   methods:{

    addImage(e){
            this.images = e.target.files;
            console.log(this.images);
        },
        
    savePost(){
            // console.log(this.v$.post);
            if(this.v$.post.$invalid){
            console.log("Form is invalid");
        }else{
            const formData = new FormData();
            const userId = localStorage.getItem('userID');

            formData.append("content", this.post.content);
            // this.images.forEach(file => {
            //     formData.append("images[]", file);     
            // });
            for (let index = 0; index < this.images.length; index++) {
                formData.append("images[]", this.images[index]);     
            }
            formData.append('user_id', userId);
            axios.post('http://localhost:8000/api/savePosts', formData).then((res)=>{
                 if (res.data.status) {
                    console.log(res.data.message);
                 } else {
                    console.log(res.data.message);
                    
                 }
            })
            
        }
          },
   }
}
</script>

<style>
      /* Image Input CSS  */

     .input-div {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid rgb(1, 235, 252);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);
      animation: flicker 2s linear infinite;
    }

    .icon {
      color: rgb(1, 235, 252);
      font-size: 2rem;
      cursor: pointer;
      animation: iconflicker 2s linear infinite;
    }

    .input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer !important;
    }

    @keyframes flicker {
      0% {
        border: 2px solid rgb(1, 235, 252);
        box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);
      }

      5% {
        border: none;
        box-shadow: none;
      }

      10% {
        border: 2px solid rgb(1, 235, 252);
        box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);
      }

      25% {
        border: none;
        box-shadow: none;
      }

      30% {
        border: 2px solid rgb(1, 235, 252);
        box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);
      }

      100% {
        border: 2px solid rgb(1, 235, 252);
        box-shadow: 0px 0px 100px rgb(1, 235, 252) , inset 0px 0px 10px rgb(1, 235, 252),0px 0px 5px rgb(255, 255, 255);
      }
    }

    @keyframes iconflicker {
      0% {
        opacity: 1;
      }

      5% {
        opacity: 0.2;
      }

      10% {
        opacity: 1;
      }

      25% {
        opacity: 0.2;
      }

      30% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
     /* Image Input CSS  */ 
</style>