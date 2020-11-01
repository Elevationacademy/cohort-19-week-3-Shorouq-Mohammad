const ball = document.getElementById("block")
let leftA = 0
let rightA =500 
let upA =0 
let downA = 500 

const up = document.getElementById("up")
const upClick = function (){
    if(downA < 500){
        downA += 15
        upA -=15
        ball.style.bottom = downA +"px"
        ball.style.top = upA + "px"
    }
   
}
up.onclick= upClick

const left = document.getElementById("left")
const leftClick = function (){
    
    if(rightA < 500){
        rightA += 15
        leftA -=15
        ball.style.right = rightA + "px"
        ball.style.left = leftA +"px"
    }
}
left.onclick = leftClick

const right = document.getElementById("right")
const rightClick = function (){
    
    if(leftA < 500){
        leftA +=15
        rightA -=15
        ball.style.left = leftA +"px"
        ball.style.right = rightA + "px"
    }

}
right.onclick = rightClick

const down = document.getElementById("down")
downClick = function (){
    
    if(upA < 500 ){
        upA += 15
        downA -=15
        ball.style.top = upA + "px"
        ball.style.bottom = downA + "px"
    }
}
down.onclick = downClick

document.addEventListener('keydown', logKey);

function logKey(e) {
//   log.textContent += ` ${e.code}`;
    // console.log(e)
    if(e.keyCode == 37){
        leftClick()
    }else if(e.keyCode == 38){
        upClick()
    }else if(e.keyCode == 39){
        rightClick()
    }else if(e.keyCode == 40){
        downClick()
    }

}