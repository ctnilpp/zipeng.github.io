const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    
    audio: [
     {
        name: '约束の花',
        artist: '川井憲次',
        url: 'https://s128.xiami.net/485/57485/2103560530/1802140862_1519617958072.mp3?ccode=xiami__&expire=86400&duration=193&psid=6831fe4b8e8868b2bf979e0bda06ca3a&ups_client_netip=null&ups_ts=1585720249&ups_userid=0&utid=&vid=1802140862&fn=1802140862_1519617958072.mp3&vkey=Bb2922c795fbb7036aa9c2f1d72e2b6ab',
        cover: 'https://pic.xiami.net/images/album/img66/450266/4502661519450266.jpg?x-oss-process=image/resize,limit_0,m_fill,s_144/quality,q_80/format,jpg',
      },
     {
        name: '孤独な巡礼',
        artist: '川井憲次',
        url: 'http://music.163.com/song/media/outer/url?id=448065.mp3',
        cover: 'http://p1.music.126.net/U0Tf2ESHBauv2F9t1PgEZA==/109951163339713541.jpg?param=130y130',
      },
      {
        name: 'symphony',
        artist: 'Clean Bandit / Zara Larsson',
        url: 'http://music.163.com/song/media/outer/url?id=466126510.mp3',
        cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=1befae09be8f8c54e3d3c22902124ac8/060828381f30e9240c27f4d646086e061c95f752.jpg',
      },
    ]
});