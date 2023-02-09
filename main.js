const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const scrollingContent = document.getElementById('scrolling-content');

scrollLeftBtn.addEventListener('click', () => {
  scrollingContent.scrollLeft -= 50;
});

scrollRightBtn.addEventListener('click', () => {
  scrollingContent.scrollLeft += 50;
});

