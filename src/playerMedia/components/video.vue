<template>
  <div :id="props.id"></div>
</template>
<script setup>
import { onMounted, defineProps } from 'vue'
import Player from 'xgplayer'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  const player = new Player({
    id: props.id,
    // https://media.w3.org/2010/05/sintel/trailer.mp4
    url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
    height: '100%',
    width: '100%',
    // autoplay: true,
    // autoplayMuted: true, // 自动播放静音，设置自动播放参数必要参数
    playbackRate: [0.5, 0.75, 1, 1.5, 2], // 倍速
    videoInit: true,
    poster: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
    // pip: true, // 画中画
    definitionActive: 'hover',
    thumbnail: {
      pic_num: 44,
      width: 160,
      height: 90,
      col: 10,
      row: 10,
      urls: ['//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-thumbnail.jpg']
    }, // 鼠标指向缩略图
    playsinline: true,
    danmu: {
      comments: [
        {
          duration: 15000,
          id: '1',
          start: 3000,
          txt: '长弹幕长弹幕长弹幕长弹幕长弹幕',
          style: {
            // 弹幕自定义样式
            color: '#ff9500',
            fontSize: '20px',
            border: 'solid 1px #ff9500',
            borderRadius: '50px',
            padding: '5px 11px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }
        }
      ],
      area: {
        start: 0,
        end: 1
      }
    }

  })

  // 默认选中第一个参数超清
  player.emit('resourceReady', [{ name: '超清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4' }, { name: '高清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4' }, { name: '标清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4' }])
})

</script>
