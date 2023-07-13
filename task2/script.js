function handleClick() {
    if (this.id === 'consoleLog') {
      console.log('Служит для вывода информации в консоль');
      alert('Служит для вывода информации в консоль');
    } else if (this.id === 'alert') {
      alert('Другое диалоговое окно');
    } else if (this.id === 'prompt') {
        const name = prompt('Введите ваше имя');
        console.log('Привет, ' + name);
    }
  }
  
  const consoleLog = document.querySelector('#consoleLog');
  consoleLog.addEventListener('click', handleClick);
  
  const alertButton = document.querySelector('#alert');
  alertButton.addEventListener('click', handleClick);
  
  const promptButton = document.querySelector('#prompt');
  promptButton.addEventListener('click', handleClick);