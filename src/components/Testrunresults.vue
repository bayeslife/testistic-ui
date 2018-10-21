<template>
    <panel :title="title">
      <b-table :items="testruns" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
          <template slot="project" slot-scope="data">
            <a :href="`#/projects/${data.item.project}/all`" >{{data.item.project}} </a>
          </template>
          <template slot="epic" slot-scope="data">
            <a :href="`#/projects/${data.item.project}/${data.item.epic}`" >{{data.item.epic}} </a>
          </template>
          <template slot="show_details" slot-scope="row">
            <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>

          <template slot="row-details" slot-scope="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Source:</b></b-col>
                <b-col>{{ row.item.source }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Description:</b></b-col>
                <b-col>{{ row.item.description }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Target:</b></b-col>
                <b-col>{{ row.item.target }}</b-col>
              </b-row>
            </b-card>
          </template>
        </b-table>
    </panel>
</template>

<script>
import testsService from '@/services/TestsService'
import Panel from '@/components/Panel'
import moment from 'moment'

export default {
  name: 'TestRunResults',
  props: [
    'title'
  ],
  components: {
    Panel
  },
  data () {
    return {
      value: null,
      testruns: [],
      sortBy: 'startdate',
      sortDesc: true,
      fields: [ 'project', 'epic', 'source', 'when', 'show_details' ]
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
   init() {
    this.getTestRuns(this.$route.params.project,this.$route.params.epic) 
   },
   getTestRuns: async function (project,epic) {
     var r = await testsService.testruns(project,epic)
     var table = r.map((tr) => {
        return {
          _rowVariant: tr.status ? 'success' : 'danger',
          href: '#/prj',
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
