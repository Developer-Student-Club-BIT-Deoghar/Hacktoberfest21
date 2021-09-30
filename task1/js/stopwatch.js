var min = 0,
    sec = 0,
    mil = 0;
var start_btn = document.getElementsByClassName("btn")[0];
var minute_display = document.getElementById("minute").innerHTML;
var second_display = document.getElementById("second").innerHTML;
var milli_display = document.getElementById("milli").innerHTML;

function main() {
    start_btn.innerHTML = "Stop";
    var milli_caller = setInterval(milli_increment, 10);
    start_btn.onclick = function () {
        start_btn.innerHTML = "Start";
        clearInterval(milli_caller);
        start_btn.onclick = function () {
            start_btn.innerHTML = "Stop";
            var milli_caller = setInterval(milli_increment, 10);
            start_btn.onclick = function () {
                start_btn.innerHTML = "Start";
                clearInterval(milli_caller);
                start_btn.onclick = function () {
                    start_btn.innerHTML = "Stop";
                    var milli_caller = setInterval(milli_increment, 10);
                    start_btn.onclick = function () {
                        start_btn.innerHTML = "Start";
                        clearInterval(milli_caller);
                        start_btn.onclick = function () {
                            start_btn.innerHTML = "Stop";
                            var milli_caller = setInterval(milli_increment, 10);
                            start_btn.onclick = function () {
                                start_btn.innerHTML = "Start";
                                clearInterval(milli_caller);
                                start_btn.onclick = function () {
                                    start_btn.innerHTML = "Stop";
                                    var milli_caller = setInterval(milli_increment, 10);
                                    start_btn.onclick = function () {
                                        clearInterval(milli_caller);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function milli_increment() {
    var a = document.getElementById("milli");
    if (mil < 99) {
        if (mil < 9) {
            mil = mil + 1;
            a.innerHTML = "0" + mil;
        } else {
            mil = mil + 1;
            a.innerHTML = mil;
        }
    } else {
        if (sec < 59) {

            if (sec < 9) {
                sec = sec + 1;
                document.getElementById("second").innerHTML = "0" + sec;
            } else {
                sec = sec + 1;
                document.getElementById("second").innerHTML = sec;
            }
        } else {
            sec = 0;
            document.getElementById("second").innerHTML = sec;


            if (min < 9) {
                min = min + 1;
                document.getElementById("minute").innerHTML = "0" + min;
            } else {
                min = min + 1;
                document.getElementById("minute").innerHTML = min;
            }
        }
        mil = 0;
        a.innerHTML = mil + 1;
    }
}

function reset() {
    location.reload();
}