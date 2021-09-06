var _ = require('lodash')

var css = document.querySelector("h3")
var col1 = document.querySelector(".color1")
var col2 = document.querySelector(".color2")
var bg = document.getElementById("gradient")

function pickCol() {
    var gradientStr = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")"
    bg.style.background = ("background", gradientStr)
    css.textContent = gradientStr + ";"
}

col1.addEventListener("input", pickCol)
col2.addEventListener("input", pickCol)

pickCol()
let arr = [1,2,3,4,5,6,7,8]
console.log(_.without(arr, 3))