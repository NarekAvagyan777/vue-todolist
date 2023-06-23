<template>
    <div class="todolist">
        <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
    props: {
        todos: []
    },
    components: {
        TodoItem
    },
    methods: {
        send(id) {
            console.log('id', id);
            this.$emit('sendAgain', id)
        }
    },
    created() {
        console.log('todos', this.todos);
    }
}
</script>

<style scoped>
.todolist {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}
</style>