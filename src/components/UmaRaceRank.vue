<template>
  <div>
    <h3>比賽結果</h3>
    <v-data-table
      :headers="header"
      :items="raceDataLocal"
      :sort-by="['rank']"
      hide-default-footer
    >
    <template v-slot:item="i">
      <!-- ref: https://codepen.io/ianteoyy-the-flexboxer/pen/JjOxjMQ -->
      <tr>
        <td align="left">
          {{i.item.horse}} <v-img contain :src="getIcon(i.item)" max-width="3em"/>
        </td>
        <td align="left">{{i.item.rider}}</td>
        <td align="right">{{i.item.racenumber}}</td>
        <td>{{i.item.runtime}}</td>
        <td :class="{
          'gold-prize': i.item.rank == 1,
          'silver-prize': i.item.rank == 2,
          'brown-prize': i.item.rank == 3,
          }">{{i.item.rank}}</td>
      </tr>
    </template>
  </v-data-table>
  </div>
</template>

<script>
// TODO: 前三不同顏色

export default ({
  name: "UmaRaceRank",
  props: {
    "raceData": Array
  },
  computed: {
    raceDataLocal: function () {
      return this.raceData;
    }
  },
  methods: {
    getIcon: function (item) {
      console.log(item);
      return require("@/assets/icon/" + item['horse-key'] + ".png");
    }
  },
  data() {
    return {
      header: 
        [
          {
            text: '馬名',
            align: 'center',
            sortable: false,
            value: 'horse',
          },
          {
            text: '騎師',
            align: 'center',
            sortable: false,
            value: 'rider',
          },
          {
            text: '比賽號碼',
            align: 'center',
            sortable: false,
            value: 'racenumber',
          },
          {
            text: '用時',
            align: 'center',
            sortable: false,
            value: 'runtime',
          },
          {
            text: '排名',
            align: 'center',
            sortable: false,
            value: 'rank',
          },
        ],
    }
  }
});
</script>

<style>
</style>