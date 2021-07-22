import React, { useEffect } from "react";

const DynamicText = () => {
    /* animation défilement texte*/
  let array = ["24h/24 et 7j/7", "plomberie", "sanitaire", "chauffage", "dépannage", "installation"];
  let wordIndex = 0;
  let letterIndex = 0;

  useEffect(() => {
    const target = document.getElementById("text-target");

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 9s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop();
          }, 2000);
        }
      }, 80);
    };
    loop();
  }, []);

  return (
    <span className="dynamic-text">
      <span className="simply">Services : </span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;