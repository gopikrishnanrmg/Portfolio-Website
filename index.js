const words = ["Hello", "Bonjour", "こんにちは", "Hallo", "Hola", "你好"];
const target = document.querySelector(".hello");
let currentWord = 0;
target.textContent = words[currentWord];

setInterval(() => {
  currentWord = (currentWord + 1) % words.length;
  target.textContent = `${words[currentWord]}`;
}, 2000);
