import '@/assets/boot/css/bootstrap.css'
// import '@/assets/boot/css/bootstrap-theme.css'
import '@/assets/css/reset.scss'
import '@/assets/css/main.scss'
import '@/assets/js/dataAux'

import sha256 from "crypto-js/sha256"
import {markdown} from 'markdown'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

window.markdown = markdown.toHTML
window.sha256 = sha256
window.root = window.vm = new Vue({
  el: '#app',
  data() {
    const root = this.$root
    const r = root.router
    const ua = navigator.userAgent
    const isLocal = [':300', ':808', 'localhost'].some(v => location.origin.indexOf(v) > -1)
    const requestUrl = (isLocal ? 'http://192.168.1.107' : '') + '/bobo/interface.php'

    const loading = false
    const local = isLocal
    const windows = ua.indexOf('Windows NT') > -1
    const android = ua.indexOf('Linux; Android') > -1
    const ios = ua.indexOf('like Mac OS X') > -1
    const iPhone = ua.indexOf('iPhone; CPU iPhone OS') > -1
    const iPad = ua.indexOf('iPad; CPU OS') > -1
    const mobile = ios || android
    const pc = !mobile

    return {
      ...App.rootData.call(root),
      requestUrl,
      is: {
        loading,
        local,
        windows,
        android,
        ios,
        iPhone,
        iPad,
        mobile,
        pc,
      },
      router: {
        coms: []
      },
      user: {
        list: [],
        mode: 'login',
        isShowPanel: 0,
        id: '',
        name: '',
        password: '',
        description: '',
        email: '',
        level: 0,
        time: 0,
      },
      article: {
        isAdd: true,
        list: [],
        map: {},
      },
      editor: {
        isShow: 1,
        title: isLocal ? '库克宣布下一步重点，全球苹果迷都傻眼了，股价暴跌' : '',
        tags: '库克 苹果 股价',
        description: isLocal ? `*库克宣布下一步重点，全球苹果迷都傻眼了，股价暴跌*

2018年第三季度全球智能手机总共出货3.8亿部，其中排名前十的公司瓜分79%的市场份额；排在第一位的依然是三星，总出货量达7230万部；第二名华为，总出货量5200万部；第三名苹果，总出货量4690万部。这已经是华为连续第二个季度超越苹果排在第二。

苹果在中国发售今年最新款iPhone手机的现场再没有往日的火爆。相对应的是华为推出华为Mate20 系列国人的疯抢，8秒过亿。

苹果CEO库克宣布以后将不再公布iPhone或其他产品的销售数量。相反，重点将专注于收入、利润率和销售成本。全球苹果迷都傻眼了，

华尔街分析师丹尼尔•艾夫斯称此举是一个“令人惊掉下巴的举动”，苹果开始有需要隐瞒的数据了。

苹果第四财季共售出4688.9万部iPhone，同比基本持平，低于市场平均预计；共卖出969.9万台iPad，同比降低6%；共卖出529.9万台Mac电脑，同比跌了2%。

市场信心动摇，在当日盘中大跌7%，700亿美元（近5000亿元人民币）瞬间蒸发！
        ` : '',
      },
    }
  },
  methods: {
    ...require('@/assets/js/methods').default,
    ...App.rootMethods,
    headImg(idx) {
      const arr = ["http://p0.so.qhmsg.com/bdr/_240_/t01ea0e43b6d4754d45.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01fc6cf7824121f748.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01330fcea874eb596a.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01fe4b9cd7eb19bc15.jpg","http://p2.so.qhmsg.com/bdr/_240_/t013a57b560b4383747.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0155e9f496c58884ef.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0137faaf52dcb8038c.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t018a19d596e53bf01a.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01cc8598a96247eb07.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01656f08b5a9b58b83.png","http://p1.so.qhimgs1.com/bdr/_240_/t0135dbe0f24a95d35d.jpg","http://p0.so.qhmsg.com/bdr/_240_/t011c3b592f410ff71f.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01862e86a2a55a6b4e.jpg","http://p3.so.qhmsg.com/bdr/_240_/t019897d185222b6438.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01ec0ea0c9f77a906d.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0174ded9cecdd481e0.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01b425bf2a10bb708d.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01f0dd2fd31fafda39.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01b258b37317fdb8ed.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01b09717465e553285.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01288f5f3307b3ef57.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0114cca0ba5d220bbb.jpg","http://p4.so.qhmsg.com/bdr/_240_/t015d9e073896f214a9.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01618dae5f0b970949.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t018ffd1044a5f5e26c.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01b21824edd0924b3f.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01b132d0a697d5a1d8.jpg","http://p3.so.qhmsg.com/bdr/_240_/t0161c467ebea548658.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01ec89b9ac81e1f8e4.jpg","http://p1.so.qhmsg.com/bdr/_240_/t0165fcba3c64c5d8d6.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01529e9fed58515c60.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t015792b613ff3edafc.jpg","http://p3.so.qhmsg.com/bdr/_240_/t0120ce902ee6d75758.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0102e95216643212aa.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01d31d1d2bd1064c09.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0107c676e749f8a8d4.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0104a9c05e9108a61f.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t017812b71b1bfc253a.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01210ddb4dc4872138.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01b836095d6255a1e0.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01945205fe379a926d.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01c1510294cb6b5e06.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01963528a088915386.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t014a2e5c5a656d9323.jpg","http://p4.so.qhmsg.com/bdr/_240_/t0174ad1d051882c339.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t019a934b009c9a5c3c.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01cffa91533877bf36.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t016fb5a2cec2f3b74c.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01e4f7ccfb59e786cd.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t017884b86704494b11.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01aa25fe6abb5bb0a5.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01bac611df7100a332.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01ea187a3a89f7f959.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01078d95040c63288f.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t0172d2a4473a6671bd.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01122019dc373be204.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01d9f954d69bf3d687.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t015c7a962019f8bb6a.jpg","http://p0.so.qhmsg.com/bdr/_240_/t010c8663eaa3e422cf.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t013e942a8582df479c.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01b7b4d641d904ae6c.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t012f874b0719bda16e.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t011027b85f7268a2da.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01481d5c440f022820.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01d0dbe6fa2c444785.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01940046083859f94c.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0158e2338ae001418c.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01849f8c22cc94717f.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t014e823320a438ffd0.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01f5f64e92b080848f.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t017101d6778b750bcc.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t011be17d1dcae665ce.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0122a3a5857cbf19e2.jpg","http://p2.so.qhmsg.com/bdr/_240_/t0173b7e78a41538e27.jpg","http://p2.so.qhmsg.com/bdr/_240_/t010714d5207227f437.jpg","http://p4.so.qhmsg.com/bdr/_240_/t014365232e6bba30b9.jpg","http://p0.so.qhmsg.com/bdr/_240_/t010086c70f979abc9f.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01989bf1cdbfa0e445.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01d7fee50f176045bc.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0108a6d94c7aa3feba.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t012849cbce1a55138e.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01714d5b6494d138c3.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t0130a8defbfa9ea1c3.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0137a3471296c12cfc.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0126db822ce8542ef0.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0174be2908dcce71b2.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01368fbea030c81e43.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0120221ab93ca54a0a.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01f5697f51283f1aec.jpg","http://p4.so.qhmsg.com/bdr/_240_/t0150cbd3418d80bac9.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01b6bc0bcb985066fa.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0142d73d4b7840f154.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t016286b2b3d1edb474.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01862f677234c99984.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0131683a00fe0c5ddf.jpg","http://p0.so.qhmsg.com/bdr/_240_/t018aa23a890af8ec85.jpg","http://p0.so.qhmsg.com/bdr/_240_/t019a980bbc2a38b395.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0162917d8315b5fb9b.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t015b89f6c929fc4553.jpg","http://p4.so.qhmsg.com/bdr/_240_/t017eb0e65891b357b9.png","http://p2.so.qhimgs1.com/bdr/_240_/t01eb079df211d6a49e.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t018a9ba20de78598fc.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t017c247da22f6674cc.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01632cbaf131cb79e4.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0116b0352a24e68804.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01a853f6c42b519214.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01fe28c55736f34cc8.jpg","http://p0.so.qhmsg.com/bdr/_240_/t014e7fbcd1857dbfaf.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t0130a1e986790cc0ad.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01d7de9ec9fd9ce918.png","http://p0.so.qhimgs1.com/bdr/_240_/t01e9783b7417515cc0.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01cf98ecec5393f9d6.jpg","http://p2.so.qhmsg.com/bdr/_240_/t016f044fea21171a37.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t010fddc39c29df4fca.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01af74fcc099dc4b44.png","http://p2.so.qhimgs1.com/bdr/_240_/t01efd13c6723060622.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t01c2def919778941fb.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01486282e4102f953d.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0112bea7d9142efc52.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01ca9a447041d9a4a6.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0166dd06cb78e6833f.jpg","http://p0.so.qhmsg.com/bdr/_240_/t015595d752b2bfe85f.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01e3f534f277f28907.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01ca1eb313f9c8bed3.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t015c2b9584ff02dc8c.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01d08b2621d1634365.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01701c03fcdeb5e91c.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0123221cc0e93553ab.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01ea0ace075387d532.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01d9c9949744834ce0.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0112903ed54f2d1a84.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0133a9908a591f9a7b.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01d8dfa75caf7c48d4.jpg","http://p1.so.qhmsg.com/bdr/_240_/t0140b73b46a3328ad6.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01c507e1a8d8dc7d68.jpg","http://p2.so.qhmsg.com/bdr/_240_/t0118f66e636ac3ea17.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01ec7e61d3fbe6234f.jpg","http://p2.so.qhmsg.com/bdr/_240_/t010bbeb68b839c6017.jpg","http://p4.so.qhmsg.com/bdr/_240_/t0102fbb1143e938a39.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01590198d192d259f9.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01faf78d476bc1de90.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t018ed77db6cbec69e0.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01b0abc0fc833e8b39.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t018f5902b396e00a5e.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0153cb0b9a151c24c2.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01661a684480700552.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0185564fb4935a357e.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01d4b6067d3cbefa57.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01495b8f9e3fd6c9ee.jpg","http://p3.so.qhmsg.com/bdr/_240_/t018401d4358e5235b8.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t017412a80debc930dc.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01869bde40b1878fc1.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01713874ea85a9f99c.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01d07fb1f4f66b16a5.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t019f74288cf258d183.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01b9c9cc99932540b8.png","http://p0.so.qhmsg.com/bdr/_240_/t01939e1b3558ec9845.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01f91640b40600714f.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01a2681fc995416382.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01cd96c2cc91500b2a.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t019b920ec1c05cd3ba.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t014a0375785462c3a3.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01e703bcb1bcbafb31.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01271c58401b64ae56.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01571d62acf76daaa9.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t017af826f306fb670a.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t01fc243157cbf3716b.jpg","http://p2.so.qhmsg.com/bdr/_240_/t0160519b9bac236d77.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t019b7ec06d08b3fc63.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0155d8a71a938c92da.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t0171537fd57773bdfd.jpg","http://p0.so.qhmsg.com/bdr/_240_/t015a484b9b38ae6475.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01a4fb5be1b45d27e7.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01135f66cfed4c3f53.jpg","http://p0.so.qhmsg.com/bdr/_240_/t010f69d8c3acc5c705.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01c5d6392c21f54ba9.jpg","http://p0.so.qhmsg.com/bdr/_240_/t014d23f66821c0a08f.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t015881798b5b26fb6e.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t010a339cca65ef5e2c.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0157b426cdcf63a83f.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t019c8fcee4083dcc6e.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01592cd16731df1915.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t017a3c46452bd638b2.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0162a7dd24cf3b12d2.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01b6eef4243f6efb53.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01b6458396cb1abf83.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01f659f3e55403b37d.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01487d62a2f581c10a.jpg","http://p0.so.qhmsg.com/bdr/_240_/t018168f8b9452114af.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t013935fe366a710aa4.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t011a1ec41477fa9081.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t018f35515232a00b9e.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01518ac8add52e1464.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0117ad6a2e3f36b805.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01300dcb73ba59ce00.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0181d2ebb63493cc72.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01769bfc903f2a60a4.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01b65c34ecf8d88923.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t0167d33902f2654431.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t015fb010957a82382d.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01b39918a9e039b763.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01b77137cd013f4ca9.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t019d20cdd4725684be.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01f24122490fc70164.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01896e253218d2c360.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0144df6f874de0aefb.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01d232b541170ebddd.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t018618ff80d4471603.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01285eb617eefec213.jpg","http://p3.so.qhmsg.com/bdr/_240_/t012e1b535a2b0a54c8.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t0118b0eb09d7a3f303.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01755e74d6255f598d.jpg","http://p1.so.qhmsg.com/bdr/_240_/t0153d82b4164ebceb6.jpg","http://p3.so.qhmsg.com/bdr/_240_/t015374bc0049ee5128.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01bb8ac565d6bcd486.png","http://p0.so.qhimgs1.com/bdr/_240_/t01459bfe52f5685ec4.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01f21875912da73360.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t012e1ea065168023e0.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01953137eaf8c6c8ac.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01bcfc4210d2aebac5.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01252c2b6ec011173a.jpg","http://p4.so.qhmsg.com/bdr/_240_/t014cb1fbbd56677eb9.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01b52c76352070292f.jpg","http://p0.so.qhmsg.com/bdr/_240_/t015a11148696f1e2d5.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01120e6025db9bd76d.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t010c9d33cd20016802.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01af7ac0560c35cfc2.jpg","http://p4.so.qhmsg.com/bdr/_240_/t0199669b2fe237f469.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01aa2b64ea18d1e138.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01b8d71f69ce5dc767.jpg","http://p0.so.qhmsg.com/bdr/_240_/t010b4408bb94672855.jpg","http://p3.so.qhmsg.com/bdr/_240_/t018ebe1ceef12fc1a8.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01ed4d663e2bd4a4e1.jpg","http://p0.so.qhmsg.com/bdr/_240_/t011e0eba2697674cb5.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01c6130c7574d34c4d.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01a705279fb052dd12.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t0164bc9b25917f3e03.jpg","http://p1.so.qhmsg.com/bdr/_240_/t0191d2c02610322de6.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01973ad0cd92541278.jpg","http://p1.so.qhmsg.com/bdr/_240_/t0159c640db7b5384a6.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t019ed427383c0c83e3.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01ed7efaad380b83b1.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0108e85a771c032145.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01255e6ea38e06e77c.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0133adf82834826f4b.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0102f6034123d65c7b.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01f97ab984bde6fd06.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01e252c2a1b10936de.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t019b373803b8f3fbc1.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t01b93d5a61deef1f5b.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0146511107d2cf9894.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t011d28e53c40628f53.jpg","http://p2.so.qhmsg.com/bdr/_240_/t018b83cc648853f307.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t013577b21fc70fd180.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0173cac415f5b00e6e.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01b059f1ac6c23b171.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01fd06a52cad0dedfd.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01b0f70ae96e1d5b1f.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t0123e734513efdedaa.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01f6624ce04efd83b7.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01590f53dc19a04870.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t01e7345d65342e37a3.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01283fe1af7129321c.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t0130f4e01eb136a3dd.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01281344c2454c795f.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01d7610ce94dd75ba0.jpg","http://p4.so.qhmsg.com/bdr/_240_/t018705f7c3ba1266a9.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t019b1f3ef95d78150b.jpg","http://p2.so.qhmsg.com/bdr/_240_/t0198a9b143519a51c7.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t01fb556f313934cb5b.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01b80b3281ca27eb28.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01a7b0deb21e4120bf.jpg","http://p0.so.qhmsg.com/bdr/_240_/t01e276bede1e61844f.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01f410cf6c70ee34e9.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t011d98ea757260ef11.jpg","http://p1.so.qhmsg.com/bdr/_240_/t014e925b2d3b71d4b6.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t01191cde4427c7c17b.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t016d55f3b483a25043.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01ccb2df3f55193bf0.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t016b9d74628a6268de.png","http://p5.so.qhimgs1.com/bdr/_240_/t0181640d4e9e88bc5b.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01b1acf4f4a46fec54.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01b5aa330e40ff25f9.jpg","http://p1.so.qhmsg.com/bdr/_240_/t01e1713836484fa886.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01b29517dc2881d054.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01a2b9c4d4a2c6241d.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t019139897c8d5687ce.jpg","http://p2.so.qhmsg.com/bdr/_240_/t019e3776033855b577.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t016ae005100704de60.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t01feff9ca52235212b.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0160a0bd0c7cc1c665.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01a3bd79cb56fa721e.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t014266d1988376efde.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01899d9ca46ba95341.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01bf2b1181a3a9a41e.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t0131086f0d2b51959e.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01e73d4ea44a3c3f51.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t013aa80a3bb54cb8da.jpg","http://p2.so.qhmsg.com/bdr/_240_/t012ea6f80b6fafd6a7.jpg","http://p0.so.qhmsg.com/bdr/_240_/t017ecfa202a466be75.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01051e2c5003d3e1bd.jpg","http://p3.so.qhimgs1.com/bdr/_240_/t0127f4e640a2fc26e3.jpg","http://p2.so.qhmsg.com/bdr/_240_/t01cbda71a426f48e97.png","http://p0.so.qhimgs1.com/bdr/_240_/t017b1688cf7b17c25a.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t014dd8261f5216a752.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t013c9eff4272896790.jpg","http://p4.so.qhmsg.com/bdr/_240_/t01d7b8a3d7e4f33a69.jpg","http://p3.so.qhmsg.com/bdr/_240_/t01e462d459da144398.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t015d8fda91a98c5e0d.jpg","http://p0.so.qhmsg.com/bdr/_240_/t010674013221aec405.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01329672b2e5196f51.png","http://p0.so.qhimgs1.com/bdr/_240_/t01fa53854063b01960.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t015c6b0a5697ed5eca.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0172714f5fac702dff.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t01af006caaaf8d6132.jpg","http://p1.so.qhimgs1.com/bdr/_240_/t01570c6d28b7124e61.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t01b783e3254321dd2b.jpg","http://p1.so.qhmsg.com/bdr/_240_/t010c12383b16d8e4d6.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t014621763a07e1009a.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01ce14c5b3b8f005c4.jpg","http://p2.so.qhimgs1.com/bdr/_240_/t016f5c1c36a43e57ae.jpg","http://p0.so.qhmsg.com/bdr/_240_/t0179d17036cdb21bcf.jpg","http://p5.so.qhimgs1.com/bdr/_240_/t0181f652bff9888deb.jpg","http://p0.so.qhimgs1.com/bdr/_240_/t01e2354a83ba9fca14.jpg"]
      return arr[idx]
    }
  },
  watch: {
    ...require('@/assets/js/watch').default,
  },
  computed: {
    ...require('@/assets/js/computed').default,
  },
  components: { App },
  template: '<App/>',
  mounted() {
    const root = this.$root
    let r
    
    root.init()
    r = root.router
  }
})
