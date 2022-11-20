const buttons = document.querySelectorAll("[data-carousel-button]")

// app.use(express.static(path.join("views", "js")));
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})






fetch('http://127.0.0.1:3000/home/images', {
  
method: 'GET'
}).then(res => {
  
  var json = res.json()
  
  
  return json
})
.then(data => {
  
  const container = document.querySelector('.images');
  console.log(data)

  var files = data['files']
  for (var i = 0; i < files.length; i++) {
    const htmlImage = document.createElement("img");
    htmlImage.src = `public/images/${files[i]}`;
    container.appendChild(htmlImage);
  }
})
