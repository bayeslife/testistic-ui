<template>
   <v-toolbar fixed dark class="indigo">
    <v-menu offset-y >
        <v-btn slot="activator" class="indigo" flat>
            <v-toolbar-side-icon></v-toolbar-side-icon>
        </v-btn>
        <v-list>
            <v-list-tile @click="navigateTo('testruns')">
                <v-list-tile-title>Test Runs</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="navigateTo('projects')">
                <v-list-tile-title>Projects</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
    <v-toolbar-title>
        <span class='home' @click="navigateTo('/')">
          Testistic
        </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn v-if="$store.state.isUserLoggedIn" icon>
        <v-icon @click="navigateTo('profile')">verified_user</v-icon>
      </v-btn>

     <v-btn v-if="$store.state.isUserLoggedIn" icon>
        <v-icon @click="navigateTo('logout')">exit_to_app</v-icon>
      </v-btn>

      <v-btn v-if="!$store.state.isUserLoggedIn" icon>
        <v-icon @click="navigateTo('login')">perm_identity</v-icon></v-icon>
      </v-btn>

    <v-menu offset-y >
        <v-btn slot="activator" class="indigo" flat>
            <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
            <v-list-tile @click="navigateTo('environments')">
                Environments
            </v-list-tile>
            <v-list-tile @click="navigateTo('testsources')">
                Test Sources
            </v-list-tile>
        </v-list>
    </v-menu>

      <v-btn icon>
        <v-icon @click="navigateTo('about')">info</v-icon>
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
 data () {
    return {
    }
 },
 methods: {
     navigateTo(route){
         this.$router.push(route)
     }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    cursor: pointer
}
</style>
