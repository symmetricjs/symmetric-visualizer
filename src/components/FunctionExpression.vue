<template>
  <span class="function-expression">
    <div class="state">{{state}}</div>
    <Node class="id" :node="node.id"></Node>
    <span class="params">
      <Node :node="node.params"></Node>
    </span>

    <Node :node="node.body"></Node>
  </span>
</template>

<script>
export default {
  name: 'FunctionExpression',
  extends: 'Node',
  props: ['node', 'state'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.node.function-expression {
  display: inline;
  float: none;
  margin-bottom: 1em;

  &:before {
    content: 'function';
      float: left;
      display: inline-block;
      margin-right: 1em;
  }

  > .params {
    display: inline-block;
    float: left;

    &:before {
      content: '(';
        float:left;
    }
    &:after {
      content: ')';
      float:right;
      margin-right: 1em;
      display: inline-block;
    }
  }

  > .body {
    display: inline-block;
    float: left;
  }
}
</style>