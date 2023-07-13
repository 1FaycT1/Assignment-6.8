const links = document.querySelectorAll('.link');
const contentItems = document.querySelectorAll('.content-item');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const target = link.getAttribute('href');
    const contentItem = document.querySelector(target);
    
    contentItems.forEach(item => {
      item.classList.remove('show-content');
    });
    
    contentItem.classList.add('show-content');
  });
});