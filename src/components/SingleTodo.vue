<template>
    <div>
        <h6 v-if="todo">{{ JSON.parse(todo).title }}</h6>
        <h6 v-if="todo">{{ JSON.parse(todo).text }}</h6>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    mounted() {
        console.log(this.todo);
        // console.log('id', this.$route.params.id);
    }
}
</script>

<style scoped></style>