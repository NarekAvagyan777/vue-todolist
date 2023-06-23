<template>
    <div class="todo">
        <div>
            <h4>{{ todo.title }}</h4>
            <h6>{{ todo.text }}</h6>
        </div>
        
        <div>
            <button @click="deleteTodo(todo.id)" style="margin-right: 20px;">Delete</button>
            <button style="border-color: teal; color: teal" @click="goToPost">Go to Post</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapMutations({
            deleteTodo: 'removeTodo'
        }),
        goToPost() {
            this.$router.push({ name: 'todo', params: { todo: JSON.stringify(this.todo) }});
        }
    },
    created() {
        console.log('todo', this.todo);
    }
}
</script>

<style scoped>
.todo {
    border-radius: 5px;
    border: 1px solid teal;
    padding: 10px;
}

button {
    margin-top: 20px;
    padding: 5px;
    color: darkred;
    background: none;
    border: 1px solid red;
}

h6 {
    margin-top: 10px;
}
</style>