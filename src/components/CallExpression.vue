<template>
  <span class="call-expression">
    <Node :node="node.callee"></Node>

    <span class="arguments">
      <span class="argument" v-for="(arg, i) in node.arguments" :key="i">
        <Node :node="arg"></Node>
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'CallExpression',
  props: ['node'],
  data () {
    return {
    }
  },
};
</script>



<style scoped lang="scss">
.call-expression {
  display: inline;
  float: none;

  > .arguments {
    display: inline-block;

    > .argument {
      &:after {
        content: ', ';
          float: left;
          display: inline-block;
          margin-right: 1em;
      }

      &:last-child {
        &:after {
          content: '';
            margin-right: 0px;
        }

        > .node {
          margin-bottom: 0px;
        }
      }
    }
    &:before {
      content: '(';
        float:left;
    }

    
    &:after {
      content: ')';
      float: left;
    }
  }
}
</style>