document.addEventListener("DOMContentLoaded", () => {
    const row = document.querySelector(".oddRow");
    const container = document.querySelector(".scrollingAnim");
  
    let position = container.clientWidth; // Start at the right edge of the container
    const speed = 1.5; // Adjust speed as needed
  
    function moveRow() {
      position -= speed; // Move left
      row.style.transform = `translateX(${position}px)`;
  
      // Reset position when it fully scrolls out of view
      if (Math.abs(position) >= row.offsetWidth) {
        position = container.clientWidth; // Reset to the right side
      }
  
      requestAnimationFrame(moveRow);
    }
  
    moveRow(); // Start the animation
  });
  