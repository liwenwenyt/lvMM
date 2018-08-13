import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import lvBackend from '../pages/lvBackend'
import lvBackHomePage from '../components/lvBackend/lvBackHomePage'
import lvBackendForm from '../pages/lvBackendForm'
import sunlvmmForm from '../components/lvBackend/sunlvmmForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/lvBackend',
      name:'lvBackend',
      redirect:'/lvBackHomePage',
      component:lvBackend,
      children:[
        {
          path:'/lvBackHomePage',
          name:'lvBackHomePage',
          component:lvBackHomePage
        },
        {
          path:'/addsub',
          name:'lvBackendForm',
          component:lvBackendForm
        },
        {
          path:'/sunlvmmForm',
          name:'sunlvmmForm',
          component:sunlvmmForm
        }
      ]
    }

  ]
})
