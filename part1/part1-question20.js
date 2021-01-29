function timePrint () {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timePrint, 1000);
