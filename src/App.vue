

<template>
  <h2>Rutas con vue js</h2>
  <header>
    
    <div class="app">
      <nav>
        <router-link to="/pagone"><button>Pag one</button></router-link>
        <router-link to="/pagtwo"><button>Pag two</button> </router-link>
        <router-link to="/pagthree"><button>Pag three</button></router-link>
        
      </nav>

    </div>
    <router-view></router-view>
  </header>

  
</template>

<style scoped>
header {
  line-height: 1.5;
}
button{
  background-color: aqua;
  width: 200px;

  border-radius: 25px;
  box-shadow: 10px 5px 5px black;
  color: white;
}
</style>


