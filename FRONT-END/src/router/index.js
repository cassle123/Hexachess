import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

import Board from '../components/Board.vue'
import ListRoom from '../components/ListRoom.vue'
import Home from '../components/Home.vue'
import Chat from '../components/Chat.vue'
import Profile from '../components/Profile.vue'
import Intro from '../components/Introduction.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Rule from '../components/Rule.vue'
import Computer from '../components/Computer.vue'
import AddFriend from '../components/AddFriend.vue'
import UpdatePassword from '../components/UpdatePassword.vue'

const routes = [
    {path: '/board', component: Board},
    {path: '/room', component: ListRoom},
    {path: '/', component: Home},
    {path: '/chat', component: Chat},
    {path: '/profile', component: Profile},
    {path: '/intro', component: Intro},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/rule', component: Rule},
    {path: '/computer', component: Computer},
    {path: '/addfriend', component: AddFriend},
    {path: '/updatepassword', component: UpdatePassword},
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router