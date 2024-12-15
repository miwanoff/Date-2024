

function time() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
    setInterval(time, 1000);
}

