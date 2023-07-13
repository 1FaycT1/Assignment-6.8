// Получаем ссылки на форму, текстовое поле, текстовый блок и кнопку
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const textBlock = document.querySelector('#duplicateField');
const button = document.querySelector('button[type="submit"]');

// Функция для обработки отправки формы
const handleSubmit = (event) => {
  event.preventDefault(); // Отменяем стандартное поведение формы

  const text = input.value; // Получаем значение из текстового поля
  console.log(textBlock.textContent); // Выводим содержимое текстового блока в консоль

  textBlock.textContent += text; // Добавляем текст в текстовый блок

  input.value = ''; // Очищаем текстовое поле
};

// Добавляем обработчик события "submit" для отправки формы
form.addEventListener('submit', handleSubmit);

// Функция для обработки нажатия на кнопку
const handleButton = () => {
  console.log(textBlock.textContent); // Выводим содержимое текстового блока в консоль
  textBlock.textContent = ''; // Очищаем текстовый блок
};

// Добавляем обработчик события "click" для кнопки
button.addEventListener('click', handleButton);