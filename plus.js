const fs = require('fs');

let jsonData = JSON.parse(fs.readFileSync("./json/data.json", 'utf8'));

jsonData["messages"].forEach((item) => {
    if (item["timestamp"].startsWith("2020")){
        if (item["content"].startsWith("https://twitter.com")) {
            let statusId = item["content"].split("/")[5].substr(0, 19)
            //console.log(statusId);

            let cnt = 0

            statusId.split("").forEach(num => {
                cnt += Number(num)
            })

            if (cnt > 110) {
                console.log(cnt, item["content"]);
            }
        }
    }
})