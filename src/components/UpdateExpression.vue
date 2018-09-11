<template>
  <span class="update-expression">
    <span class="operator" v-if="node.prefix">{{ node.operator }}</span>
    <Node :node="node.argument"></Node>
    <span class="operator" v-if="!node.prefix">{{ node.operator }}</span>
  </span>
</template>

<script>
export default {
  name: 'UpdateExpression',
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