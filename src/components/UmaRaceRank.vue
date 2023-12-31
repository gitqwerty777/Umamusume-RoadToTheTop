<template >
  <!-- <md-table
    v-model="raceDataLocal"
  >
    <md-table-toolbar>
      <h1 class="md-title">比賽結果</h1>
    </md-table-toolbar>

    <md-table-row
      slot="md-table-row"
      slot-scope="{ item }"
    >
      <md-table-cell md-label="horse">{{ item.horse }}</md-table-cell>
      <md-table-cell md-label="rider">{{ item.rider }}</md-table-cell>
      <md-table-cell md-label="racenumber">{{ item.racenumber }}</md-table-cell>
      <md-table-cell md-label="runtime">{{ item.runtime }}</md-table-cell>
      <md-table-cell md-label="rank">{{ item.rank }}</md-table-cell>
    </md-table-row>
  </md-table> -->
  <h1>asdasdasd</h1>

</template>
<script>
export default {
  name: "UmaRaceRank",
  props: {
    "raceData": Array
  },
  data() {
    return {
      raceDataLocal: this.raceData
    }
  }
}
</script>

<style>
</style>