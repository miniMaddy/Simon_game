// function show(){
    // setTimeout(function() {
    //     document.getElementById(ans[k].toString()).style.backgroundColor = "blue";
    // }, 1000)
    // .then(() => {document.getElementById(ans[k].toString()).style.backgroundColor = "green"})
//     .then()
// }


// function start(){
// var i = 0;
// var j = 4;
// var arr = [1,2,3,4];
// var ans = [];
// while(i < 20){ 
//     for(var k = 0; k<j; k++){
//         ans.push(arr[Math.floor(Math.random()*arr.length)]);
//     }
//     for(var k = 0; k<j; k++){
        // setTimeout(function() {
        //     document.getElementById(ans[k].toString()).style.backgroundColor = "blue";
        // }, 1000);
        // document.getElementById(ans[k].toString()).style.backgroundColor = "green";
        // console.log(k);
//     }
//     function answer(index){
//         $("button").click(function(){
//             if((ans[index].toString == $(this).val()) && index<j){
//                 answer(index+1);  
//                 return;
//             }
//             else if(index >= j){
//                 return;
//             }
//             else{
//                 document.getElementById("output").innerHTML = "oops, wrong answer";
//             }
//         });
//         return;
//     }

//     answer(0);
//     i = i+1; 
//     j = j+2; 

// }
// }

function wait(){
    setTimeout(function(ans, k) {
        document.getElementById(ans[k].toString()).style.backgroundColor = "blue";
    }, 1000);
}

function start(i, j, arr){
    var ans = [];
    for(var k = 0; k<j; k++){
        ans.push(arr[Math.floor(Math.random()*arr.length)]);
    }
    show(j, ans, 0)
    .then(() => answer(ans, 0))
    .then(() =>start(i+1, j+2, arr));
}

function show(count, ans, k){
    if(count > 0){
        wait(ans, k)
        .then(() => {document.getElementById(ans[k].toString()).style.backgroundColor = "green"})
        .then(() => {show(count-1, ans, k+1)})
    }
    else{
        return;
    }
}
    
function answer(ans, k){
    $("button").click(function(){
        if((ans[index].toString == $(this).val()) && k<j){
            answer(ans, k+1);  
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