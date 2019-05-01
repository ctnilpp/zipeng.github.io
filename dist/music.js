const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '约束の花',
        artist: '川井憲次',
        url: 'http://music.163.com/song/media/outer/url?id=536570735.mp3',
        cover: 'http://bmob-cdn-25196.b0.upaiyun.com/2019/04/26/fef62928405396d680ebde5341552485.jpg',
      },
      {
        name: '生きていたんだよな',
        artist: 'あいみょん',
        url: 'http://www.ytmp3.cn/down/54305.mp3',
        cover: 'http://bmob-cdn-25196.b0.upaiyun.com/2019/04/25/5d324c1c4037adf480ec45b5351dc306.jpg',
      }
    ]
});