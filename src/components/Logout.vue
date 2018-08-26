<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-4">
        <v-toolbar flat dense dark class="indigo">
          <v-toolbar-title>Please confirm</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="p1-4 pr-4 pt-2 pb-2"  >
          <v-btn @click="logout">
            Log Out
          </v-btn>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Logout',
  data () {
    return {
    }
  },
  methods: {
    async logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
