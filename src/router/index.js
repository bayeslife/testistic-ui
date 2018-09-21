import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestRuns from '@/components/TestRuns'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import About from '@/components/About'
import Projects from '@/components/Projects'
import TestRunsProject from '@/components/TestRunsProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/testruns',
      name: 'TestRuns',
      component: TestRuns
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/:project',
      name: 'TestRunsProject',
      component: TestRunsProject
    },
    {
      path: '/hello/:parm',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
