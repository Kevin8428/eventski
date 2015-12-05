$(document).ready(function(){




});//end of document.ready

var inputDate = '2015-12-04T20:00:00';
var inputZipCode = '60618';
var userInputZip;

function runAjax(){
  $.ajax(
    {type: 'get',
    url:
      'http://api.jambase.com/events?zipCode='+userInputZip+'&api_key=yhr4bp7wwbq722r2a6bwef2w',
      success: function (data){
        for (i=0; i< 10; i++){
          if(data.Events[i].Date == inputDate){
          var shortDate = data.Events[i].Date.substring(0,10);
          var shortTime = data.Events[i].Date.substring(11,19);
          // dataArr.push(data.Events[i].Date, data.Events[i].Artists[0].Name);
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

function findShows(){
  var userZip = document.getElementById("userInput");
  userInputZip = userZip.value;
  document.getElementById("divID").innerHTML = userInputZip;
  runAjax();
}
////////////////////
