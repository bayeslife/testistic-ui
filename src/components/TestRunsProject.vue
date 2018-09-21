<template> 
<div>
    <v-layout>
        <v-flex xs12>
          <panel :title="`${$route.params.project}`">
           <b-table :items="testruns" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
            <template slot="project" slot-scope="data">
              <a :href="`#/projects/${data.item.project}`" >{{data.item.project}} </a>
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
        </v-flex>
    </v-layout> 
</div>
</template>

<script>
import testsService from '@/services/TestsService'
import moment from 'moment'
import Panel from '@/components/Panel'

export default {
  name: 'TestRunsProject',
  components: {
    Panel
  },
  data () {
    return {
      project: "",
      sortBy: 'startdate',
      sortDesc: true,
      testruns: [],
      fields: [ 'project', 'epic', 'source', 'when', 'show_details' ]
    }
  },
  created () {
    this.getTestRuns()
    this.project = this.$route.params.project
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
