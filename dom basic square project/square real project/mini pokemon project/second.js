
let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/736x/69/26/58/69265832c059f8a391a847b9c54bb900.jpg",
"https://i.pinimg.com/736x/d9/89/ce/d989ce0ef8fdb6351037a46d1855d1e7.jpg",
"https://i.pinimg.com/736x/e7/61/27/e76127c562d4cc4f152d89ad6b83f2f6.jpg",
"https://i.pinimg.com/736x/1e/e4/5b/1ee45bf095dee1eefd72a58291629ab6.jpg",
"https://i.pinimg.com/736x/e9/e0/c5/e9e0c5695269859ad4c017c0cc04e433.jpg",
"https://i.pinimg.com/736x/fb/46/b7/fb46b7ff6aab58e644e22b828a86c8dd.jpg",]
let s = "";
for(let i = 1; i<=48;i++){
    let r = Math.floor(Math.random()*arr.length)
    s+=`<div class="card"><img src = ${arr[r]}></div>`
            
}
main.innerHTML = s;
