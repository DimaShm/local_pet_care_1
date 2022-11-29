"use strict";

const form = document.getElementById('#form');
const email = document.getElementById('#email');
const navButtonLeft = document.getElementById('#nav_button_left');
const navButtonRight = document.getElementById('#nav_button_right');
const wrapper = document.getElementById('#testimonials_wrapper');
const content = document.getElementById('#testimonials_content');
const sortBar = document.getElementById('#sort_bar');
const sortButtons = document.querySelectorAll('.gallery__sort_button');
const menu = document.getElementById('#menu');
const blogTitle = document.getElementById('#blog_title');
const blog = document.getElementById('#blog');

const wrapperWidth = wrapper.clientWidth;
let positionLeft = content.clientLeft;

checkButtonState();

menu.addEventListener('click', (event) => {
  const element = event.target;
  if (element && !element.closest('.header__menu_item')) {
    blog.style.opacity = 0;
    return;
  }

  const list = document.querySelectorAll('.header__menu_item');

  list.forEach(item =>
    item.classList.remove('header__menu_item--active')
  );

  element.closest('.header__menu_item').classList.add('header__menu_item--active');

  if (element.closest('.header__menu_item').id !=='#blog_item') {
    blog.style.opacity = 0;
  }
});

blogTitle.onclick = () => {
  blog.style.opacity === '1' 
    ? blog.style.opacity = 0
    : blog.style.opacity = 1;
};

blog.onclick = () => {
  blog.style.opacity = 0;
}

blog.onmouseleave = () => {
  blog.style.opacity = 0;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  email.value = '';
});

function checkButtonState() {
  if (positionLeft >= 0) {
    navButtonLeft.disabled = true;
    navButtonRight.disabled = false;
  }

  if (positionLeft - wrapperWidth <= -content.clientWidth) {
    navButtonLeft.disabled = false;
    navButtonRight.disabled = true;
  }  
}

navButtonRight.onclick = () => {
  positionLeft -= wrapperWidth; 
  content.style.cssText = `left: ${positionLeft}px;`;
  checkButtonState();
};

navButtonLeft.onclick = () => {
  positionLeft += wrapperWidth; 
  content.style.cssText =  `left: ${positionLeft}px`;
  checkButtonState();
};

sortBar.addEventListener('click', (event) => {
  const element = event.target;
  if (element && !element.closest('.gallery__sort_button')) {
    return;
  }

  sortButtons.forEach(
    button => button.classList.remove('gallery__sort_button--active')
  );
  element.classList.add('gallery__sort_button--active');
});
