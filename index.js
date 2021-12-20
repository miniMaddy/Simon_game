var j = 4;
var arr = [0,1,2,3];
var ans = [];
var i = 0;
var score = 0;
var highest_score = 0;
var color = {
    0: "btn-danger",
    1: "btn-success",
    2: "btn-primary",
    3: "btn-warning"
}

function button_handler(btn) {
    if(ans[i] == btn && i<j){
        i++;
    }
    else if(ans[i] != btn){
        $("#text").html("Oops! Wrong answer");
        j = 4;
        i = 0;
        $("#score").html("Score : 0")
        score = 0;
        ans = [];
        document.getElementById("btn-start").style.display = "block";
    }
    if(i == j){
        j = j+2;
        i = 0;
        ans = [];
        document.getElementById("btn-start").style.display = "block";
        score++;
        $("#score").html("Score : " + score)
        if(highest_score < score){
            highest_score = score;
            $("#highest_score").html("&nbsp;Highest Score : " + highest_score);
        }
    }
}

function highlight_button(btn) {
    $("#btn-" + btn).addClass(color[btn]);
    setTimeout(() => { $("#btn-" + btn).removeClass(color[btn]);}, 600);
}

function start(){
    $("#text").html("");
    utility();
    document.getElementById("btn-start").style.display = "none";
    for (let k = 1; k <= j; k++) {
        setTimeout(() => { highlight_button(ans[k-1]) }, (k) * 700);
    }
}

function utility(){
    for(var k = 0; k<j; k++){
        ans.push(arr[Math.floor(Math.random()*arr.length)]);
    }   
}


