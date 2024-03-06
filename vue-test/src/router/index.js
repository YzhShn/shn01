import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout/index.vue'
import Product from '../Product/ProductList.vue'
import User from '../User/User.vue'
import ChildComponent from '../Pass/ChildComponent.vue'
import ParentComponent from '../Pass/ParentComponent.vue'
import CardComponent from '../Pass/CardComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
   
  },
  {
    path:'/product',
    component:Product
  },{
    path:'/user',
    component:User
  },{
    path:'/parent',
    component:ParentComponent
  }
]

const router = new VueRouter({
  
  
    routes
  })

  export default router