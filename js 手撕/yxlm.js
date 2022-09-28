const koa = require('koa')
const request = require('koa2-request')
// const request = require('koa-body')
// const router = require('koa-router')()

const app = new koa()

// router.get('/hhh/:name', async ctx => {
//     let url = 'https://www.wegame.com.cn/api/v1/wegame.pallas.game.LolBattle/'
//     let cookie = 'pgv_pvid=1986493920;ts_uid=4737377893;region=CN;puin=3176366671;pt2gguin=o03176366671;uin=o03176366671;tgp_id=101732371;geoid=45;lcid=2052;tgp_env=online;tgp_user_type=0;colorMode=1;ssr=0;colorMode=1;pgv_info=ssid=s9936885800;language=zh_CN;tgp_biz_ticket=0100000000000000003E4FF13531F7CE389A101FA395D60AC44EEF93E0E85D7A3744CEA45AF51D2EA8FEFE9CE123D040D0AE67A8FF7FEAF879348A273841082B225645878419FB415F;pkey=00016329DCEB0070CA7F075FFE0602E3CF82376AF04118B757A583210B5D4B7105D424964F3AB5A9B97121C38FD2C501B941A9D4B85C20C2770B394F0D309132359EB549EDDD93195DFE7F508B6DE18E47796B3FD9F9733BF2BD70978FC2B0AB28ED5E8DC4AF5453D65101088B27A60ECD06F3D7D1A1F22A;tgp_ticket=1658625B6F62D0EAEE0C5391754C0EE117472A877A8109307C28501989D341F9462FEE52B38B4FD36FE7E38096AD6FB5C2A772867A75AAB94D6E99FA24CCC9C34D514576A055D6D5D1898FCF068949224BBB66A13318F7A7A8147756C62637FAE672E416E6246EB8837B8F94546797F2B2593A2E21BFE12E2C25D87DAEB3B471;ts_last=www.wegame.com.cn/helper/lol/search/index.html'
//     let referer = 'https://www.wegame.com.cn/helper/lol/search/index.html?kw=%E9%A5%BF%E4%BA%86%E4%B9%88%E7%9B%B4%E9%80%81&navid=61'
//     // nickname
//     let body = {
//         "nickname": `${ctx.query.name}`,
//         "from_src": "lol_helper"
//     }
    
//     request({
//         // 搜索
//         url: `${url}SearchPlayer`,
//         method: 'POST',
//         headers: {
//             'Contrnt-Type': 'application/json;charset=UTF-8',
//             'cookie': cookie,
//             'referer': referer,
//             'origin': 'https://www.wegame.com.cn',
//             // 'user-agent': 'ApiPOST Runtime +https://www.apipost.cn'
//         },
//         json: body
//     }, function (error, response, bodys) {
//         if (!error && response.statusCode == 200) {
//             console.log(bodys) // 请求成功的处理逻辑
//         }
//     })
// })
app.use(async ctx => {
    let url = 'https://www.wegame.com.cn/api/v1/wegame.pallas.game.LolBattle/'
    let cookie = 'pgv_pvid=1986493920;ts_uid=4737377893;region=CN;puin=3176366671;pt2gguin=o03176366671;uin=o03176366671;tgp_id=101732371;geoid=45;lcid=2052;tgp_env=online;tgp_user_type=0;colorMode=1;ssr=0;colorMode=1;pgv_info=ssid=s9936885800;language=zh_CN;tgp_biz_ticket=0100000000000000003E4FF13531F7CE389A101FA395D60AC44EEF93E0E85D7A3744CEA45AF51D2EA8FEFE9CE123D040D0AE67A8FF7FEAF879348A273841082B225645878419FB415F;pkey=00016329DCEB0070CA7F075FFE0602E3CF82376AF04118B757A583210B5D4B7105D424964F3AB5A9B97121C38FD2C501B941A9D4B85C20C2770B394F0D309132359EB549EDDD93195DFE7F508B6DE18E47796B3FD9F9733BF2BD70978FC2B0AB28ED5E8DC4AF5453D65101088B27A60ECD06F3D7D1A1F22A;tgp_ticket=1658625B6F62D0EAEE0C5391754C0EE117472A877A8109307C28501989D341F9462FEE52B38B4FD36FE7E38096AD6FB5C2A772867A75AAB94D6E99FA24CCC9C34D514576A055D6D5D1898FCF068949224BBB66A13318F7A7A8147756C62637FAE672E416E6246EB8837B8F94546797F2B2593A2E21BFE12E2C25D87DAEB3B471;ts_last=www.wegame.com.cn/helper/lol/search/index.html'
    let referer = 'https://www.wegame.com.cn/helper/lol/search/index.html?kw=%E9%A5%BF%E4%BA%86%E4%B9%88%E7%9B%B4%E9%80%81&navid=61'
    // nickname
    let body = {
        "nickname": `${ctx.query.name}`,
        "from_src": "lol_helper"
    }
    
    request({
        // 搜索
        url: `${url}SearchPlayer`,
        method: 'POST',
        headers: {
            'Contrnt-Type': 'application/json;charset=UTF-8',
            'cookie': cookie,
            'referer': referer,
            'origin': 'https://www.wegame.com.cn',
            // 'user-agent': 'ApiPOST Runtime +https://www.apipost.cn'
        },
        json: body
    }, function (error, response, bodys) {
        if (!error && response.statusCode == 200) {
            console.log(bodys) // 请求成功的处理逻辑
        }
    })
});
app.listen(3000)
console.log("listen:" + "http://localhost:3000/")