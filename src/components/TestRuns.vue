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
      <panel title="Test Runs">
  
  <b-table :items="testruns" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
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
</template>

<script>
import testsService from '@/services/TestsService'
import Panel from '@/components/Panel'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'TestRuns',
  components: {
    Panel
  },
  data () {
    return {
      value: null,
      projects: ["Project1","Project2"],
      initiatives: ["Feature1","Feature2"],
      testruns: [],
      sortBy: "startdate",
      sortDesc: true,
      fields: [ 'epic', 'source', 'when', 'show_details' ]
    }
  },
  created () {
    this.getTestRuns()
  },
  methods: {
    getTestRuns: async function () {
      var r = await testsService.testruns()
      console.log(r)
      var table = r.map((tr)=>{ return {
         _rowVariant: tr.status ? 'success' : 'danger',
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
