<template>
  <span class="for-statement">
    <span class="init">
      <Node :node="node.init"></Node>
    </span>
    <span class="test">
      <Node :node="node.test"></Node>
    </span>
    <span class="update">
      <Node :node="node.update"></Node>
    </span>


    <Node :node="node.body"></Node>

  </span>
</template>

<script>
export default {
  name: 'ForStatement',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.for-statement {
  display: block;
  float: none;
  clear: both;
  margin-bottom: 1em;
  
  &:before {
    content: 'for (';
      float: left;
  }

  > .test, .init {
    &:after {
      content: ';';
        float: left;
        display: inline-block;
        margin-right: 1em;
    }
  }

  .update {
    &:after {
      content: ')';
        float: left;
    }
  }
}
</style>