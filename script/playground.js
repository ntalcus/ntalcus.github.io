var i = 0;
var txt = 'Noah Theodore Alcus'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    let forward = true;
    while (true) {
        if (forward) {
            document.getElementById("type_writer").innerHTML += txt.charAt(i);
            i++;
            sleep(speed);
            // continue;
        } else if (!forward && i > 0) {
            document.getElementById("type_writer").innerHTML = txt.slice(0,i);
            i--;
            sleep(speed);
            continue;
        }
        forward = !forward;
    }
}


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

window.onload= typeWriter();