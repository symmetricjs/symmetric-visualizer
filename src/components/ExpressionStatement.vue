<template>
  <span class="expression-statement">
    <Node class="expression" :node="node.expression"></Node>
  </span>
</template>

<script>
export default {
  name: 'ExpressionStatement',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.node.expression-statement {
  display: block;
  clear: both;
  float: none;
  overflow: auto;

  margin-bottom: 1em;

  &:last-child {
    margin-bottom: 0em;
  }
}
</style>