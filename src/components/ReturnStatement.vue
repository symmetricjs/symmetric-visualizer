<template>
  <span class="return-statement">
    <Node class="argument" :node="node.argument"></Node>
  </span>
</template>

<script>
export default {
  name: 'ReturnStatement',
  extends: 'Node',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>


<style scoped lang="scss">
.return-statement {
  &:before {
    content: 'return';
      display: inline-block;
      float: left;
  }
  > .argument {
    margin-left: 1em;
  }

  &:after {
    content: ';';
      float: left;
      display: inline-block;
      margin-right: 1em;
  }
}
</style>