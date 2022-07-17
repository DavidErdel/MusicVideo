function newColor() {
    document.getElementById("heaven_or_las_vegas").style.color = "blue";
}

function oldColor() {
    document.getElementById("heaven_or_las_vegas").style.color = "red";
}

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}