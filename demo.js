/*
 * @Author: SunBOY
 * @Date: 2022-09-16 17:13:45
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-01-16 12:24:36
 * @FilePath: \web-dotolist\demo.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2022-09-16 17:13:45
 */
let url =
  "https://cat-match.easygame2021.com/sheep/v1/game/game_over?rank_score=1&rank_state=1&rank_time=9&rank_role=1&skin=1";

/**
 * 数据请求
 * @param {String} url
 * @return {json} 数据
 */
function get(url) {
  fetch(url, {
    method: "GET",
    headers: {
      t: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ0MTg2MDYsIm5iZiI6MTY2MzMxNjQwNiwiaWF0IjoxNjYzMzE0NjA2LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjoyMDY3MjUxMjcsImRlYnVnIjoiIiwibGFuZyI6IiJ9.Z03oMn0LWd5uGXkJ6CnI0Gu5JJOBUu3pLQrGNCc0laA",
      "content-type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0.1; MuMu Build/V417IR; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3262 MMWEBSDK/20220204 Mobile Safari/537.36 MMWEBID/5589 MicroMessenger/8.0.20.2100(0x28001438) Process/appbrand1 WeChat/arm32 Weixin Android Tablet NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
    },
    referrer: "https://servicewechat.com/wx141bfb9b73c970a9/17/page-frame.html",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
}

get();
