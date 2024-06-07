console.log("Yay! The javascript is running")

const nameElement = document.querySelector("#name");

nameElement.innerHTML = "Jebez"

document.querySelector("#bigger").style.color = "green";
document.querySelector("#bigger").style.fontSize = "100px";

const squares = document.querySelectorAll(".square");

for (const square of squares) {
    square.classList.remove("hidden");
    square.style.backgroundColor = "green";
}

document.querySelector("#cat_img").src = "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg";

// Cat picture source 
// https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg
