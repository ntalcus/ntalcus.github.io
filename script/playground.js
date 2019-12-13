var i = 0;
var txt = 'Noah Theodore Alcus'; /* The text */
var speed = 75; /* The speed/duration of the effect in milliseconds */

async function typeWriter() {
    let forward = true;
    let j = 0;
    while (true) {
        if (forward && i < txt.length) {
            document.getElementById("type_writer").innerHTML += txt.charAt(i);
            i++;
            await sleep(speed);
            continue;
        } else if (!forward && i >= 0) {
            document.getElementById("type_writer").innerHTML = txt.slice(0,i);
            i--;
            await sleep(speed);
            continue;
        } else if (!forward) {
	    await sleep(speed * 75);
	} else if (forward) {
	    await sleep(speed * 15);
	}
        forward = !forward;
    }
}


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

