
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
  event.preventDefault();
  const input = prompt('Введите текст:');
  if (input) {
    link.textContent = input;
  }
});