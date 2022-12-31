# taiwan-weather-xxx

## Installation

'''bash
npm install --save taiwan-weather-xxx
'''

## Requirements

首先申請中央氣象局 open data 的帳號並得授權碼

## Sample Code

'''js
cont TaiwanWeather = require('taiwan-weather-xxx');
(async () => {
let data = await TaiwanWeather(授權碼, '澎湖縣');

console.log(data);
})();
'''

# Licence

The MIT licence
