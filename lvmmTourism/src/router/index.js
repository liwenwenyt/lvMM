import Vue from 'vue'
import Router from 'vue-router'
import lvHomePage from '../pages/lvHomePage'
import lvHomePageLike from  '../components/lmmHomePage/lvHomePageLike'
import lvHomePageTwoLike from  '../components/lmmHomePage/lvHomePageTwoLike'
import lvHomePageThreeLike from  '../components/lmmHomePage/lvHomePageThreeLike'
import lvHomePageFourLike from  '../components/lmmHomePage/lvHomePageFourLike'
import lvBackendHeader from  '../components/lvBackend/lvBackendHeader'
import lvParticulars from '../pages/lvParticulars'
import salepage from '../pages/lmmSalePage'
import saledetailspage from '../pages/lmmSaleDetailspage'
import saledetailsorder from '../pages/lcOrder'
import lvFind from '../pages/lvFind'
import lvFindDetal from '../pages/lvFindDetal'
import lvFindOrder from '../pages/lvFindOrder'
import lmmSaleDetailspage from '../pages/lmmSaleDetailspage'
import serverOrder from '../pages/serverOrder'
import lmmService from '../pages/lmmService'
import lvOnline from '../components/lmmService/lvOnline'
import lvServiceSection from '../components/lmmService/lvServiceSection'
import lcLmmMine from '../pages/lcLmmMine'
import goodsdetailspage from '../pages/goodsdetailspage'

Vue.use(Router)
export default new Router({
  linkActiveClass:'list-active',
  routes: [

    {
      path: '/',
      name: 'lvHomePage',
      component: lvHomePage,
      redirect:'/door1',
      children: [
        {
          path: 'door1',
          name: 'lvHomePageLike',
          component: lvHomePageLike
        },
        {
          path: 'door2',
          name: 'lvHomePageTwoLike',
          component: lvHomePageTwoLike
        },
        {
          path: 'door3',
          name: 'lvHomePageThreeLike',
          component: lvHomePageThreeLike
        },
        {
          path: 'door4',
          name: 'lvHomePageFourLike',
          component: lvHomePageFourLike
        }
      ]
    },
    {
      path: '/lvParticularRe',
      name: 'lvParticulars',
      component: lvParticulars
    },
    {
      path: '/back',
      name: 'lvBackendHeader',
      component: lvBackendHeader
    },
    {
      path: '/sale',
      name: 'salepage',
      component: salepage
    },
    {
      path: '/saledetails',
      name: 'saledetailspage',
      component: saledetailspage
    },
    {
      path: '/detailorder',
      name: 'saledetailsorder',
      component: saledetailsorder
    },
    {
      path: '/find',
      name: 'lvFind',
      component: lvFind
    },
    {
      path: '/saleDetail',
      name: 'lmmSaleDetailspage',
      component: lmmSaleDetailspage
    },
    {
      path: '/detal',
      name: 'lvFindDetal',
      component: lvFindDetal
    },
    {
      path: '/findOrder',
      name: 'lvFindOrder',
      component: lvFindOrder
    },
    {
      path: '/serverOrder',
      name: 'serverOrder',
      component: serverOrder
    },
    {
      path:'/lmmService',
      name:'lmmService',
      component:lmmService,
      redirect:'/lmmService/lvServiceSection',
      children:[
        {
          path:'lvServiceSection',
          name:'lvServiceSection',
          component:lvServiceSection
        },
        {
          path:'lvOnline',
          name:'lvOnline',
          component:lvOnline
        }
      ]
    },
    {
      path: '/lcLmmMine',
      name: 'lcLmmMine',
      component: lcLmmMine
    },
    {
      path: '/goodsdetailspage',
      name: 'goodsdetailspage',
      component: goodsdetailspage
    }
  ]
})
