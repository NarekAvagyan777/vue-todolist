import {createRouter, createWebHistory} from 'vue-router'
import SingleTodo from '@/components/SingleTodo.vue'
import MyTodoList from '@/components/MyTodoList.vue'

const routes = [
    {
        path: '/',
        component: MyTodoList
    },
    {
        path: '/todo:id',
        component: SingleTodo,
        name: 'todo',
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;