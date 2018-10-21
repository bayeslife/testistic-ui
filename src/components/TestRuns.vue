<template>
  <v-layout column>
    <v-flex d-flex xs12 sm6 md6>
        <v-card>
            <v-container fluid grid-list-xl>
              <v-layout align-center wrap>
                <v-flex xs12 sm6>
                  <v-select v-model="value" :items="projects" attach chips label="Projects" multiple />
                </v-flex>
              </v-layout>
            </v-container>
        </v-card>
        <v-card>
            <v-container fluid grid-list-xl>
              <v-layout align-center wrap>
                <v-flex xs12 sm6>
                  <v-select v-model="value" :items="initiatives"  attach chips label="Features" multiple />
                </v-flex>
              </v-layout>
            </v-container>
        </v-card>
    </v-flex>
    <v-flex d-flex xs12 sm6 md6>
        <statistics :title="`Statistics - All`"/>
    </v-flex>
    <v-flex d-flex xs12 sm6 md6>
      <testrunresults :title="`Test Runs - All`">
      </testrunresults>
    </v-flex>
  </v-layout>
</template>

<script>
import Statistics from '@/components/Statistics'
import Testrunresults from '@/components/Testrunresults'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'TestRuns',
  components: {
    Testrunresults,
    Statistics
  },
  data () {
    return {
      value: null,
      projects: ['Project1', 'Project2'],
      initiatives: ['Feature1', 'Feature2']
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
