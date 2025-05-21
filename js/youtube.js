var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;
// onYouTubeIframeAPIReady() 함수 이름은 변경하면 안된다.
function onYouTubeIframeAPIReady() {
  // player = new YT.Player('player', {
  // player라는 id 속성값이 지정된 요소를 찾는다. 앞에 #을 사용하지 않는다.
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상의 아이디
    playerVars: {
      'playsinline': 1,
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      // 유튜브 영상 주소: https://www.youtube.com/watch?v=An6LvWQuj_8
      playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 아이디 목록
    },
    events: {
      onReady: function (event) { // 유튜브 영상 재생 준비가 되면 실행할 기능을 지정한다.
        event.target.mute() // 음소거
      },
    }
  });
}