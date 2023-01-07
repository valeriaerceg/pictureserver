var buttons;
var container;
var offset = 0;
var imageSources = [];
var activeIndex = 0;
var currentImage;

fetch('http://127.0.0.1:3000/home/images', {
  
method: 'GET'
}).then(res => {
  var json = res.json()
  return json
})
.then(data => {
  
  const container = document.querySelector('.images');

  console.log(data)

  var files = data['files'];

  for (var i = 0; i < files.length; i++) {
    if (i == 0) {
      const slide =  document.querySelector(".slide");
      slide.src = `public/images/${files[0]}`;
      slide.setAttribute('data-active', 'true');
      currentImage = slide;
    }
    imageSources.push(`public/images/${files[i]}`);
  }
  console.log(imageSources);
}).then(() => {
container = document.querySelector('.images');
let images = container.querySelectorAll("img");
buttons = document.querySelectorAll("[data-carousel-button]");

  buttons.forEach(button => { 
    button.addEventListener("click", () => {

      const attribute = button.getAttribute("data-carousel-button");
      if (attribute === "next") {
        offset = 1;
      }
      if (attribute === "prev") {
        offset = -1;
      }
    
      var newIndex = activeIndex + offset;


      if (newIndex < 0) // if the newIndex is negative, go backwards
        newIndex = imageSources.length - 1;
      if (newIndex >= imageSources.length) // if the newIndex is greater than the total number of images, reset
        newIndex = 0;
            
      function updateOpacity(i) {
        setTimeout(function() {
            currentImage.style.opacity = i*0.01;
            console.log(i*0.01);
        }, 6 * i);
      }

      for (var i = 60; i < 100; ) { 
        console.log(`opacity: ${i*0.01}`);
        updateOpacity(i);
        if (i < 80) { 
          i+=2;
        } else if (i == 80) {
          currentImage.src = imageSources[newIndex]; 
          i+=1;
        } else { 
          i+=1;
        }
      }

      activeIndex = newIndex;
          
    })
    
    

  })
});



