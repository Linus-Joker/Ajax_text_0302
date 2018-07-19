$(function () {
    $.ajax({
      type: "GET",
      url: "http://opendata.cwb.gov.tw/opendataapi?dataid=F-A0012-001&authorizationkey=CWB-37B7DA8E-C662-4B2A-8BE6-14CC5C9B4336",
      dataType: "xml",
      error: function (e) {
        console.log('oh no');
      },
      success: function (e) {
        var xml = e;
        console.log($(xml));
      }
    });
  });