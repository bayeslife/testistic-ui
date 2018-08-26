<template>
<v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md6>
        <v-card color="indigo" dark>
          <v-card-text>
            Register Tests
          </v-card-text>
          <v-card-text>
            Register Environments
          </v-card-text>
          <v-card-text>
            See Test Results
          </v-card-text>
        </v-card>
      </v-flex>
      <v-layout column justify-center align-center fil-height>
          <v-btn @click="navigateTo('gettingstarted')">Get Started</v-btn>
          <v-btn ><a href="http://github.com">Git Hub</a></v-btn>
          <v-btn @click="navigateTo('documentation')">Documentation</v-btn>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  name: 'Dashboard',
  components: {
    Panel
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
