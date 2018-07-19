
var xhr = new XMLHttpRequest();

xhr.open('post',
'https://hexschool-tutorial.herokuapp.com/api/signup',
true);

xhr.setRequestHeader('Content-type',
'application/x-www-form-urlencoded');

xhr.send('email=cc123@mail.com&password=13234');

