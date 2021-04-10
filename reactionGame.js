var start = new Date().getTime(); // when page loads the the current time is taking which will be our start time
function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}


function makeShapeAppear(){
var top = Math.random() * 400;
var left = Math.random() * 400;
var width = (Math.random() * 200) + 100;

if (Math.random()> 0.5) {
    document.getElementById('red-shapes').style.borderRadius = "50%";
} else {
  document.getElementById('red-shapes').style.borderRadius = "0";
}
document.getElementById('red-shapes').style.backgroundColor = getRandomColor();
document.getElementById('red-shapes').style.top = top + "px";
    document.getElementById('red-shapes').style.left = left + "px";
      document.getElementById('red-shapes').style.width = width + "px";
        document.getElementById('red-shapes').style.height = width + "px";
document.getElementById('red-shapes').style.display = "block";
   start = new Date().getTime(); // here we will update the timer
} // this function makes the shape appear after 1 second and once the user clicks on the shape the on click function is excuted


function appearAfterDely() {

setTimeout(makeShapeAppear, Math.random() * 2000); // setting the timeout to a random time
}
appearAfterDely();
//console.log("Hello");
document.getElementById('red-shapes').onclick = function(){
    document.getElementById('red-shapes').style.display = "none";
  var end = new Date().getTime(); // this will be the end time
  var timeTaken = (end - start) / 1000; // this will give us the overall time taken to click on the shape in seconds
  document.getElementById('timeTaken').innerHTML = timeTaken + "s";
  appearAfterDely();

}
