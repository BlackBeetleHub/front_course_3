import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'
import Post from '@/components/Post'
import Posts from '@/components/Posts'
import Personal from '@/components/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/post/:id_post',
      name: 'Post',
      component: Post
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
