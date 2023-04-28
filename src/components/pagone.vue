<template>
    <h2>CONTADOR</h2>
   
    <p>{{ rvar }} {{ a }}</p>
    <input type="text" v-model="rvar">
    <br>
    <button @click="aumenta">+1</button>
    <button @click="disminuye">-1</button>
</template>

<script setup>
//aqui hacemos imports
import {ref} from 'vue'
  const a = ref(0);
  const rvar = ref("Valor del numero ")
  const aumenta =() =>{
    a.value ++;
  }
  const disminuye=()=>{
    a.value --;
  }
</script>