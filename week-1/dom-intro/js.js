const clickColor = function () {
    box.style.backgroundColor = "#8e44ad"
}

const list = document.getElementsByClassName("myList")
function addItem () {
    const item = document.createElement("li")
    item.innerHTML = "im new"
    list.appendChild(item)
}