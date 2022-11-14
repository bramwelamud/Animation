const body=document.querySelector("body")
body.addEventListener("mousemove",(event)=>{
const xpos=event.offsetX
const ypos=event.offsetY
const spanEl=document.createElement("span")
const size=Math.random()*100;
spanEl.style.width=size+"px"
spanEl.style.height=size+"px"
spanEl.style.left=xpos+"px"
spanEl.style.top=ypos+"px"
body.appendChild(spanEl)
setTimeout(()=>{
    spanEl.remove();
},3000);
})