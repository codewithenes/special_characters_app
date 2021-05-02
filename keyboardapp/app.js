var typelist = [";",".",",","/","?","<",">",":","'","[","]","{","}","=","+","-","_","(",")","*"];
var word = typelist[Math.floor(Math.random() * typelist.length)];
document.getElementById("wordh1").innerHTML = word;
var count = 0;
document.getElementById("counter").innerHTML = count;

var wage = document.getElementById("type");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        check();
    }
});

var timer



function check() {
    var usertype = document.getElementById('type').value;

    if (usertype === word) {
        getword();
        document.getElementById('type').value = "";
        count++;
        document.getElementById("counter").innerHTML = count;

        
    }

    else {
        alert("Wrong");

    }
}


function getword() {
     word = typelist[Math.floor(Math.random() * typelist.length)];

    document.getElementById("wordh1").innerHTML = word;
    
    
}

