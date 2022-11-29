<template>
  <div id="app">
    <LanguagePill
      v-for="(value, key) in langData"
      :key="key"
      :name="key"
      :pop="value"
    />
  </div>
</template>

<script>
import LanguagePill from './components/LanguagePill.vue';
// eslint-disable-next-line
import langData from './assets/langData.js';

export default {
  name: 'App',
  components: {
    LanguagePill,
  },
  data() {
    return {
      langData,
    };
  },
};
</script>

<style lang="scss">
body, html {
  margin: 0;
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
