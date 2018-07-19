function show(value) {

    let xhr = new XMLHttpRequest();

    xhr.open('get', 'http://opendata2.epa.gov.tw/UV/UV.json', true);

    xhr.send(null);

    console.log(xhr.status);

    xhr.onloadend = function () {
        if (xhr.status == 200) {

            let data = JSON.parse(xhr.responseText);
            //console.log(data);
            for (let i = 0; i < data.length; i++) {
                let name = data[i].SiteName
                let uvi = data[i].UVI
                let time = data[i].PublishTime
                if (value == "Taiper" && name === "臺北") {

                    document.querySelector('#uvi').textContent =
                        "地點:" + name + "  " + "紫外線指數:" + uvi + ",  " + "更新時間:" + time
                }
                if (value == "Taichung" && name === "臺中") {

                    document.querySelector('#uvi').textContent =
                        "地點:" + name + "  " + "紫外線指數:" + uvi + ",  " + "更新時間:" + time
                }
                if (value == "Kao" && name === "高雄") {

                    document.querySelector('#uvi').textContent =
                        "地點:" + name + "  " + "紫外線指數:" + uvi + "  " + "更新時間:" + time
                }
            }

        } else {
            document.querySelector('#uvi').textContent = "目前status狀態: " + xhr.status;
            console.log('data error!!');
        }

    }

}