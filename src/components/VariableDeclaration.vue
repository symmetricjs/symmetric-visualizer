<template>
  <div class="variable-declaration">
    <span class="kind">
      {{ node.kind }}
    </span>

    <Node v-for="(declaration, i) in node.declarations" :key="i" :node="declaration"></Node>
  </div>
</template>

<script>
export default {
  name: 'VariableDeclaration',
  components: {
  },
  props: ['node'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style scoped lang="scss">
.node.variable-declaration {
  position: relative;
  padding-left: 3em;
  display: block;
  clear: both;
  float: none;
  overflow: auto;
  margin-bottom: 1em;

  .kind {
    position: absolute;
    top: 0px;
    left: 0px;
  }
}
</style>