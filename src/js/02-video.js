import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

player.on(
  'timeupdate',
  throttle(setCurrentTimeVideoplayerToLocalStorage, 1000)
);

function setCurrentTimeVideoplayerToLocalStorage(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // console.log(localStorage.getItem("videoplayer-current-time"));
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
