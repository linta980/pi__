
<template>
  <nav>
      <v-toolbar flat app>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="grey--text font-weight-bold headline">Gale</span>
        <span class="text-capitalize grey--text headline">Pi</span>
        <v-spacer></v-spacer>
        <v-layout row wrap>
          <v-flex md4 xs6 class="grey--text font-weight-bold headline pt-2">Pi panel</v-flex>
          <v-spacer></v-spacer>
          <v-flex md3 xs6>
            <v-btn class="grey--text font-weight-bold title" flat>
              <v-icon>exit_to_app</v-icon>
              <span class="ml-2">Sign out</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-toolbar>

    <!-- @click="drawer=!drawer" -->
    <v-navigation-drawer app v-model="drawer" class="blue lighten-1" fixed>
      <v-list>
        <v-list-tile-title class="white--text title text-lg-center text-xs-center">Raspberry</v-list-tile-title>
      </v-list>
      <!-- <v-divider></v-divider> -->
      <v-list >
        <v-list-tile v-for="item in data" :key="item.page" router :to="item.route" >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action >
          <v-list-tile-action class="text-uppercase">{{item.page}}</v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      data: [{ page: "main", icon: "build", route: "/main" }]
    };
  },
  methods: {
    openNavigation() {
      this.drawer != this.drawer;
    }
  }
};
</script>

<style>
</style>
