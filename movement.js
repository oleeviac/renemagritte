//main page hover over svg to reveal text

const svg = document.querySelector("#pipe");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");


  
if (svg) {
  svg.addEventListener("mouseover", () => {
    text1.style.display = "none";
    text2.style.display = "block";
  });

  svg.addEventListener("mouseout", () => {
    text1.style.display = "block";
    text2.style.display = "none";
  });
}


//gallery page hover over text to reveal image

const projectImg = document.querySelector('.project-img');
const circleCursor = document.querySelector('.circle-cursor');

function updateProjectImgCenter() {
  const imgRect = projectImg.getBoundingClientRect();
  const centerX = mouseX - imgRect.left;
  const centerY = mouseY - imgRect.top;
  projectImg.style.setProperty('--center-x', `${centerX}px`);
  projectImg.style.setProperty('--center-y', `${centerY}px`);
}

document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  updateProjectImgCenter();
});
