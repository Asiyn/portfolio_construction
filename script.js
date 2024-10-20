window.addEventListener('load', adjustLightRayPosition);
window.addEventListener('resize', adjustLightRayPosition);

function adjustLightRayPosition() {
    const handWrapper = document.querySelector('.hand-wrapper');
    const lightRay = document.querySelector('.light-ray');

    if (handWrapper && lightRay) {
        const handRect = handWrapper.getBoundingClientRect();
        const handCenterX = handRect.left + handRect.width / 2;
        const handCenterY = handRect.top + handRect.height / 2;

        // Adjust the light-ray's position
        lightRay.style.left = `${handCenterX}px`;
        lightRay.style.top = `${handCenterY}px`;
    }
}

// ----------------------------------------------------------------

// Function to set image position based on span position
function positionImage(span, image) {
    const rect = span.getBoundingClientRect();
    image.style.left = `${rect.left}px`;
    image.style.top = `${rect.top}px`;
}

// Animation hover effect
document.getElementById('animation').addEventListener('mouseover', function() {
    const animationImg = document.getElementById('animation-img');
    positionImage(this, animationImg); // Position image based on the span
    animationImg.style.opacity = "0.3";
    animationImg.style.transform = "translateY(-20px) translateX(-80px) scale(0.7) rotate(-10deg)";
  });
  
  document.getElementById('animation').addEventListener('mouseout', function() {
    const animationImg = document.getElementById('animation-img');
    animationImg.style.opacity = "0";
    animationImg.style.transform = "translateY(-10px) translateX(-40px) scale(0.5) rotate(0deg)";
  });
  
  // Illustration hover effect
  document.getElementById('illustrations').addEventListener('mouseover', function() {
    const illustrationImg = document.getElementById('illustration-img');
    positionImage(this, illustrationImg); // Position image based on the span
    illustrationImg.style.opacity = "0.2";
    illustrationImg.style.transform = "translateY(-30px) translateX(-70px) scale(0.7) rotate(-10deg)";
  });
  
  document.getElementById('illustrations').addEventListener('mouseout', function() {
    const illustrationImg = document.getElementById('illustration-img');
    illustrationImg.style.opacity = "0";
    illustrationImg.style.transform = "translateY(-20px) translateX(-60px) scale(0.5) rotate(0deg)";
  });

  // Photoshop hover effect
  document.getElementById('illustrations').addEventListener('mouseover', function() {
    const illustrationImg = document.getElementById('photoshop-img');
    positionImage(this, illustrationImg); // Position image based on the span
    illustrationImg.style.opacity = "0.4";
    illustrationImg.style.transform = "translateY(0px) translateX(230px) scale(0.7) rotate(10deg)";
  });
  
  document.getElementById('illustrations').addEventListener('mouseout', function() {
    const illustrationImg = document.getElementById('photoshop-img');
    illustrationImg.style.opacity = "0";
    illustrationImg.style.transform = "translateY(-10px) translateX(180px) scale(0.5) rotate(0deg)";
  });
  
  // Filmmaking hover effect
  document.getElementById('filmmaking').addEventListener('mouseover', function() {
    const filmmakingImg = document.getElementById('filmmaking-img');
    positionImage(this, filmmakingImg); // Position image based on the span
    filmmakingImg.style.opacity = "0.3";
    filmmakingImg.style.transform = "translateY(-10px) translateX(-40px) translateX(300px) scale(0.75) rotate(7deg)";
  });
  
  document.getElementById('filmmaking').addEventListener('mouseout', function() {
    const filmmakingImg = document.getElementById('filmmaking-img');
    filmmakingImg.style.opacity = "0";
    filmmakingImg.style.transform = "translateY(0px) translateX(200px) scale(0.5) rotate(-50deg)";
  });

// --------------------------------------------------------------------------

const handImage = document.querySelector('.hand-img');
const container = document.querySelector('.hand-wrapper');
const lightRay = document.querySelector('.light-ray');

// Set the movement factor (how far the image moves relative to the mouse)
const movementFactor = 2.5;
const rotationFactor = 0.5; // Rotation in degrees

// Function to move the hand image and adjust the light ray based on mouse position
function handleMouseMove(event) {
    const { clientX, clientY } = event;

    // Get the center position of the container
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    // Calculate the movement based on the mouse position relative to the container's center
    const moveX = (clientX - containerCenterX) / containerRect.width * movementFactor;
    const moveY = (clientY - containerCenterY) / containerRect.height * movementFactor;

    // Apply transform to the hand image with slight rotation based on vertical movement
    const rotation = (clientY - containerCenterY) / containerRect.height * rotationFactor;

    handImage.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg)`;

    // Adjust the light-ray's position to follow the center of the hand
    adjustLightRayPosition(containerCenterX + moveX, containerCenterY + moveY);
}

// Function to adjust the light-ray's position
function adjustLightRayPosition(handCenterX, handCenterY) {
    if (lightRay) {
        // Adjust the light-ray's position relative to the hand's movement
        lightRay.style.left = `${handCenterX}px`;
        lightRay.style.top = `${handCenterY}px`;
    }
}

// Add mousemove event listener to track mouse movements
document.addEventListener('mousemove', handleMouseMove);

// Ensure the light ray's position adjusts correctly when the page loads or resizes
window.addEventListener('load', () => {
    const handRect = container.getBoundingClientRect();
    adjustLightRayPosition(handRect.left + handRect.width / 2, handRect.top + handRect.height / 2);
});

window.addEventListener('resize', () => {
    const handRect = container.getBoundingClientRect();
    adjustLightRayPosition(handRect.left + handRect.width / 2, handRect.top + handRect.height / 2);
});
