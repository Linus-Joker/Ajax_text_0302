
var xml = new XMLHttpRequest();

xml.open('GET',
'http://opendata.epa.gov.tw/ws/Data/ATM00698/?$skip=0&$top=1000&format=json',
true);

xml.send();

