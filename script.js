document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    
    // Add event listeners to each drum-pad element
    document.querySelectorAll(".drum-pad").forEach(pad => {
      pad.addEventListener("click", () => playSound(pad.innerText));
    });
  
    // Listen for keydown events
    document.addEventListener("keydown", (e) => {
      if ("QWEASDZXC".includes(e.key.toUpperCase())) {
        playSound(e.key.toUpperCase());
      }
    });
  
    // Function to play sound and display text
    function playSound(letter) {
      const audio = document.getElementById(letter);
      const pad = audio.parentElement;
  
      // Play the audio and update the display
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        display.innerText = pad.id;
      }
    }
  });
  