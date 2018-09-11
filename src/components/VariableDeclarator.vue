<template>
  <span class="variable-declarator">
    <Node class="id" :node="node.id"></Node>
    <span class="init-wrap" v-if="node.init">
      <Node class="init" v-if="node.init" :node="node.init"></Node>
    </span>
  </span>
</template>

<script>
export default {
  name: 'VariableDeclarator',
  extends: 'Node',
  components: {
  },
  props: ['node'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style scoped lang="scss">
.node.variable-declarator {
  display: block;
  float: none;
  clear:both;
  padding-left: 25%;
  white-space: nowrap;

  .id {
    width: auto;
    margin-left: -25%;
    margin-right: 1em;
  }

  .init {
    white-space: normal;
  }


  .init-wrap {
    display: inline-block;
    margin-left: 15%;
    float: left;
    &:before{
      content: '=';
      float: left;
      display: inline-block;
      margin-right: 1em;
      margin-left: -2em;
    }
  }

  &:after {
    content: ',';
      float: left;
  }

  &:last-child {
    &:after {
      content: ';';
    }
  }
}
</style>