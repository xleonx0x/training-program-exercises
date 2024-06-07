console.log("Exercise 2")

const main = document.querySelector("#display-box")

// const text1 = document.querySelector("#text1");
// const text2 = document.querySelector("#text2");
// const text3 = document.querySelector("#text3");

// const name = "text";

for (let i = 1; i < 4; i++) {
    let text = document.querySelector("#text"+i);
    let btn = document.querySelector("#btn"+i);

    btn.addEventListener("mouseover",() =>{
        main.innerHTML = text.innerHTML;    
    })
    btn.addEventListener("mouseout",() =>{
        text.style.display = "none";
    })
}

// const {name} - document.querySelector("{name}+i")

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");

// btn1.addEventListener("mouseover",() =>{
//     text1.style.display = "";
// })

// btn2.addEventListener("mouseover",() =>{
//     text2.style.display = "";
// })

// btn3.addEventListener("mouseover",() =>{
//     text3.style.display = "";
// })