const arrowLeft = document.querySelector(".arrow1")
const arrowRight = document.querySelector(".arrow2")
const slideItem = document.querySelectorAll(".slider_item")

var indexFotos = ["1", "2", "3", "4", "5"]

function passarSlide(event) {
  let eventTarget = event
  console.log(eventTarget.target.className)
  if (eventTarget.target.className === "arrow1") {
    indexFotos.unshift(indexFotos.pop());
    mudarImagem()
  }
  else {
    indexFotos.push(indexFotos.shift())
    mudarImagem()
  }
}

function mudarImagem() {
  let content = ""
  slideItem.forEach((item, index) => {
    item.innerHTML = '<img src="./assets/image-slide-' + indexFotos[index] + '.jpg" alt="">'
  })
}
arrowLeft.addEventListener("click", passarSlide)
arrowRight.addEventListener("click", passarSlide)