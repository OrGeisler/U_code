const moveUp = function () {
  const value = parseInt(ball.style.top) || 0
  ball.style.top = (value - 25) + "px"
}
    
const moveLeft = function () {
  const value = parseInt(ball.style.left) || 0
  ball.style.left = (value - 25) + "px"
}
        
const moveRight = function () {
  const value = parseInt(ball.style.left) || 0
  ball.style.left = (value + 25) + "px"
}
            
const moveDown = function () {
  const value = parseInt(ball.style.top) || 0
  ball.style.top = (value + 25) + "px"
}


addEventListener("keydown", (event) => {
    if (event.code === "ArrowDown"){
        moveDown()
    }
    else if (event.code === "ArrowUp"){
        moveUp()
    }
    else if (event.code === "ArrowRight"){
        moveRight()
    }
    else if (event.code === "ArrowLeft"){
        moveLeft()
    }
  });