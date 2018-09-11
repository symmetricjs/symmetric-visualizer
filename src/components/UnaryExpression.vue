<template>
  <span class="unary-expression">
    <span class="operator" v-if="node.prefix">{{ node.operator }}</span>
    <Node :node="node.argument"></Node>
    <span class="operator" v-if="!node.prefix">{{ node.operator }}</span>
  </span>
</template>

<script>
export default {
  name: 'UnaryExpression',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.operator {
  float: left;
}
</style>