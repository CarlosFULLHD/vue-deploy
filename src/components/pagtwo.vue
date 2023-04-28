<template>
    <h2>saludos desde la pagina dos</h2>
    <p>{{ rvar }}</p>
    <p>Valor de a: {{ a }}</p>
    <p>Valor de b: {{ b }}</p>
    <p>{{ mutiplicacion }} </p>

</template>
<script setup>
//aqui hacemos imports
import {ref, computed} from 'vue'
  const a = ref(99);
  const b = ref(65);

  const rvar = ref("Mutiplicacion ")
  const mutiplicacion = computed (() =>{
    return a.value*b.value;
  })
  
</script>