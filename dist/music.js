const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    
    audio: [
    {
        name: 'symphony',
        artist: 'Clean Bandit / Zara Larsson',
        url: 'http://music.163.com/song/media/outer/url?id=466126510.mp3',
        cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=1befae09be8f8c54e3d3c22902124ac8/060828381f30e9240c27f4d646086e061c95f752.jpg',
      },
     {
        name: '第五交响曲:第一乐章',
        artist: '贝多芬',
        url: 'http://music.163.com/song/media/outer/url?id=435552796.mp3',
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=f36c2d4623381f309e198aaf913a2b35/ca1349540923dd543b0db816da09b3de9c824855.jpg',
      },
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