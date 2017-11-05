// script.js
function send() {
    var alertbox = document.getElementById("alertbox");
    var missing = '';
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
    if (name=='') {
        missing+="Name,"
    }
    if (subject=='') {
        missing+="Subject,"
    }
    if (message=='') {
        missing+="Message,"
    }
    if (email=='') {
        missing+="Email,"
    }
    if (missing != '') {
        alertbox.style.color = "red";
        alertbox.innerHTML = "Fields " + missing.substr(0, missing.length-1) + " need to be filled out";
    } else {
        alertbox.style.color = "green";
        alertbox.innerHTML = "Hi "+name+", your message has been sent";
        return true;
    }
    return false;
}

function weather(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=5327684&appid=e6a024fffdf76fb6e8303406c34d4262", true);
    xhttp.send();
    xhttp.onload = function() {
        if (xhttp.readyState === xhttp.DONE) {
            if (xhttp.status === 200) {
                data = JSON.parse(xhttp.responseText);
                var weather = document.getElementById("weather");
                weather.innerHTML = "City: "+data['name']+"&nbsp;&nbsp;&nbsp;Weather: "+data['weather'][0]['description']+"&nbsp;&nbsp;&nbsp;Temperature: "+(data['main']['temp'] - 273.15).toFixed(1) + ' &#8451';
                weather.style.color = "blue";
            }
        }
    };    
}

weather();
