<template>
  <section class="allCont">




    <div class="offCanv">
        <button class="btn  d-lg-none offBtnTrig" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"><i class="fa-solid fa-bars text-dark fa-2x"></i></button>

<div class="offcanvas-lg offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
 

  <div class="offcanvas-body d-flex flex-column">
          <img class="xl" style="width: 50px;" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.jpg" alt="X logo">
          <!-- <h3><i class="fa-brands fa-x-twitter fa-2x"></i></h3> -->
          
          <h1></h1>

                  <div class="offBodyItems d-flex mt-4 gap-3">
                      <h3><i class="fa-solid fa-house"></i></h3>
                      <h1 class=" ms-2 mt-1" style="font-size: 1.3rem; font-weight: 600;">Home</h1>
                  </div>
                  
                  <div class="offBodyItems d-flex mt-4 gap-3">
                      <h3><i class="fa-solid fa-magnifying-glass"></i></h3>
                      <p class=" ms-3 mt-1">Explore</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-3">
                      <h3><i class="fa-solid fa-bell"></i></h3>
                      <p class=" ms-3 mt-1">Notifications</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-3">
                      <h3><i class="fa-solid fa-envelope"></i></h3>
                      <p class=" ms-3 mt-1">Messages</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-4">
                      <h3><i class="fa-solid fa-table-list"></i></h3>
                      <p class=" ms-2 mt-1">Lists</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-4">
                      <h3><i class="fa-solid fa-bookmark"></i></h3>
                      <p class=" ms-3 mt-1">Bookmarks</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-4">
                      <h3><i class="fa-solid fa-user-group"></i></h3>
                      <p class=" ms-2 mt-1">Communities</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-4">
                      <h3><i class="fa-brands fa-x-twitter"></i></h3>
                      <p class=" ms-2 mt-1">Premuim</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-4">
                      <h3><i class="fa-solid fa-user"></i></h3>
                      <p class=" ms-2 mt-1">Profile</p>
                  </div>
                  <div class="offBodyItems d-flex mt-4 gap-4">
                      <h3><i class="fa-solid fa-circle-exclamation"></i></h3>
                      <p class=" ms-2 mt-1">More</p>
                  </div>
        
                  <div class="pstBtn mt-4">
                      <button class="pstbTn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Post</button>
                  </div>
    </div>
</div>
       </div>

  <div class="allUserPost">
            
            <div class="cad mt-3 my-3"  v-for="post in allpost" :key="post.id">
                <div class="postHeader d-flex gap-2">
                    <div style="width: 50px;height: 50px;border-radius: 50%;" class="border bg-secondary"></div>
                    <p class="mt-2"><b>{{ post.name }}</b></p>  
                    <small class="mt-2">{{ post.email }}</small>
                </div>
                <p class="card-text text-start ms-5">{{ post.content }}</p>
                <div v-for="image in post.images" :key="image">
                    <img  :src="'http://localhost:8000/storage/'+image" v-if="post.image!==null" alt="image">
                </div>
                <div class="icoons d-flex gap-5 mx-auto mt-3" style="justify-content: space-between; padding: 0 3rem;">
                    <p><i class="fa-regular fa-comment"></i></p>
                    <p><i class="fa-solid fa-arrows-rotate"></i></p>
                    <p><i class="fa-regular fa-heart"></i></p>
                    <p><i class="fa-solid fa-chart-simple"></i></p>
                    <p><i class="fa-regular fa-bookmark"></i></p>
                </div>
            </div>
   </div>

       <div class="otherPt">

       </div>
   </section>



         <!-- MyMODAl -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      <form class=" mx-auto" @submit.prevent="savePost">
    <div class="modal-content">
      <div class="modal-header d-flex" style="justify-content:space-between">
          <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
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
        
        <button type="submit" class="btn btn-info" @click="done" data-bs-dismiss="modal" aria-label="Close">Submit</button>
        
    </div>
</div>
</form>
  </div>
</div>




        
</template>

<script>
import axios from 'axios';
import useValidate from '@vuelidate/core'
import { minLength,maxLength,} from '@vuelidate/validators';

export default {
    beforeMount(){
        axios.get('http://localhost:8000/api/getPosts').then((res)=>{
            // console.log(res.data);
            this.allpost = res.data.posts;
            console.log(this.allpost);
        })
    },

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
                content:{ min: minLength(20), max: maxLength(500)},
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


          done(){
            this.$router.push('/dashboard')
          }
      }



}
        
    

</script>

<style>

nav{
  margin: -4rem 0px;
}
     .allCont{
        display: flex;
        /* background-color: gainsboro; */
        background-color: honeydew;
        margin: -5rem 0;
     }
     .offCanv{
        flex-basis: 30%;
        align-items: end;
     }
     .xl{
      color: darkcyan;
     }

     .offBtnTrig{
        position: absolute;
        top: 0;
        left: 1px;
     }
     .offCanv{
      position: sticky;
     }
    .offcanvas-body{
        margin: 0 0 0 5rem;
        padding: 3rem;
        justify-content: center;
        color:darkcyan;
       

    }
    .offBodyItems{
        color:darkcyan;
    }
    .pstBtn{
        margin:0 0 0 -13rem;
    }

    .pstbTn{
    padding: 0.7rem 4rem;
    font-size: 16px;
    border-radius: 30px 30px 30px 30px;
    border: 0.6rem;
    cursor: pointer;
    background-color:darkcyan;
    transition: all 0.5s; 
    vertical-align: middle;
    width: 30%;
    align-self: start;
   }
    .allUserPost{
        flex-basis: 50%;
        margin: 0 auto;
        border-left: 3px thin;
    }
    .allUserPost img{
        width: 70%;
    }
    .cad{
      width: 100%;
      border: 2px solid aliceblue;
      padding:10px;
    }
    .otherPt{
      flex-basis: 20%;
    }


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

    @media (max-width: 768px) {
        .offcanvas-body{
            margin: -5rem 0 0 3rem;
        }
        .pstBtn{
        margin:0 0 0 -10rem;
    }
    }
</style>