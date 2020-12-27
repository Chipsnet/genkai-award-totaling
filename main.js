const fs = require('fs');

let jsonData = JSON.parse(fs.readFileSync("./json/data.json", 'utf8'));

let cnt = 0;

jsonData["messages"].forEach((item) => {
    if (item["timestamp"].startsWith("2020")){
        if (item["content"].startsWith("https://twitter.com")) {
            let statusId = item["content"].split("/")[5].substr(0, 19)
            //console.log(statusId);

            var intId = parseInt(statusId, 10);
            //var unixTime = (intId &gt;&gt;&gt; 22) + 1288834974657;
            var unixTime = parseInt(intId / Math.pow(2, 22)) + 1288834974657;
            var tweetDate = new Date(unixTime);
            
            var year = ("000" + tweetDate.getFullYear()).slice(-4);
            var month = ("0" + (tweetDate.getMonth() + 1)).slice(-2);
            var date = ("0" + tweetDate.getDate()).slice(-2);
            var hours = ("0" + tweetDate.getHours()).slice(-2);
            var minutes = ("0" + tweetDate.getMinutes()).slice(-2);
            var seconds = ("0" + tweetDate.getSeconds()).slice(-2);
            var millis = ("00" + tweetDate.getMilliseconds()).slice(-3);
            
            TweetTime = year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds + "." + millis;
            if (hours === "23" && minutes === "59") {
                console.log(TweetTime, item["content"]);
            }
        }
    }
})