for(let i=0; i<6; i++){
    const box = document.createElement("div")
    box.setAttribute("id", `box${i}`)
    box.setAttribute("class", "boxes")
    box.setAttribute("onmouseenter", "color(this.id)")
    document.getElementById("container").appendChild(box)
}

const randomColor = function(){
    const r = Math.floor(Math.random() * Math.floor(255))
    const b = Math.floor(Math.random() * Math.floor(255))
    const g = Math.floor(Math.random() * Math.floor(255))
    return `rgb( ${r}, ${g}, ${b})`
}
const color = function(id){
    const color = randomColor()
    document.getElementById(id).style.backgroundColor = color
    
}


