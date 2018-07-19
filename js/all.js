
//Web向Server要資料的方法
var xhr = new XMLHttpRequest();

//readyState:
//0:已經產收一個XMLHttpRequest，但還未連結你要的資料
//1:你用了open()，但你還沒有傳送資料過去
//2:偵測到你有用 send
//3:loading (讀取中，還在撈資料)
//4:你撈到資料了，數據已經完全接收

//xhr.open('get','https://...',true)
//        格式、要讀取的網址、同步與非同步
//格式:get(讀取資料)、post(傳送資料到伺服器)
//true:非同步、false:同步
xhr.open('get',
'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
true)

//true:非同步，不會等資料回傳回來，
//就讓程式繼續往下跑，等到回傳才會自動回傳

//false:同步，會等資料回傳回來，才讓程式繼續往下跑

xhr.send(null); //發送一個HTTP請求

console.log(xhr.status);

xhr.onloadend = function(){
    if(xhr.status == 200){
        console.log(xhr.responseText);
        var data = JSON.parse(xhr.responseText);
        
        document.querySelector('.demo').textContent = data.squadName;
    }else{
        console.log('data error');
    }
    
}

//1.建立了一個 xmlhttprequest
//2.傳送到對方伺服器要資料
//3.要到資料後回傳資料到自己的瀏覽器
//4.拿到資料後再看要怎麼處理
 