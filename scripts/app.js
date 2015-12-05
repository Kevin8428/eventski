$(document).ready(function(){

$.ajax(getPermitData);

});//end of document.ready

dataArr = [];
inputDate = '2015-12-04T20:00:00'


////////////////////
var getPermitData = {
  type: 'get',
  url:
  'http://api.jambase.com/events?zipCode=05482&api_key=yhr4bp7wwbq722r2a6bwef2w',
  success: function (data){
    // if(data.Events[0].Date == '2015-12-99T20:00:00'){
    //   console.log('works, date is '+data.Events[0].Date)
    // }
    // console.log(data.Events[0].Artists[0].Name);
    console.log(data.Events[0].Date);
    console.log(data);

    for (i=0; i< 10; i++){
      if(data.Events[i].Date == inputDate){
        //
        // console.log('for loop works');
        // console.log(data.Events[i].Date);
        // console.log(data.Events[i].Artists[0].Name);
      dataArr.push(data.Events[i].Date, data.Events[i].Artists[0].Name);
    }
  var json_string = JSON.stringify(dataArr);
  $("#divID").append(json_string);
  }
  },
  error: function(){
    console.log('failed');
  },

}
////////////////////
