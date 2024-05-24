// array of images
const images = [
    '3.jpeg',    // images[0]
    '2.jpeg',    // images[1]
    '4.jpeg',    // images[2]
    '5.jpeg',    // images[3]
    '1.jpeg'     // images[4]
];

const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
let rotate;

function updateImage() {
    const imageTag = document.getElementById('image');
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1);
}

// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{
        
        const imageTag = document.getElementById('image');
        currentImage++;
        if (currentImage > lastImage) {
            currentImage = firstImage;
        }
        updateImage();
        // Pause auto rotation
        clearInterval(rotate); 
        
    });

// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', ()=>{

    const imageTag = document.getElementById('image');
    currentImage--;
   if (currentImage < firstImage) {
        currentImage = lastImage;
    }
    updateImage();
    // Pause auto rotation
    clearInterval(rotate);
});

// auto
const autoBtn = document.getElementById('auto');
autoBtn.addEventListener('click', () => {
    clearInterval(rotate); // Clear any existing interval 
    rotate = setInterval(() => {
        currentImage++;
        if (currentImage > lastImage) {
            currentImage = firstImage;
        }
        updateImage();
    }, 3000); // Change image every 3 seconds
});