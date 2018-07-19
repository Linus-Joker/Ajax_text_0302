
var send = document.querySelector('.send');

send.addEventListener('click',singup,false);

function singup(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;

    var account = {}

    account.email = emailStr;
    account.password = passwordStr;

    console.log(account);

    var xhr = new XMLHttpRequest();

    xhr.open('POST',
    'https://hexschool-tutorial.herokuapp.com/api/signup',
    true)

    xhr.setRequestHeader('Content-type',
    'application/json');

    var data = JSON.stringify(account);

    xhr.send(data);

    xhr.onload = function(){
        var result =JSON.parse(xhr.responseText);
        console.log(xhr);
        alert(result.message);

    }

}


xml.onload = function(){
    var data = JSON.parse(xml.responseText);
    for(var i = 0; i<data.length; i++){
        
        console.log(data[i].SiteName);
        document.getElementById('demo').innerHTML =data[i].SiteName;
    }     
}