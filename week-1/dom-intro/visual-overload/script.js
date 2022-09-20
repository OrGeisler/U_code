const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }
for (let index = 0; index <= 10; index++) {
    const newBox = document.createElement("div")
    newBox.setAttribute("class","box")
    newBox.style.backgroundColor = getRandomColor()
    document.getElementById("container").appendChild(newBox)
    newBox.onmouseenter = function () {
        newBox.style.backgroundColor = getRandomColor()
    }
}

