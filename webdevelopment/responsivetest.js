// Toggle Mobile Menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(e) {
  e.preventDefault(); 
  menu.classList.toggle('active'); 
  const icon = toggle.querySelector('i');

  if (menu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
}

toggle.addEventListener('click', toggleMenu);

// Submenu toggle
const items = document.querySelectorAll('.item');

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else {
    
    items.forEach(item => item.classList.remove("submenu-active"));
    this.classList.add("submenu-active");
  }
}

items.forEach(item => {
  if (item.querySelector('.submenu')) {
    item.addEventListener('click', toggleItem);
    item.addEventListener('keypress', toggleItem);
  }
});

const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    }
  });
});
