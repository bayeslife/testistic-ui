<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-4">
        <v-toolbar flat dense dark class="indigo">
          <v-toolbar-title>Authenticate</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="p1-4 pr-4 pt-2 pb-2"  >

          <v-text-field label="Email" v-model="email"></v-text-field>
        <v-text-field label="Password" v-model="password"></v-text-field>
          <v-btn @click="login">
            Log In
          </v-btn>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authService from '@/services/AuthenticationService'


export default {
    name: 'Login',
    data () {
        return {
            email: 'email',
            password: 'password'
        }
    },
    methods: {
        async login(){
            var credentials = await authService.signin(this.email,this.password)
            this.$store.dispatch('setToken',credentials.token)
            this.$store.dispatch('setUser', credentials.user)
             this.$router.push("/")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
