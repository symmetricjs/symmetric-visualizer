<template>
  <div class="node program">
    <Node v-for="(n, i) in node.body" :key="i" :node="n"></Node>
  </div>
</template>

<script>
export default {
  name: 'Program',
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