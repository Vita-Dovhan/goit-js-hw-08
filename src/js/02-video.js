import Player from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function () {
  player.getCurrentTime().then(function (sec) {
    console.log("time:", sec)
    localStorage.setItem("videoplayer-current-time", JSON.stringify(sec));
  });
}, 1000),
)

const timeStart = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0
console.log(timeStart);
player.setCurrentTime(timeStart)
