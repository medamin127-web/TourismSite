<template>

    <div class="sidebar">

        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
                               <router-link to="/Admin/Home" class="navbar-brand"><img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/678/4286283678_e7c84d54-1661-495b-8a7f-d8ea374c0aa7.png?cb=1607875975"  alt="Logo"></router-link>


        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot>

                   <ul id="myMenu">
      <li><router-link to="/Admin/Addadmin">Admins Management  <i class="fas fa-user-shield"></i> </router-link></li>
      <li><router-link to="/Admin/Addplaces"> Places Management  <i class="fas fa-map-marked"></i> </router-link></li>
      <li><router-link to="/Admin/Addarticle">Articles Management  <i class="fab fa-blogger-b"></i> </router-link></li>
      <li><router-link to="/Admin/Addguide">Guides Management  <i class="fab fa-glide"></i></router-link></li>
      <li><router-link to="/Admin/user">User Management  <i class="fas fa-users"></i></router-link></li>
      <li><router-link to="/Admin/Packages">Packages Management  <i class="fas fa-archive"></i></router-link></li>
      <li><router-link to="/Facture">Bill History  <i class="fas fa-file-invoice-dollar"></i></router-link></li>




    </ul></slot>
            </div>
        </transition>
    </div>

</template>

<script>
 import { store, mutations } from '@/store.js'

export default {

  name: '',

        methods: {
         closeSidebarPanel: mutations.toggleNav,
         login() {
                if(this.user.Role == "admin" && this.input.password == "pass") {
                    // Additional logic here...
                } else {
                    console.log("The username and / or password is incorrect");
                }
            }


        },

         computed: {
            isPanelOpen() {
             return store.isNavOpen
            }
        }
};
</script>

<style>

</style>
