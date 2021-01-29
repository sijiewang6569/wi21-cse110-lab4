function printOutTime () {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(printOutTime, 1000);
