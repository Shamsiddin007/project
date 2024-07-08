<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <div class="esc">
          <RouterLink  to="/"><h1 style="cursor: pointer;">Escape</h1></RouterLink>
        </div>
        <ul>
          <RouterLink to="/home"><li>HOME</li></RouterLink>
          <RouterLink to="/about"><li>ABOUT</li></RouterLink>
          <RouterLink to="/categories"><li>CATEGORIES</li></RouterLink>
          <RouterLink to="/contact"><li>CONTACT</li></RouterLink>
        </ul>
        <img class="xetrik" src="/src/assets/xetriK.svg" alt="">
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav{
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0px; 
  background-color: rgba(139, 77, 54, 0.797);
  width: 100%;
}
ul{
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
}
a{
  text-decoration: none;

}
.xetrik{
  width: 50px;
  height: 50px;
  display: none;
}
@media (max-width:600px) {
  ul[data-v-7a7a37b1]{
    display: none;
  }
.xetrik{
  display: block;
}
  .esc{
    
  }
}

</style>
