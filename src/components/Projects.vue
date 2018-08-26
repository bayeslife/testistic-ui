<template>
  <div>
    
    
      <v-layout>
        <v-flex xs4>
          <panel title="New Project">
          <v-text-field label="Name" v-model="name"></v-text-field>
          <v-text-field label="URL" v-model="url"></v-text-field>
          <v-btn @click="create">
            Create
          </v-btn>
          </panel>
        </v-flex>
        <v-flex xs8>
          <panel title="Projects" class="ml-2">
            <div v-for="project in projects" :key="project.name">
          {{project.name}} -
          {{project.url}}
        </div>
          </panel>
        </v-flex>
      </v-layout>
    
  </div>
</template>

<script>
import testsService from '@/services/TestsService'
import Panel from '@/components/Panel'
export default {
  name: 'Projects',
  components:{
    Panel
  },
  data () {
    return {
      name: null,
      url: null,
      projects: null
    }
  },
  created () {
    this.getProjects()
  },
  methods: {
    async create(){
        var newproject = await testsService.createProject({
          name: this.name,
          url: this.url
        })
        this.projects.push(newproject)
    },
    getProjects: async function () {
      var r = await testsService.projects()
      this.projects = r
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
