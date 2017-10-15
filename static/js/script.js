// script.js
function send() {
    var alertbox = document.getElementById("alertbox");
    var missing = '';
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    if (name=='') {
        missing+="Name,"
    }
    if (subject=='') {
        missing+="Subject,"
    }
    if (message=='') {
        missing+="Message,"
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