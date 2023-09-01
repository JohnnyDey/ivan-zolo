const map = {
  'A': 'А',
  'B': 'В',
  'C': 'С',
  'D': 'Д',
  'E': 'Е',
  'F': 'Е',
  'G': 'С',
  'H': 'Н',
  'I': 'И',
  'J': ['Л', 'У'],
  'K': 'К',
  'L': 'Г',
  'M': 'М',
  'N': 'И',
  'O': 'Щ',
  'P': 'Р',
  'Q': 'О',
  'R': 'Я',
  'S': 'С',
  'T': 'Т',
  'U': 'И',
  'V': 'Л',
  'W': 'М',
  'X': 'Х',
  'Y': 'У',
  'Z': 'И',
  'a': 'а',
  'b': 'ь',
  'c': 'с',
  'd': ['р', 'ь'],
  'e': 'е',
  'f': 'п',
  'g': 'д',
  'h': 'п',
  'i': ['у', 'и'],
  'j': 'у',
  'k': 'к',
  'l': ['л', 'т', 'п'],
  'm': 'т',
  'n': 'п',
  'o': 'о',
  'p': 'р',
  'q': ['ф', 'о'],
  'r': 'г',
  's': 'с',
  't': 'т',
  'u': 'и',
  'v': 'л',
  'w': 'м',
  'x': 'х',
  'y': 'у',
  'z': 'и',
}

function speak(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const click = function translate() {
  const text = document.getElementById('phrase').value;
  let result = '';
  for(let i = 0; i < text.length; i++) {
    const swap = map[text[i]]
    result += swap ? (swap.length ? swap[getRandomInt(swap.length)] : swap) : text[i];
  }
  const resultField = document.getElementById('result');
  resultField.value = result;
  const textField = document.getElementById('translate');

  document.getElementById('speak').disabled = false;
}

window.onload = function() {
  document.getElementById('translate').addEventListener('click', click);
  document.getElementById('phrase').addEventListener('input', function() {
      this.value = this.value.replace(/[А-ЯЁа-яё]/, "");
  });
  document.getElementById('speak').addEventListener('click', () => {
    speak(document.getElementById('result').value)
  });
};


