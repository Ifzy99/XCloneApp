<template>
 
   <SideNav/>
  <section class="home-section">
    
    <div class="allUserPost">
         <small v-if="message">  {{ message }}</small>
               <!-- Main Page Post Input  -->
               <div class="postSect bg bg-light">
                    <form @submit.prevent="savePost">
                      <div class="d-flex gap-2">
                        <div style="width: 50px;height: 50px;border-radius: 50%;" class="border bg-secondary"></div>
                        <textarea name="content" id="" cols="80" rows="5" class="form-control bg-light" placeholder="What's happening...."  aria-describedby="emailHelp" style="justify-content:start; border:none; width: 100%;" v-model="v$.post.content.$model"></textarea>
                      </div>
                      <div class="postSectFooter gap-5 ms-2">
                          <div class="postSectIcons d-flex gap-4 ms-3 mt-2">
                              <div type="file" multiple><i class="fa-regular fa-image"></i></div>
                              <div><i class="fa-solid fa-bars-progress"></i></div>
                              <div><i class="fa-regular fa-face-smile"></i></div>
                              <div><i class="fa-solid fa-clipboard-list"></i></div>
                              <div><i class="fa-solid fa-location-dot"></i></div>
                          </div>
                          <div class="pb-1">
                            <PostButton/>
                          </div>
                      </div>
                    </form>
               </div>
               <!-- Main Page Post Input  -->

              
               <!--All Users Post  -->
              <div class="cad mt-3 my-3"  v-for="post in allpost" :key="post.id">
                  <div class="postHeader d-flex gap-2">
                      <div style="width: 50px;height: 50px;border-radius: 50%;" class="border bg-secondary"></div>
                      <p class="mt-2"><b>{{ post.name }}</b></p>  
                      <small class="mt-2">{{ post.email }}</small>
                  </div>
                  <p class="card-text text-start ms-5">{{ post.content }}</p>
                  <div v-for="image in post.images" :key="image">
                      <img class="postImg" :src="'http://localhost:8000/storage/'+image" v-if="post.image!==null" alt="image">
                  </div>
                  <div class="icoons d-flex  mt-3" style="justify-content: space-evenly; padding: 0 3rem;">
                      <p><i class="fa-regular fa-comment"></i></p>
                      <p><i class="fa-solid fa-arrows-rotate"></i></p>
                      <p><i class="fa-regular fa-heart"></i></p>
                      <p><i class="fa-solid fa-chart-simple"></i></p>
                      <p><i class="fa-regular fa-bookmark"></i></p>
                  </div>
              </div>
               <!-- All Users Post  -->

     </div>

  </section>

        
<!-- Modal -->
<DashbdModal/>

</template>

<script>
import SideNav from './SideNav.vue'
import DashbdModal from './DashbdModal.vue';
import PostButton from './PostButton.vue';
import axios from 'axios';
import useValidate from '@vuelidate/core'
import { maxLength,} from '@vuelidate/validators';

export default {
  components:{
    SideNav,
    DashbdModal,
    PostButton
  },
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
            isSidebarOpen: false,
            message:''
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
                    this.message = res.data.message
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

nav{
  margin: -4rem 0px;
}
      .allUserPost{
          /* flex-basis: 50%; */
          margin: 0 auto;
          border-left: 3px thin;
          margin-right: 2em;
          padding: 20px; 
      }
      .allUserPost img{
          width: 70%;
      }
      .postSectIcons{
        color: #426c94;
        /* color: darkcyan; */

      }
      .cad{
        width: 100%;
        border: 2px solid aliceblue;
        padding:10px;
      }

      .postSectFooter{
        display: flex;
      }

</style>