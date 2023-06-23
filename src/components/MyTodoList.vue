<template>
<div class="app">
  <TodoForm />
  <TodoList :todos="todos" />
</div>
</template>

<script>
import { mapState } from 'vuex'
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    ...mapState([
      'todos'
    ]),
  },
}
</script>

<style>

.app {
  padding: 20px;
}

* {
  margin: 0;
  padding: 0;
}
</style>
