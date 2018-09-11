<template>
  <span class="if-statement">
    <span class="test">
      <Node :node="node.test"></Node>
    </span>

    <span class="result">
      <Node class="consequent" v-if="node.consequent" :node="node.consequent"></Node>
      <Node class="alternate" v-if="node.alternate" :node="node.alternate"></Node>
    </span>

  </span>
</template>

<script>
export default {
  name: 'IfStatement',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.if-statement {
  display: block;
  float: none;
  clear: both;
  margin-bottom: 1em;

  &:before {
    content: 'if (';
      float: left;
  }

  .test {
    display: inline;
    float: none;
  }

  .result {

    &:before {
      content: ')';
        float: left;
        display: inline-block;
        margin-right: 1em;
    }

  display: block;
  // float: left;
  // clear: both;
  }
}
</style>