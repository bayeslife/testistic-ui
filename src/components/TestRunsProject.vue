<template>
<div>User {{ $route.params.project }}</div>
</template>

<script>
import testsService from '@/services/TestsService'
import moment from 'moment'

export default {
  name: 'TestRunsProject',
  components: {
  },
  data () {
     
    return {
    }
  },
  created () {
   
    this.getTestRuns()
  },
  methods: {
    getTestRuns: async function () {
      var r = await testsService.projectTestruns(this.$route.params.project)
      var table = r.map((tr) => {
        return {
          project: tr.project,
          epic: tr.epic,
          source: tr.source,
          target: tr.target,
          description: tr.description,
          startdate: tr.startdate,
          when: moment(tr.startdate).fromNow()
        }
      })
      this.testruns = table
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
