const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const request = require('request');
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));



function pushMessage() {
    const clientServerOptions = {
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            'bearer': 'FxIZF3SopR0ZDw35pFjTnljiVwCsbVDHXH070wysiUX'
        },
        form: {
            message: '今天深呼吸了嗎？'
        },
    }
    request(clientServerOptions, function (error, response, body) {
        // console.log(error, response, body);

        return;
    });
}



app.listen(process.env.PORT || 3333, function () {
    const date= new Date();
    console.log("現在時間:",date)
    console.log("現在時間:",date.getHours())
    // 排除六日
    // 每60分鐘檢查一次
    setInterval(()=>{
        console.log("現在時間:",date.getDay())
        if((date.getDay()!==6)||(date.getDay()!==0)){
               //0 日  6 六
            console.log("不是星期六日");
            if(date.getHours()==10){
                pushMessage();
            }
        }
    },3000)
    // 3600000
    console.log('Example app listening on port 3000!');
});