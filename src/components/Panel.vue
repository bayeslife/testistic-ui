<template>
    <div class="white elevation-4">
        <v-toolbar flat dense dark class="indigo">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="p1-4 pr-4 pt-2 pb-2"  >
          <slot>No content defined</slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
