<template>
  <span class="literal">
    {{ JSON.stringify(node.value) }}
  </span>
</template>

<script>
export default {
  name: 'Literal',
  components: {},
  props: ['node', 'state'],
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