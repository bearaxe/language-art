<template>
  <div class="language-pill">
    {{name}}: {{pop}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    pop: {
      type: Number,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.language-pill {
  border: 1px solid black;
  border-radius: 15px;
  background: grey;
  color: black;
  padding: 1rem 2rem;
  width: 300px;
  margin: 40px auto;
}
</style>
