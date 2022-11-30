<template>
  <div ref="pill" class="language-pill">
    {{name}}: {{pop}}
  </div>
</template>

<script>
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

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
    topPop: { // todo: document
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      interval: '',
    };
  },

  mounted() {
    this.startConversation();
  },

  methods: {
    async startConversation() {
      const conversation = [
        [1000, 250], [2000, 300], [3000, 700], [2000, 300],
        // [500, 500], [600, 300], [400, 700], [400, 300],
        // [500, 500], [600, 300], [400, 700], [400, 300],
        // [500, 500], [600, 300], [400, 700], [400, 300],
        // [500, 500], [600, 300], [400, 700], [400, 300],
      ];

      // eslint-disable-next-line
      for (const phrase of conversation) {
        this.$refs.pill.classList.add('talking');
        // eslint-disable-next-line
        await wait(phrase[0]);
        this.$refs.pill.classList.remove('talking');
        // eslint-disable-next-line
        await wait(phrase[1] * (1 - this.pop/this.topPop));
      }

      this.startConversation();
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

  &.talking {
    background: blue;
    color: white;
  }

  &.dead {
    background: red;
    color: black;
  }
}
</style>
