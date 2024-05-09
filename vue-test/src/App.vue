<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
<<<<<<< HEAD
      <HelloWorld msg="You did it!" />
      <HelloWorld msg="hahahahahahahahhah1" />
      <HelloWorld msg="hahahahahahahahhah2" />
      <HelloWorld msg="hahahahahahahahhah3" />
      <HelloWorld msg="hahahahahahahahhah4" />
      <HelloWorld msg="hahahahahahahahhah55" />
      <HelloWorld msg="hahahahahahahahhah6" />
=======
      <HelloWorld msg="loren success!!!" />
      <HelloWorld msg="loren success!!!" />
      <HelloWorld msg="loren success!!!" />
      <HelloWorld msg="loren You did it!You are a greate man!!!" />
>>>>>>> ea64f49ec464f748fde41c5ff965bfb2aa942971
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
