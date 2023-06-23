import { createStore } from "vuex";

export default createStore({
    state: {
        todos: [
            {title: 'Todo 1', text: 'go to school', id: 1},
            {title: 'Todo 2', text: 'go to university', id: 2},
            {title: 'Todo 3', text: 'go to office', id: 3}
        ]
    },
    getters: {

    },
    mutations: {
        addTodo(state, post) {
            state.todos.push(post)
        },
        removeTodo(state, id) {
            console.log('uuuuuu', id);
            state.todos = state.todos.filter(el => el.id !== id)
        }
    },
    actions: {

    }
})