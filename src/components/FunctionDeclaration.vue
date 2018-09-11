<template>
  <span class="function-declaration">
    <div class="state">{{state}}</div>
    <Node class="id" :node="node.id"></Node>
    <span class="params">
      <Node :node="node.params"></Node>
    </span>

    <Node class="body" :node="node.body"></Node>
  </span>
</template>

<script>
export default {
  name: 'FunctionDeclaration',
  extends: 'Node',
  props: ['node', 'state'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.function-declaration {
  display: inline;
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