const audio = document.getElementById("backgroundMusic");

const audioQuery = document.querySelector("audio");
window.addEventListener("DOMContentLoaded", event => {
  audioQuery.volume = 1;
  audioQuery.play();
});

function audioController() {
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
}

let imageTracker = "i";
function imageChange() {
  const image = document.getElementById("audioController");

  if (imageTracker === "i") {
    image.src = "resources/audioControllerOff.png";
    imageTracker = "I";
  } else {
    image.src = "resources/audioControllerOn.png";
    imageTracker = "i";
  }
}

const menuBtn = document.querySelector('.menuHamburger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const list = document.querySelector('.rightBarStuff');
menuBtn.addEventListener('click', () => {
  list.classList.toggle('show');
});

const dropdownContent = document.querySelector(".dropdownContent");
function showDropdown() {
  dropdownContent.style.display = "flex";
}

function hideDropdown() {
  dropdownContent.style.display = "none";
}

function toggleDropdown() {
  if (dropdownContent.style.display === "none") {
    showDropdown();
  } else {
    hideDropdown();
  }
}
