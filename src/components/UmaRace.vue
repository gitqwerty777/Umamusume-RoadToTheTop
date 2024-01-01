<template>
  <v-card
    elevation="2"
    outlined
    shaped
    max-width="500px"
  >
  <v-carousel
    :show-arrows="false"
    show-arrows-on-hover
    hide-delimiter-background
    vertical-delimiters
    cycle
    :interval="5000"
    height="auto"
  >
    <v-carousel-item
      v-for="(item,i) in info.images"
      :key="i"
      :src="require('@/assets/screenshots/'+item+'.webp')"
      class="carousel-fit"
      link
      :href="require('@/assets/screenshots/'+item+'.webp')"
      target="_blank"
      eager
    >
        <v-card-title>
            <h1 class="textOnImage">{{ info.prizeName }} ({{ info.grade }})</h1>
            <h3 class="textOnImage"> {{ subTitle }} </h3>
        </v-card-title>
    </v-carousel-item>
  </v-carousel>
  <UmaRaceRank :raceData="raceResult"/>
  </v-card>
</template>

<script>
import UmaRaceRank from "@/components/UmaRaceRank.vue";

export default ({
    name: "UmaRace",
    components: {
        UmaRaceRank
    },
    props: {
        info: Object
    },
    data() {
        return {
            reveal: false,
        }
    },
    computed: {
        subTitle() {
            return this.info.place+" / " + this.info.floor +" / "+ this.info.distance + "M" +" / " + this.info.date
        },
        raceResult() {
            var horseKeyToName = {
                "admire-vega": "愛慕織姬",
                "narita-top-road": "成田路",
                "tm-opera-o": "好歌劇",
            }
            var result = this.info.result;
            result.forEach(function (item) {
                item.horse = horseKeyToName[item['horse-key']];
            });
            return result;
        }
    }
});
</script>

<style scoped>
.textOnImage {
  color: white;
  background-color: rgb(0, 0, 0, 0.4);
}
.carousel-fit {
}
</style>
