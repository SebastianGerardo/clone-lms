import React from 'react'

import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const plyrProps = {
  source: {
    type: "video",
    title: "View From A Blue Moon Trailer",
    sources: [
      {
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
        type: "video/mp4",
        size: 720,
      },
      {
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
        type: "video/mp4",
        size: 1080,
      },
    ],
    poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
    previewThumbnails: {
      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
      // amount: 10,
    },
    tracks: [
      {
        kind: "captions",
        label: "English",
        srclang: "en",
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
        default: true,
      },
      {
        kind: "captions",
        label: "French",
        srclang: "fr",
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
      },
    ],
  },
  options: {
    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
    autoplay: false,
    loop: {
      active: false,
    },
    keyboard: {
      focused: true,
      global: true,
    },
    tooltips: {
      controls: true,
      seek: true,
    },
    captions: {
      active: true,
      language: "auto",
      update: true,
    },
    fullscreen: {
      enabled: true,
      fallback: true,
      iosNative: false,
    },
    storage: {
      enabled: true,
      key: "plyr",
    },
    settings: ["captions", "quality", "speed"],
    speed: {
      selected: 1,
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    },
    quality: {
      default: 576,
      options: [144, 240, 360, 480, 576, 720, 1080],
      forced: true,
      onChange: (e) => console.log(e),
    },
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
    },
  }
}

const VideoPlyr = () => {
  return (
    <div>
        <Plyr {...plyrProps} />
    </div>
  )
}

export default VideoPlyr
