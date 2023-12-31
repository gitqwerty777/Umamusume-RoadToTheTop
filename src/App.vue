<template>
  <v-app>
    <v-card
    elevation="2"
    outlined
    shaped
    ></v-card>
    <h1>Umamusume</h1>
    <um-button>hello</um-button>
    <um-tabs v-model="name">
      <um-tab-pane label="bar">
      </um-tab-pane>
      <um-tab-pane label="foo">
        <UmaRace />
      </um-tab-pane>
      <um-tab-pane label="baz">
      </um-tab-pane>
      </um-tabs>
  </v-app>
</template>

<script>
  import UmaRace from "./components/UmaRace.vue"

export default {
  name: 'App',
  components: {
    UmaRace
  },
  data() {
    return {
      race1: [
          {
              horse: "サイレンススズカ",
              rider: "武豊",
              racenumber: "1",
              runtime: "2:28.1",
              rank: "1"
          },
          {
              horse: "サイレンススズカ",
              rider: "武豊",
              racenumber: "1",
              runtime: "2:28.1",
              rank: "2"
          },
          {
              horse: "サイレンススズカ",
              rider: "武豊",
              racenumber: "1",
              runtime: "2:28.1",
              rank: "3"
          }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
