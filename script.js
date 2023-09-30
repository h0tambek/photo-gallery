function openPopup(imageSrc, paragraphText) {
  var popup = document.getElementById('popup');
  var popupImage = document.getElementById('popupImage');
  var popupText = document.getElementById('popupText');

  popupImage.src = imageSrc;
  popupText.textContent = paragraphText;
  popup.style.display = 'block';  }

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

popup.addEventListener('click', closePopup);

// animation stuff
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const elements = document.getElementsByClassName("typing-animation");
const elements2 = document.getElementsByClassName("tag");

(async (typedElements) => {
   let texts = []
   
   for (let element of typedElements){
    texts.push(element.innerHTML);
    element.innerHTML = "";
   }
   
   for (let i = 0; i < texts.length; i++) {
      for (let character of texts[i]) {
        typedElements[i].innerHTML += character;
        await sleep(200)
      } 
   }
})(elements);
(async (typedElements) => {
  let texts = []
  
  for (let element of typedElements){
   texts.push(element.innerHTML);
   element.innerHTML = "";
  }
  
  for (let i = 0; i < texts.length; i++) {
     for (let character of texts[i]) {
       typedElements[i].innerHTML += character;
       await sleep(300)
     } 
  }
})(elements2);

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.fade-in-image');
  
  images.forEach((image, index) => {
    const randomDelay = Math.random() * 5; // spawn pics in how many seconds? currently: 1.7s
    
    image.style.animation = `fadeIn 1s ${randomDelay}s forwards`;
  });
});
 document.getElementById("style1").addEventListener("input", function() {
  document.body.style.backgroundColor = this.value;
 
}, false);
