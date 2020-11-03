import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import AddProduct from './components/AddProduct.vue'
import ProductBasket from './components/ProductBasket.vue'

const router = new VueRouter({
 

    mode:'history',

    routes:[
 
        {path:"/add",component:AddProduct},
        {paht:"/basket",component:ProductBasket}
        
 ]

});

export default router