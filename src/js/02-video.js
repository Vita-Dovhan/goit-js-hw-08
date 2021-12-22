import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(videoStart, 1000))
player.getCurrentTime().then((seconds) => {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
});

const timeStart = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0
console.log(timeStart);
player.setCurrentItem(timeStart)
function videoStart(timeStart) {
  console.log(timeStart)
}
