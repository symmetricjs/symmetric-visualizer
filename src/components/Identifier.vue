<template>
  <span class="identifier">
    {{ node.name }}
  </span>
</template>

<script>
export default {
  name: 'Identifier',
  extends: 'Node',
  components: {},
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