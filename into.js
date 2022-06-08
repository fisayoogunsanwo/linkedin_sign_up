
// var sent = "What's up?";
// alert(sent);


let butn = document.getElementById("but1");
let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let in3 = document.getElementById("in3");
let in4 = document.getElementById("in4");


butn.addEventListener("click", function(){
    if(in1.value == "" || in2.value == "" || in3.value == "" || in4.value == "" ) {
        alert("Please fill all fields!");
    }
    else {alert("Successful!");}

});