<template>
<v-dialog
    v-model="dialog"
    width="600px"
>
    <template v-slot:activator="{ on, attrs }">
    <v-btn
        v-bind="attrs"
        v-on="on"
        tile
    >
        <Icon icon="mdi:tooltip-question" />
    </v-btn>
    </template>
    <v-card>
    <v-card-title>
        <span class="text-h5">關於</span>
    </v-card-title>
    <v-card-text>
        <h3>資料來源</h3>
        <a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%89%E3%83%9E%E3%82%A4%E3%83%A4%E3%83%99%E3%82%AC">Wikipedia:アドマイヤベガ</a>
        <br><a href="https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%AA%E3%82%BF%E3%83%88%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89">Wikipedia:ナリタトップロード</a>
        <br><a href="https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%A4%E3%82%A8%E3%83%A0%E3%82%AA%E3%83%9A%E3%83%A9%E3%82%AA%E3%83%BC">Wikipedia:テイエムオペラオー</a>
        <br><a href="https://www.youtube.com/watch?v=km0-E99w8f0">Youtube:アニメ『ウマ娘 プリティーダービー ROAD TO THE TOP』主題歌「Glorious Moment！」ノンテロップ映像 </a>
        <br>アニメ『ウマ娘 プリティーダービー ROAD TO THE TOP』
        <v-spacer></v-spacer><br>
        <h3>聲明</h3>
        I do not own the rights to these Musics/Songs/Images.<br>
        All rights belong to the owner.<br>
        i.e., Cygames Inc., スタジオKAI
        <v-spacer></v-spacer><br>
        
        <h3>關於此網頁</h3>
        Any Improvement(Issue/Pull Request) is welcomed.
        <br>我很盡力排版了…
        <br><v-btn color="primary" href="https://github.com/gitqwerty777/Umamusume-RoadToTheTop">Github Repository</v-btn>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        color="green darken-1"
        text
        @click="dialog = false"
        >
        Close
        </v-btn>
    </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>

import { Icon } from '@iconify/vue2';

export default {
    name: 'AboutRTTT',
    components: {
        Icon
    },
    data() {
        return {
            dialog: false,
        }
    },
}
</script>