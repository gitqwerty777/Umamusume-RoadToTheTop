<template>
  <v-app ref="vapp">
    <!-- <audio id="bgm" src="@/assets/bgm.mp3" loop autoplay></audio> -->
    <video id="opening" src="@/assets/video/opening-compressed.mp4" loop autoplay background></video>
    <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="road-timeline">
        <v-row align="center" justify="center">
        <v-img
        src="@/assets/rttt-logo.png"
        max-width="6em"
        class="inline"
        />
      <h1 class="middle">
        Road To The Top
        <v-btn tile @click="toggleFullscreen()">
          <Icon icon="material-symbols:fullscreen-rounded" />
        </v-btn>
        <v-btn tile @click="toggleMusic()">
          <Icon :icon="soundIconName" />
        </v-btn>
        <v-btn tile @click="toggleVideo()">
          <Icon :icon="videoIconName" />
        </v-btn>
        <v-btn tile @click="showAbout()">
          <Icon icon="mdi:tooltip-question" />
        </v-btn>
      </h1>
      </v-row>
      <!-- TODO: put at middle -->
      <!-- TODO: AUTO FULLSCREEN -->
      <v-timeline class="v-row">
        <v-timeline-item
          v-for="race in reversedRaceData"
          :key="race.date"
          :color="rankColor(race)"
          large
        >
        <um-button
          type="green"
          @click="choosedRace=race"
          :size="18"
        >
          {{ race["date"] }} <br> {{ race["prizeName"] }} ({{ race['grade'] }})
        </um-button>
          <template #icon>
            <Icon :icon="rankIcon(race)" />
          </template>
        </v-timeline-item>
      </v-timeline>
    </v-col>
    <v-col>
      <UmaRace :info="choosedRace" class="v-row road-race"/>
    </v-col> 
    </v-row>
  </v-container>
  <!-- <um-tabs>
    <um-tab-pane label="愛慕織姬">
    </um-tab-pane>
    <um-tab-pane label="成田路">
    </um-tab-pane>
    <um-tab-pane label="好歌劇">
    </um-tab-pane>
    </um-tabs> -->
  </v-app>
</template>

<script>
import UmaRace from "./components/UmaRace.vue"
import raceData from "./assets/race.json"
import { Icon } from '@iconify/vue2';

export default {
  name: 'App',
  components: {
    UmaRace,
    Icon
  },
  mounted() {
    // this.$refs.vapp.requestFullscreen();
    // document.documentElement.requestFullscreen();
  },
  methods: {
    showAbout() {
      alert("sdsf");
    },
    toggleMusic() {
      var video = document.getElementById("opening");
      video.muted = !video.muted;
      this.muted = video.muted;
    },
    toggleVideo() {
      var video = document.getElementById("opening");
      if (video.paused) {
        video.play();
        video.hidden = false;
        this.playing = true;
      } else {
        video.pause();
        video.hidden = true;
        this.playing = false;
      }
    },
    toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
    rankIcon: function (race) {
      //很白痴的寫法和key，不過只有5場= =
      var iconName = "tabler:number-" + race['naritaRank'];
      if (race.prizeName == "菊花賞") {
        iconName = "mdi:trophy";
      }
      return iconName;
    },
    rankColor: function (race) {
      switch (race["naritaRank"]) {
        case "1":
          return "#FFD971";
        case "2":
          return "#CAD3D7";
        case "3":
          return "#BB891E";
        default:
          return "#CAD3D7";
      }
    },
  },
  data() {
    return {
      raceData: raceData,
      choosedRace: raceData[0],
      muted: false,
      playing: true,
    }
  },
  computed: {
    soundIconName: function () {
      if (this.muted) {
        return "ic:baseline-volume-off";
      } else {
        return "ic:twotone-volume-up";
      }
    },
    videoIconName: function () {
      if (this.playing) {
        return "mdi:video-box";
      } else {
        return "mdi:video-box-off";
      }
    },
    reversedRaceData: function () {
      return this.raceData.slice().reverse()
    }
  }
}
</script>

<style>
#app {
  font-family: "更紗黑體 UI TC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url('./assets/rttt.png');
  background-repeat: no-repeat;
  background-size: cover;
}

#opening {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.road-timeline {
}
.road-race {
}
.middle {
  align-content: center;
}
body {
}

.gold-prize {
  background-color: #FFD971;
}
.silver-prize {
  background-color: #CAD3D7;
}
.brown-prize {
  background-color: #BB891E;
}
.inline {
  display: inline-block;
}
</style>
