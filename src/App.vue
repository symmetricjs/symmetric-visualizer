<template>
  <div class="ast-root" id="app">
    <Node v-if="root" :node="root"></Node>
  </div>
</template>

<script>
import Vue from 'vue';
import Node from './components/Node'


Vue.component('Node', Node);

window.pathIndex = {};

export default {
  name: 'App',
  components: {
    Node
  },
  data () {
    return {
      root: null,
      state: null,
    }
  },
  mounted: function () {
    var self = this;
    console.log('mounted');

    var io = require('socket.io-client'),
        socket = io.connect('http://localhost:3032');

    socket.on('connect', function () {
      console.log('connected');
    });

    socket.on('ast', function (ast) {
      console.log(ast);
      Vue.set(self, 'root', ast);
    });

    socket.on('state', function (state) {
      console.log('got state', state);

      // Vue.set(window, 'pathIndex', state);

      for (var key in state) {
        if (window.pathIndex[key]) {
          console.log('set', key);
          Vue.set(window.pathIndex[key], 'state', state[key]);
        }
      }
    });
  }
};
</script>

<style lang="scss">
.ast-root {
  // white-space: nowrap;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: auto;

  .node {
    // position: relative;
    display: inline-block;
    float: left;
    font-family: monospace;
    // overflow: auto;

    > .state {
      position: absolute;
      background-color: white;
      padding: 1em;
      right: 0px;
      display: none;
    }

    &:hover {
      > .state {
        display: block;
      }
    }
  }

  .literal {
    color: #F00;
  }

  .identifier {
    color: #087;
  }

  .property {
    color: #780;
  }

  // .expression-statement .expression-statement {
  //   display: inline-block;
  // }
}
</style>
