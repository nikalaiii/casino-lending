import './styles/main.scss';

const allButtons = document.querySelectorAll('button');

for (const button of allButtons) {
  button.addEventListener('click', () => {
    showNotification('button clicked!!!');
    console.log('clicked');
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
}

const banner = document.querySelector('.banner');

banner.addEventListener('click', () => {
     showNotification('banner clicked!')
})