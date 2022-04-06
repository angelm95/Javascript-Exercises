const light = document.querySelector('#plant');
light.addEventListener('click', function(e){
   
    e.target.classList.toggle('plant-4')
    light.classList.add('playing')
})

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const transition = document.querySelectorAll('.plant-3');
transition.forEach(light => light.addEventListener('transitionend',removeTransition));

