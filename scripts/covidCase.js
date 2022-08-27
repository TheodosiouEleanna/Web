function getDateTime() {
  var now     = new Date(); 
  console.log(now); //Mon Feb 21 2022 20:27:47 GMT+0200 (Χειμερινή ώρα Ανατολικής Ευρώπης)
  var year    = now.getFullYear();
  var month   = now.getMonth()+1; 
  var day     = now.getDate();
  var hour    = now.getHours();
  var minute  = now.getMinutes();
  var second = now.getSeconds(); 
  if(month.toString().length == 1) {
    month = '0'+month;
  }
  if(day.toString().length == 1) {
    day = '0'+day;
  }   
  var dateTime = year +'-'+month+'-'+day;   
  return dateTime;
}

function difference(current_date, date){
  //14 days have passed?
  const days = $.ajax({
        url: 'includes/covidCase.inc.php',
        method: 'POST',
        data: {date: date},
        success: function(response) {
          console.log(response);
          
          var difference = date.diff(response, 'days');
          console.log(difference);
          
          if(Math.abs(difference)<14){
            return false;
          }else{
            return true;
          }
        }
    });
  }

//get day
// var current_day = current_date.toLocaleString('en-us', {
//     weekday: 'long'
// });
// console.log(current_day);

var current_date = getDateTime(); //now
console.log(current_date);

$(document).ready(function() {
  $(".btn").on('click', function(e) {
    
    e.preventDefault();

    let date = document.getElementById("covidDate").value;
    console.log(date);

    if(confirm('Are you sure you want to declare your covid Case?')){

      if (boundDate == true){
        alert("You cannot enter a future date!");
      }
      else if(difference == true){
        alert("It has not been 14 days since your last declaration!");
      }
      else{
      const post = $.ajax({
        url: 'includes/covidCase.inc.php',
        method: 'POST',
        data: {date: date, current_date : current_date},
        success: function(response) {
          console.log(response);
      }
    });
  }
} 

  });
});

function boundDate(current_date, date){
  if (date>current_date){
    console.log(current_date);
    console.log(response);
    return true;
  }
  else {
    return false;
  }
}

