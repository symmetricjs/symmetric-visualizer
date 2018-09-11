<template>
  <span class="binary-expression">
    <Node :node="node.left"></Node>
    <span class="operator">{{ node.operator }}</span>
    <Node :node="node.right"></Node>

  </span>
</template>

<script>
export default {
  name: 'BinaryExpression',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.binary-expression {
  .operator {
    float: left;
    display: inline-block;
    margin: 0 1em;
  }
}
</style>