import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import EmployeeList from '@/components/EmployeeList'
import MenuItemList from '@/components/MenuItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/employees',
      name: 'Employees',
      component: EmployeeList
    },
    {
      path: '/menu-items',
      name: 'MenuItems',
      component: MenuItemList
    }
  ]
})
