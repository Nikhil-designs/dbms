// navbar js
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
// //theme
const themeSwitch = document.getElementById('theme-switch');
let darkmode = localStorage.getItem('darkmode');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

// Apply dark mode if previously enabled
if (darkmode === 'active') {
  enableDarkmode();
}

// Toggle on button click
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});
//cursor
window.onload = () => {
  const cursor = document.querySelector('.custom-cursor.site-wide');
  const cursorDefault = document.getElementById('cursor-default');
  const cursorHover = document.getElementById('cursor-hover');

  // Show/hide cursor on entering/leaving window
  document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });

  // Cursor follows mouse
  document.addEventListener('mousemove', (e) => {
    const w = cursor.clientWidth;
    const h = cursor.clientHeight;
    cursor.style.transform = `translate(${e.clientX - w/1.8 }px, ${e.clientY - h / 5}px)`;

    const isClickable = e.target.closest('a, button, input, textarea, select, [role="button"]');
    if (isClickable) {
      cursorDefault.style.display = 'none';
      cursorHover.style.display = 'block';
    } else {
      cursorDefault.style.display = 'block';
      cursorHover.style.display = 'none';
    }
  });
};

