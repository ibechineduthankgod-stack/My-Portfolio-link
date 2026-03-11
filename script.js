function openAccount(){
window.location="open-account.html"
}
function counter(id,target){

let count=0
let element=document.getElementById(id)

let speed = target/100

let interval=setInterval(()=>{

count+=speed

if(count>=target){
count=target
clearInterval(interval)
}

element.innerText=Math.floor(count).toLocaleString()

},20)

}

counter("users",850000)
counter("transactions",2400000)
counter("downloads",650000)

let slides = document.querySelectorAll(".slide")
let index = 0

function showSlide(){
slides.forEach(s => s.classList.remove("active"))

index++
if(index >= slides.length){
index = 0
}

slides[index].classList.add("active")
}

setInterval(showSlide,4000)
function goHome(){
window.location="index.html"
}