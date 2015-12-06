$(document).ready(function(){




});//end of document.ready

var inputDate = '2015-12-06';
var testDate;
var userInputZip;
var userInputDate;

function runAjax(){
  $.ajax(
    {type: 'get',
    url:
      'http://api.jambase.com/events?zipCode='+userInputZip+'&api_key=yhr4bp7wwbq722r2a6bwef2w',
      // 'http://api.jambase.com/events?zipCode='+userInputZip+'&api_key=uzhe5fzcruqrewep5cj2jrjz',
      // uzhe5fzcruqrewep5cj2jrjz
      success: function (data){
        console.log(data.Events.length);
        console.log(data);

        for (i=0; i< data.Events.length; i++){
          var shortDate = data.Events[i].Date.substring(0,10);
          var shortTime = data.Events[i].Date.substring(11,19);
          console.log(shortDate);
          console.log(userInputDate);

          if(shortDate == userInputDate){
          $("#divID").append('</p>' + 'date::: '+ shortDate + ' time:::' + shortTime + ' show::: ' + data.Events[i].Artists[0].Name + ' address::: ' + data.Events[i].Venue.Address + ' city::: ' + data.Events[i].Venue.City + '</p>');
        }
      }
      },
      error: function(){
        console.log('failed');
      },
    }
  );
}


function convertUserDate(value){
    var arr = value.split("-").reverse().join('-');
    return arr;
}

function findShows(){
  var userZip = document.getElementById("userInput");
  var userDate = document.getElementById("userDate");
  userInputZip = userZip.value;
  userInputDate = convertUserDate(userDate.value);
  runAjax();
}
////////////////////
