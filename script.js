//setTimout(function(){
    // console.log("Hello World");
//}, 3000);
// its a function to delay execution of code by specified milliseconds

// ex:
// console.log("Start");

// setTimeout(()=>{
//     console.log("This is delayed message");
// },3000)

//mini project

// var btn= document.querySelector("button");
// var h1= document.querySelector("h1");

// btn.addEventListener("click", function(){
//     console.log('button clcked');
//     h1.innerHTML= "Loading....";
    
//    setTimeout(function(){
//     h1.innerHTML= "Hello Im Nasser";        
//    }, 2000);
// });



//SETTIMEOUT

// setInterval(function(){
//     console.log(new Date().toLocaleTimeString());
//     console.log("updated time every second");
    
// }, 1000);
// it will print time every second

// var a=0;
// var loop = setInterval(function(){
//     a++;
//     console.log(a);
// },100);

// // setTimeout( () => {
// //     clearInterval(loop);
// //     console.log("Interval cleared");
// // }, 5000);

// var btn= document.querySelector("button");

// btn.addEventListener("click", function(){
//     clearInterval(loop);
//     console.log("Interval cleared");
// });


//PROJECT START

var grow=0;
var btn =document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('.inner');

btn.addEventListener('click', function(){
    btn.style.pointerEvents= "none";

    var num = 50 + Math.floor(Math.random()*50);
    console.log(num);
    
    

    var int =setInterval( () =>{
        grow++;
        h2.innerHTML = grow + '%';   
        inner.style.backgroundColor= "orange";
        inner.style.width = grow + '%';
    }, num);

    setTimeout( () => {
        // alert("Download Complete");
        clearInterval(int);
        btn.innerHTML="Downloaded";
        btn.style.opacity= "0.6";
    }   , num * 100);
});
    