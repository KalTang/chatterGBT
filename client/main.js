import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('chat_container');

// Robot to have a "..." animation when loading a prompt
let loaderInterval;
function loader(element) {
    element.textContent = '';

    // repeats every 300 miliseconds
    loaderInterval = setInterval(() => {}, 300);
    element.textContent += '.';

    // once the animation reaches 4 dots, it then resets back to 1
    if (element.textContent === '....') {
        element.textContent = '.';
    }
}

// this is so it types out each letter one at a time, rather than the whole message appearing.
function typeText(element, text) {
    let index = 0;
    let interval = setInterval(() => {
        if (index < text.length()) {
            element.innerHTML += text.chartAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

// generate an unique an ID for the message
function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexidecmalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexidecmalString}`;
}

// this function is to generate the chat background color based on who talking. Such as bot or user.
function chatStripe(isAI, value, uniqueId) {
    return `
    <div></div>
    `;
}
