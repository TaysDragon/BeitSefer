/* Make bigger */
document.getElementById("GrowButton").addEventListener("click", function(){

            document.getElementById("box").style.height="350px";
            document.getElementById("box").style.width="350px";

        });



/* Change color */

	document.getElementById("BlueButton").addEventListener("click", function(){

		document.getElementById("box").style.background="#0066ff";

        });




/* Fade begin */
var star = document.getElementById("box");
star.style.opacity = 1;
star.style.transition = "opacity 1s";

var button1 = document.getElementById("FadeButton");
var button2 = document.getElementById("UnfadeButton");

function fade() {
    star.style.opacity = 0;
}

function unfade() {
    star.style.opacity = 1;
}

button1.addEventListener("click", fade , false);
button2.addEventListener("click", unfade , false);

/* Fade end */




/* Reset */
document.getElementById("ResetButton").addEventListener("click", function(){

		document.getElementById('box').style.height = "200px";
		document.getElementById('box').style.width = "200px";
		document.getElementById("box").style.background="#ffccff";

        });



/* Time */
document.getElementById("displayDate").addEventListener("click", function displayDate() {

		document.getElementById("CurrentTime").innerHTML = Date();
});

function mOver(obj) {
    obj.innerHTML = "Hello JavaScript! :D"
}

function mOut(obj) {
    obj.innerHTML = "Hover over this box, please."
}