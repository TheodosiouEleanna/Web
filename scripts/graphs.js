var current_date = new Date();
console.log(current_date);

//get day
var current_day = current_date.toLocaleString('en-us', {
   weekday: 'long'
});
console.log(current_day);
