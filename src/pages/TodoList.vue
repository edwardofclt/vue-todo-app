<script setup>
import { useTodoStore } from '@/stores/todo';
</script>

<template>
  <main>
    <input placeholder="Add a To Do Item" type="text" v-model="newTodo" @keyup.enter="addTodo">
    <ul v-for="(todo, idx) in todos.todoList" :key="idx">
      <li v-bind:class="todo.done ? 'done' : ''" v-on:click="todo.done = !todo.done"><span>{{ todo.text }}</span>
        <input type="checkbox" v-model="todo.done">
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  input[type=text] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: solid 1px #ccc;
    margin-bottom: 10px;
    
  }
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;

    li {
      margin: 10px 0px;
      border: solid 1px #ccc;
      padding: 5px;

      transition: all .3s;
      
      &.done {
        background-color: lightgreen;
        color: darkgreen;
        text-decoration: line-through;
      }

      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

<script>
export default {
  methods: {
    addTodo() {
    this.todos.add({text: this.newTodo, done: false})
    this.newTodo = ''
    },
  },
  data (){
    return {
      todos: useTodoStore(),
    }
  }
}
</script>