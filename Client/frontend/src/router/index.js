import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Contact from '../views/contact.vue'
import About from '../views/About.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import City from '../views/City.vue'
import ShowCity from '../views/ShowCity.vue'
import Package from '../views/Package.vue'
import Editprofile from '../views/Editprofile.vue'
import AllArticles from '../views/AllArticles.vue'
import Article from '../views/Article'
import ShowPackage from '../views/ShowPackage'
import ChooseGuides from '../views/ChooseGuides'
import Confirm from '../views/Confirm'
import ConfirmationMessage from '../views/ConfirmationMessage'
import Place from '../views/Place'
import Cart from '../views/Cart'
import AllPlace from '../views/AllPlace'
import States from '../views/States'
import Guides from '../views/Guides'
import Guide from '../views/Guide'
import Comptetype from '../views/Comptetype'
import GuideLogin from '../views/GuideLogin'
import Error from '../views/Error'

//Admin

import Addplaces from "../views/Admin/Addplaces.vue";
import Addnew from "../views/Admin/Addnew.vue";
import Addarticle from "../views/Admin/Addarticle.vue";
import newarticle from "../views/Admin/newarticle.vue";
import Addguide from "../views/Admin/Addguide.vue";
import newguide from "../views/Admin/newguide.vue";
import user from "../views/Admin/user.vue";
import Addadmin from "../views/Admin/Addadmin.vue";
import Newadmin from "../views/Admin/Newadmin.vue";
import updatePlace from "../views/update/updatePlace.vue";
import updateArticle from "../views/update/updateArticle.vue";
import updateGuide from "../views/update/updateGuide.vue";
import Packages from "../views/Admin/Packages.vue"
import AddPackage from "../views/Admin/AddPackage.vue"
import Home1 from "../views/Admin/Home.vue"
import Guide1 from "../views/Admin/Guide.vue"
import Facture from "../views/Admin/Facture.vue"
import Recommend from "../views/Admin/Recommend.vue"
import Clients from "../views/Admin/Clients.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { hideNavigation: true }
  },
   {
    path: '/Articles',
    name: 'Articles',
    component: Articles,
    meta: { hideNavigation: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { hideNavigation: true }
  },
  {
    path: '/About',
    name: 'About',
    component: About,
    meta: { hideNavigation: true }
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin

  },
    {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/Comptetype',
    name: 'Comptetype ',
    component: Comptetype ,

  },
   {
    path: '/GuideLogin',
    name: 'GuideLogin ',
    component: GuideLogin ,

  },
  {
    path: '/City',
    name: 'City',
    component: City,
    meta: { hideNavigation: true }
  },

   {
    path: '/ShowCity',
    name: 'ShowCity',
    component: ShowCity,
    meta: { hideNavigation: true }
  },


  {
    path: '/Package',
    name: 'Package',
    component: Package,
    meta: { hideNavigation: true }
  },
   {
    path: '/Editprofile',
    name: 'Editprofile',
    component: Editprofile,
    meta: { hideNavigation: true }
  },
  {
    path: '/AllArticles',
    name: 'AllArticles',
    component: AllArticles,
    meta: { hideNavigation: true }
  },
   {
    path: '/Article',
    name: 'Article',
    component: Article,
    meta: { hideNavigation: true }
  },
  {
    path: '/ShowPackage',
    name: 'ShowPackage',
    component: ShowPackage,
    meta: { hideNavigation: true }
  },
  {
    path:'/ChooseGuides',
    name:'ChooseGuides',
    component:ChooseGuides,
    meta: { hideNavigation: true }
  },
  {
    path:'/Confirm',
    name:'Confirm',
    component:Confirm,
    meta: { hideNavigation: true }

  },

  {
    path:'/ConfirmationMessage',
    name:'ConfirmationMessage',
    component:ConfirmationMessage,
    meta: { hideNavigation: true }
  },

  {
    path:'/Place',
    name:'Place',
    component:Place,
    meta: { hideNavigation: true }
  },

  {
    path:'/Cart',
    name:'Cart',
    component:Cart,
    meta: { hideNavigation: true }
  },
  {
    path:'/Error',
    name:'Error',
    component:Error,
    meta: { hideNavigation: true }
  },

  {
     path:'/AllPlace',
    name:'AllPlace',
    component:AllPlace,
    meta: { hideNavigation: true }
  },

   {
     path:'/States',
    name:'States',
    component:States,
    meta: { hideNavigation: true }
  },
  {
    path:'/Guides',
    name:'Guides',
    component:Guides,
    meta: { hideNavigation: true }
  },
  {
    path:'/Guide',
    name:'Guide',
    component:Guide,
    meta: { hideNavigation: true }
  },
  {
    path: "/Admin/Addadmin",
    name: "Addadmin",
    component: Addadmin,
    meta: {Navigation: true }
  },

   {
    path: "/Admin/Addplaces",
    name: "Addplaces",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Addplaces,
    meta: {Navigation: true }
  },

  {
    path: "/Admin/Addnew",
    name: "Addnew",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Addnew,
    meta: {Navigation: true }
  },
  {
    path: "/Admin/Addarticle",
    name: "Addarticle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Addarticle,
    meta: {Navigation: true }
  },
  {
    path: "/Admin/newarticle",
    name: "newarticle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: newarticle,
    meta: {Navigation: true }
  },
   {
    path: "/Admin/Addguide",
    name: "Addguide",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Addguide,
    meta: {Navigation: true }
  },

  {
    path: "/Admin/newguide",
    name: "newguide",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: newguide,
    meta: {Navigation: true }
  },
  {
    path: "/Admin/user",
    name: "user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: user,
    meta: {Navigation: true },
  },

   {
    path: "/Admin/Newadmin",
    name: "Newadmin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Newadmin,
    meta: {Navigation: true },
  },
  {
    path: "/Admin/updatePlace",
    name: "updatePlace",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: updatePlace,
    meta: {Navigation: true }
  },
  {
    path: "/Admin/updateArticle",
    name: "updateArticle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: updateArticle,
    meta: {Navigation: true }
  },
  {
    path: "/Admin/updateGuide",
    name: "updateGuide",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: updateGuide,
    meta: {Navigation: true }
  },

  {
    path:"/Admin/Packages",
    name: "Packages",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Packages,
    meta: {Navigation: true }
  },
  {
    path:"/Admin/AddPackage",
    name: "AddPackage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddPackage,
    meta: {Navigation: true }
  },

   {
    path:"/Admin/Home",
    name: 'home',

    component: Home1,
    meta: {Navigation: true }
  },

  {
    path:"/Guide1",
         name: 'Guide',
    component: Guide1
  },

  {
    path:"/Recommend",
         name: 'Recommend',
    component: Recommend
  },
  {
    path:"/Clients",
         name: 'Clients',
    component: Clients
  },
  {
    path:"/Facture",
         name: 'Facture',
    component: Facture,
    meta: {Navigation: true }
  },

]

const router = new VueRouter({
  routes
})

export default router
