document.addEventListener("DOMContentLoaded", function() {
    function spawnStar() {
      const star = document.createElement("div");
      star.className = "star";
      star.style.opacity = "0";
  
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = centerX + (Math.random() - 0.5) * window.innerWidth;
      const y = centerY + (Math.random() - 0.5) * window.innerHeight;
  
      star.style.left = centerX + "px"; // Start at the center
      star.style.top = centerY + "px";
  
      document.querySelector(".stars-container").appendChild(star);
  
      const size = Math.random() * 5 + 1; // Random size between 1 and 6 pixels
      star.style.width = size + "px";
      star.style.height = size + "px";
  
      // Randomly select a color from an array of color options
      const colors = ["#ffffff", "#ff0000", "#FFA500", "#FFFF00", "#0000FF"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      star.style.backgroundColor = randomColor;
  
      // Calculate the angle and distance to the edge
      const angle = Math.atan2(y - centerY, x - centerX);
      const distance = Math.max(window.innerWidth, window.innerHeight);
  
      // Animate the star
      star.animate(
        [
          { left: centerX + "px", top: centerY + "px", offset: 0 },
          {
            left: centerX + Math.cos(angle) * distance + "px",
            top: centerY + Math.sin(angle) * distance + "px",
            offset: 1,
          },
        ],
        {
          duration: 20000,
          easing: "linear",
          fill: "forwards",
        }
      ).onfinish = () => {
        star.remove();
      };
  
      setTimeout(() => {
        star.style.opacity = "1";
      }, Math.random() * 3000);
    }
  
    function spawnStars() {
      setInterval(spawnStar, 160);
    }
  
    spawnStars();
  });
  