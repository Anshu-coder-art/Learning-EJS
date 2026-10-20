const btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("mouseover",()=>{
        // console.log("button was clicked!");
        btn.style.cursor="pointer";
    })
}