<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  --clr3: #111317;
  /* main body color */
  --clr5: #ffeed5;
  /*text revel animation */
  --clr1: #43d9c0;
  /* footer back*/
  --border-radius: 7px;
  --text-radius: 50em;
}

body {
  background: #151226 !important;
  overflow-x: hidden;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
