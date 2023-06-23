<template>
    <div class="form">
        <input type="text" placeholder="Add title" class="title" v-model="title">
        <input type="text" placeholder="Add text" class="text" v-model="text">
        <button @click="createPost">Add Todo</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            text: ''
        }
    },
    methods: {
        createPost() {
            const post = {
                title: this.title,
                text: this.text,
                id: Date.now()
            }

            this.$store.commit('addTodo', post);
            this.title = '';
            this.text = '';
        }
    }
}
</script>

<style scoped>
.form {
    margin-bottom: 20px;
    text-align: left;
    display: flex;
    align-items: stretch;
}

.text {
    margin-left: 20px;
    margin-right: 20px;
}

input {
    padding: 15px;
    border: 1px solid teal;
}

button {
    background: none;
    border: 1px solid teal;
    color: teal;
    padding: 10px;
    border-radius: 8px;
}
</style>