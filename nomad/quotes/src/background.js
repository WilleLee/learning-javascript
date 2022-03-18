const images = ["0.jpeg", "1.jpg", "2.jpg"];


const chosenImg = images[Math.floor( Math.random() * images.length )];


const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);
// appendChild = add html