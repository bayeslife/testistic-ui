<template>
    <panel  :title="title">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Short Term Test Success:</b></b-col>
            <b-col>{{ this.statistics[0].averageOver10 }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Mid Term Test Success:</b></b-col>
            <b-col>{{ this.statistics[0].averageOver100 }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Longer Term Test Success:</b></b-col>
            <b-col>{{ this.statistics[0].averageOver1000 }}</b-col>
          </b-row>
        </b-card>
      </panel>
</template>

<script>
import testsService from '@/services/TestsService'
import Panel from '@/components/Panel'

export default {
  name: 'Statistics',
  props: [
    'title'
  ],
  components: {
    Panel
  },
  data () {
    return {
      epic: '',
      project: '',
      statistics : [{
        averageOver10: 1,
        averageOver100: 1,
        averageOver1000: 1
      }]
    }
  },
  watch: {
    '$route.params.epic': function (epic) {
      this.init()
    },
    '$route.params.project': function (project) {
      this.init()
    }
  },
  created () {
    this.init()
  },
  methods: {
    init(){
      this.getStatistics(this.$route.params.project,this.$route.params.epic)
    },
    getStatistics: async function (project,epic) {
      this.statistics = await testsService.statistics(project,epic)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
