<template>
      <div class="sidebar" :class="{ 'open': isSidebarOpen }">
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus icon'></i>
        <!-- <div class="logo_name">CodingLab</div> -->
        <i class='bx bx-menu' id="btn"  @click="toggleSidebar"></i>
    </div>
    <ul class="nav-list">
      <li>
          <i class='bx bx-search'  @click="toggleSidebar"></i>
         <input type="text" placeholder="Search...">
         <span class="tooltip">Explore</span>
      </li>
      <li>
        <a href="#">
            <i class='bx bx-home-alt'></i>
          <span class="links_name"><b>Home</b></span>
        </a>
         <span class="tooltip">Home</span>
      </li>
      <li>
       <a href="#">
         <i class='bx bx-user' ></i>
         <span class="links_name">Profile</span>
       </a>
       <span class="tooltip">Profile</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-chat' ></i>
         <span class="links_name">Messages</span>
       </a>
       <span class="tooltip">Messages</span>
     </li>
     <li>
       <a href="#">
        <i class='bx bx-bell'></i>
         <span class="links_name">Notifications</span>
       </a>
       <span class="tooltip">Notifications</span>
     </li>
     <li>
       <a href="#">
        <i class='bx bx-bookmark'></i>
         <span class="links_name">Bookmark</span>
       </a>
       <span class="tooltip">Bookmark</span>
     </li>
     <li>
       <a href="#">
        <i class='bx bx-building-house'></i>
         <span class="links_name">Communities</span>
       </a>
       <span class="tooltip">Communities</span>
     </li>
     <li>
       <a href="#">
        <i class='bx bx-spreadsheet'></i>
         <span class="links_name">List</span>
       </a>
       <span class="tooltip">List</span>
     </li>
     <li>
       <a href="#">
        <i class='bx bx-dots-horizontal-rounded'></i>
         <span class="links_name">More</span>
       </a>
       <span class="tooltip">More</span>
     </li>
     <li>
      <div>
        <button class="pstbTn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Post</button>
      </div>
     </li>

     <li class="profile">
         <div class="profile-details">
           <img src="../assets/logo.png" alt="profileImg">
           <div class="name_job">
             <div class="name">Ifzy</div>
             <div class="job">Web designer</div>
           </div>
         </div>
         <i class='bx bx-log-out' id="log_out" ></i>
     </li>
   
    </ul>
  </div>

</template>

<script>


export default {
  data(){
        return{
            isSidebarOpen: false
          }
      },
      methods:{

toggleSidebar() {
this.isSidebarOpen = !this.isSidebarOpen;
this.menuBtnChange();
},
menuBtnChange() {
const closeBtn = document.getElementById('btn');

if (this.isSidebarOpen) {
  closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
} else {
  closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
}
},
},

}

</script>

<style>
/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}
.main {
  width: 100%;
  background-color: #fff;
}
.side-navbar {
  position: fixed;
  height: 100vh;
  width: 260px;
  background: #460044;
  overflow: hidden;
  transition: 0.5s ease;
}
.side-navbar ul {
  top: 0;
  left: 0;
  width: 100%;
}
.side-navbar ul li {
  width: 100%;
}
.side-navbar ul li:hover {
  background: #8b0084;
}
.side-navbar ul li:first-child {
  margin-bottom: 1rem;
  background: none;
}
.side-navbar ul li a {
  display: block;
  width: 100%;
  display: flex;
  color: #fff;
}
.side-navbar ul li a .icon {
  min-width: 60px;
  display: block;
  font-size: 25px;
  line-height: 60px;
  height: 60px;
  text-align: center;
}
.side-navbar ul li a .text {
  display: block;
  padding: 0 10px;
  line-height: 60px;
  height: 60px;
  white-space: nowrap;
}
.content {
  position: absolute;
  width: calc(100% - 260px);
  left: 260px;
  min-height: 100vh;
  transition: 0.5s ease;
}
.top-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 20px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
.profile img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
  cursor: pointer;
}
#menu-icon {
  font-size: 34px;
  cursor: pointer;
}
.content.active {
  width: calc(100% - 60px);
  left: 60px;
}
.side-navbar.active {
  width: 60px;
}
@media (max-width: 768px) {
  .content {
    width: 100%;
    left: 0;
  }
  .side-navbar {
    width: 60px;
    left: -60px;
  }
  .content.active {
    width: calc(100% - 60px);
    left: 60px;
  }
  .side-navbar.active {
    left: 0;
  }
}
</style>