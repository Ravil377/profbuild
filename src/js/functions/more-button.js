const button = document.getElementById('toggleButton');
const list = document.getElementById('toggleList');

button?.addEventListener('click', () => {
    list.classList.toggle('_open');
    list.classList.contains('_open')
        ? button.textContent = 'Свернуть все'
        : button.textContent = 'Показать все';
})
