const fetch = require("node-fetch");
module.exports = async (key, city) => {
  // key 值就是 授權碼 , city 是要查那個城市, 只能用中央氣象局的格式
  let url =
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-8BF4B4EA-34B6-4966-8ABE-4B50BC83F559&locationName=%E6%BE%8E%E6%B9%96%E7%B8%A3";
  let response = await fetch(url);
  let date = await response.json();
  let { weatherElement } = date.records.location[0];
  let [Wx, PoP, MinT, CI, MaxT] = weatherElement.map((i) => {
    return i.time[0].parameter.parameterName;
  });
  return {
    city,
    degree: {
      min: MinT,
      max: MaxT
    },
    weather: Wx,
    feeling: CI,
    chance: PoP
  };
};
