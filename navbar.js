const Slide = () => {
  const strip3 = document.querySelector('.strip3');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');
  const ibnumar = document.querySelector('.ibnumar');
  const hasan = document.querySelector('.hasan');

  strip3.addEventListener('click', () => {
    nav.classList.toggle('nav-act');

    navlinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.7}s`;
      }
    });

    strip3.classList.toggle('toggle');

  });
/*
  ibnumar.addEventListener('click', () => {
    hasan.toggle.classList('hasan-in');
    ibnumar.toggle.classList('ibnumar-out');
  });
*/




}

Slide();
