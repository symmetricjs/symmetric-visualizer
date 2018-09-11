<template>
    <!-- <div class="node" :data-path="path"> -->
    <component class="node" v-if="node" :state="state" :node="node" :is="node.type"></component>
  <!-- </div> -->
<!--   <div class="node">
    {{ toString() }}
    <Node v-for="(n, i) in body" :key="i" :node="n"></Node>
  </div> -->
</template>

<script>
import Vue from 'vue'
import Node from './Node'
import Program from './Program'
import VariableDeclaration from './VariableDeclaration'
import VariableDeclarator from './VariableDeclarator'
import Identifier from './Identifier'
import Literal from './Literal'
import CallExpression from './CallExpression'
import MemberExpression from './MemberExpression'
import FunctionDeclaration from './FunctionDeclaration'
import BlockStatement from './BlockStatement'
import ExpressionStatement from './ExpressionStatement'
import FunctionExpression from './FunctionExpression'
import ForStatement from './ForStatement'
import UpdateExpression from './UpdateExpression'
import UnaryExpression from './UnaryExpression'
import BinaryExpression from './BinaryExpression'
import IfStatement from './IfStatement'
import ReturnStatement from './ReturnStatement'
import TemplateLiteral from './TemplateLiteral'
import ObjectExpression from './ObjectExpression'


export default {
  name: 'Node',
  components: {
    Node,
    Program,
    VariableDeclaration,
    VariableDeclarator,
    Identifier,
    Literal,
    CallExpression,
    MemberExpression,
    FunctionDeclaration,
    BlockStatement,
    ExpressionStatement,
    FunctionExpression,
    ForStatement,
    UpdateExpression,
    BinaryExpression,
    IfStatement,
    UnaryExpression,
    ReturnStatement,
    TemplateLiteral,
    ObjectExpression
  },
  props: ['node'],
  data () {
    return {
      hover: false,
      index: 0,
      state: null,
      path: '',
    }
  },
  watch: {
    node:  function () {
    },
    state:  function () {
      console.log('state updated for ', this.type)
      this.$forceUpdate()
    }
  },
  mounted () {
    var self = this;

    if (this.node && this._vnode) {
      setTimeout(function () {
        // Vue.set(self, 'state', window.pathIndex[self.type] = this.state);

        console.log(self.type);
      });
    }

    $(this.node).on('mouseenter', () => {
      console.log('hover');
      console.log(self.node);
      this.hover = true;
    });

    $(this.node).on('mouseleave', () => {
      console.log('leave');
      this.hover = false;
    });
  },
  methods: {
    toString: function () {
      var ret = '';

      for (var key in this.node) {
        if (typeof this.node[key] == 'object') {
          continue;
        }

        ret += key + ': ' + this.node[key] + '\n';
      }

      return ret;
    },
  },
  computed: {
    body: function () {
      var body = this.node.body;

      if (!body) {
        return [];
      }

      if (Array.isArray(body)) {
        return body;
      }

      return [body];
    },
    type: function () {
      var self = this;

      if (this.path) {
        return this.path;
      }

      if (this.node.type == 'VariableDeclarator') {
        return this.$parent.$parent.type;
      }

      var type = this.node.type;

      type = (window.NodeTypes[type] || type);

      if (this.$parent && this.$parent.$parent && this.$parent.$parent.node) {
        type = this.$parent.$parent.type + type;
      }

      while (window.pathIndex[type + self.index]) {
        self.index++;
      }

      type = type + self.index;

      window.pathIndex[type] = this;

      this.path = type;

      return type;
    }
  }
};
</script>
