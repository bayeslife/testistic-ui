<template>
<div>
    <v-layout column>
        <v-flex xs12>
          <statistics :title="`Statistics ${project} ${epic}`"/>
        </v-flex>
        <v-flex xs12>
          <testrunresults :title="`Test Runs ${project} ${epic}`">
          </testrunresults>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
import testsService from '@/services/TestsService'
import moment from 'moment'
import Testrunresults from '@/components/Testrunresults'
import Statistics from '@/components/Statistics'

export default {
  name: 'TestRunsProject',
  components: {
    Testrunresults,
    Statistics
  },
  data () {
    return {
      epic: '',
      project: ''
    }
  },
  created () {
    this.project = this.$route.params.project
    this.epic = this.$route.params.epic
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
