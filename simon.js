"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
function start(){
var i = 0;
var j = 4;
var arr = [1,2,3,4];
var ans = [];
while(i < 20){ 
    for(var k = 0; k<j; k++){
        ans.push(arr[Math.floor(Math.random()*arr.length)]);
        document.getElementById("output").concat(ans[k].toString());
    }
    for(var k = 0; k<j; k++){
        setTimeout(function() {
            document.getElementById(ans[k].toString()).style.backgroundColor = "blue";
        }, 1000);
        document.getElementById(ans[k].toString()).style.backgroundColor = "green";
    }
    for(var k = 0; k<j; k++){
        $("button").click(function(){
            if($(this).val() != ans[k]){
                document.getElementById("output").innerHTML = "oops, wrong answer";
            }
        });
    }
    i = i+1;
    j = j+2;
}
}
    