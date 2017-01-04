window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if(!audio) return; //stop the whole function from running
  audio.currentTime = 0; //rewinding to the beginning
  audio.play();
  key.classList.add('playing');

});

function removeTransition(e){
  if (e.propertyName !=='transform') return;
  this.classList.remove('playing');
}
 const keys = Array.from(document.querySelectorAll('.key'));;
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
