let x = document.getElementById("Sqr1");
x.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100)
   x.innerHTML = `<h1>${r}</h1>`;
})
x.addEventListener("mouseleave",function(){
    x.innerHTML = "<h1>1</h1>";
})

let y = document.getElementById("Sqr3");
let clr = "green"
y.addEventListener("mouseenter",function(){
    if(clr=="green"){
        y.style.backgroundColor = "green";
       clr = "Red"
    }
    else if(clr=="Red"){
        y.style.backgroundColor = "Red";
        clr ="Skyblue";
    }
    else{
        y.style.backgroundColor = "Skyblue"
        clr = "green"
    }
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor = "White";
})

let z = document.getElementById("Sqr2");
z.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*250);
    let r2 = Math.floor(Math.random()*250);
    let r3 = Math.floor(Math.random()*250); 
    z.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor = "White";
})

let a = document.getElementById("Sqr4");
a.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*250);
    let r2 = Math.floor(Math.random()*250);
    let r3 = Math.floor(Math.random()*250);
    x.style.backgroundColor = `rgb(${r1},250,250)`;
    y.style.backgroundColor = `rgb(250,${r2},250)`;
    z.style.backgroundColor = `rgb(250,250,${r3})`;
})
a.addEventListener("mouseleave",function(){
    x.style.backgroundColor = "White";
    y.style.backgroundColor = "White";
    z.style.backgroundColor = "White";
})