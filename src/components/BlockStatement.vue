<template>
  <span class="block-statement">
    <span class="nodes">
      <Node v-for="(body, i) in node.body" :key="i" :node="body"></Node>
    </span>
  </span>
</template>

<script>
export default {
  name: 'BlockStatement',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.node.block-statement {
  display: inline;
  float: none;

  &:before {
    content: '{';
      // clear:both;
      float: left;
  } 
  
  &:after {
    content: '}';
      // clear:both;
      float: left;
  } 

  > .nodes {
    display: inline;

    > .node {
      margin-left: 2em;
    }
    // display: inline-block;
    // padding-left: 3em;
    // display: block;
    // clear: both;
    // float: right;
    overflow: auto;
  }
}
</style>