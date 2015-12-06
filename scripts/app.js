$(document).ready(function(){

});//end of document.ready

var userInputZip;
var userStartDate;
var userEndDate;
var showsArr = [];
var showDivs = 0;

function runAjax(){
  $.ajax(
    {type: 'get',
    url:
      'http://api.jambase.com/events?zipCode='+userInputZip+'&api_key=yhr4bp7wwbq722r2a6bwef2w',
      // 'http://api.jambase.com/events?zipCode='+userInputZip+'&api_key=uzhe5fzcruqrewep5cj2jrjz',
      success: function (data){
        console.log(data.Events.length);
        console.log(data);

        for (i=0; i< data.Events.length; i++){
          var shortDate = data.Events[i].Date.substring(0,10);
          var shortTime = data.Events[i].Date.substring(11,19);

          if(shortDate >= userStartDate && shortDate <= userEndDate){
            showDivs = showDivs + 1;
            var element = document.createElement("input");
            element.id = showDivs;
            element.type = 'button';
            element.name = 'attendButton';
            element.value = 'attend';
            element.onclick = function (){
              addShow(this.id);
            };
            // $("#divID").append(element);
            //
            // $("#divID").append('date::: '+ shortDate + ' time:::' + shortTime + ' show::: ' + data.Events[i].Artists[0].Name + ' address::: ' + data.Events[i].Venue.Address + ' city::: ' + data.Events[i].Venue.City + '</p>');

            var tempArr = [];
            tempArr.push(shortDate, shortTime, data.Events[i].Artists[0].Name, data.Events[i].Venue.Address, data.Events[i].Venue.City);
            showsArr.push(tempArr);

            $('#arrayID').append(element);
            $('#arrayID').append('<div>' + tempArr + '</div>');
            // $('#arrayID').append(tempArr + '</p>');


        }
      }
      },
      error: function(){
        console.log('failed');
      },
    }
  )
}

function addShow(x-1){
  var currentShow = new Object();
  currentShow.date = showsArr[x][0];
  currentShow.time = showsArr[x][1];
  currentShow.band = showsArr[x][2];
  currentShow.address = showsArr[x][3];
  currentShow.city = showsArr[x][4];

  var currentShowArr = [];
  currentShowArr.push(showsArr[x][0],showsArr[x][1],showsArr[x][2],showsArr[x][3],showsArr[x][4]);

  $('#myShowsID').append('<div>' + currentShowArr + '</div>');
  $('#myShowsID').append('<div>' + currentShow + '</div>');


  alert (showsArr[x][2] + ' added');
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
