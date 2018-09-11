<template>
  <span class="member-expression">

    <!-- {{node}} -->
    <Node :node="node.object"></Node>
    <Node :node="node.property" class="property" :class="{ computed: node.computed }"></Node>
  </span>
</template>

<script>
export default {
  name: 'MemberExpression',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
  .property {
    &:before {
      content: '.';
      float: left;
    }

    &.computed {
      &:before {
        content: '[';
        float:left;
      }
      &:after {
        content: ']';
        float: right;
      }
    }
  }
</style>