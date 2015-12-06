$(document).ready(function(){




});//end of document.ready

// var inputDate = '2015-12-06';
// var testDate;
var userInputZip;
var userStartDate;
var userEndDate;

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
          console.log(userStartDate);

          if(shortDate >= userStartDate && shortDate <= userEndDate){
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
    var arrAdj = [];
    if(value.indexOf('-') === -1){
        var arr = value.split('/').reverse();
    }
    else {
        var arr = value.split("-").reverse();
    }
    arrAdj.push(arr[0], arr[2], arr[1]);
    arrAdj = arrAdj.join('-')
    return arrAdj;
}

// Date: "2015-12-06T11:00:00" AJAX DATE EXAMPLE

function findShows(){
  var zip = document.getElementById("userInput");
  var startDate = document.getElementById("startDate");
  var endDate = document.getElementById("endDate");

  userInputZip = zip.value;
  userStartDate = convertUserDate(startDate.value);
  userEndDate = convertUserDate(endDate.value);

  runAjax();
}
////////////////////
