<template>
  <md-card>
    <md-card-media>
      <img
        src="https://tospo-keiba.jp/images/articles/contents/shares/0002022/09/0907/%E4%B8%AD%E5%B1%B1%E7%AB%B6%E9%A6%AC%E5%A0%B4%E2%98%85.jpg"
        alt="People"
      >
    </md-card-media>

    <md-card-header>
      <div class="md-title">東京/草2400/GI/東京優駿</div>
      <div class="md-subhead">6/6/1999</div>
    </md-card-header>

    <!-- column:Date place floor distance grade prizeName 天氣 -->
    <UmaRaceRank :raceData.sync="race1"/>

    <md-card-expand>
      <md-card-actions>
        <md-card-expand-trigger>
          <md-button class="md-icon-button">
            <md-icon>keyboard_arrow_down</md-icon>結果
          </md-button>
        </md-card-expand-trigger>
      </md-card-actions>
      <md-card-expand-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>
</template>

<script>
import UmaRaceRank from "./UmaRaceRank.vue";

export default ({
    name: "UmaRace",
    comments: {
        UmaRaceRank
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
});
</script>
