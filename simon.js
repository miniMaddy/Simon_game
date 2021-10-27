"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
function start(){
var i = 0;
var j = 4;
var arr = [1,2,3,4];
var ans = [];
// playing the game only 20 times
while(i < 20){ 
    // Putting random numbers from 1 to 4
    for(var k = 0; k<j; k++){
        ans.push(arr[Math.floor(Math.random()*arr.length)]);
    }
    // Changing the background colours to show the sequence
    for(var k = 0; k<j; k++){
        setTimeout(function() {
            document.getElementById(ans[k].toString()).style.backgroundColor = "blue";
        }, 1000);
        document.getElementById(ans[k].toString()).style.backgroundColor = "green";
    }
    // declaring a function to check the input of the user
    function answer(index){
        $("button").click(function(){
            if((ans[index].toString == $(this).val()) && index<j){
                answer(index+1);  // recursively calling the function
                return;
            }
            else if(index >= j){
                return;
            }
            else{
                document.getElementById("output").innerHTML = "oops, wrong answer";
            }
        });
        return;
    }
    // calling the function
    answer(0);
    i = i+1; //increasing the counter
    j = j+2; //increasing the size of the counter
}
}


    