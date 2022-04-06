// var c = document.getElementById("para").innerHTML
// console.log(c)
// var d = document.querySelector(".para").getAttributeNode('class')
// console.log(d)

// document.querySelector(".para").addEventListener("click", kt)
document.querySelector(".para").onclick = kt

function kt() {
    document.querySelector(".para").classList.toggle('cerds')

}