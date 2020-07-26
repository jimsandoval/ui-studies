<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Colors</router-link> |
      <router-link to="/tables">Responsive Tables</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

#nav {
  text-align: center;
  margin: 8px;
  font-weight: 700;
  font-size: 110%;
}
</style>
