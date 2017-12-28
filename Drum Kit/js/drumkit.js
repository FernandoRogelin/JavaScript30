function removeEfeito(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('efeito');
}

function tocaSom(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;
  key.classList.add('efeito');
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeEfeito));
window.addEventListener('keydown', tocaSom);