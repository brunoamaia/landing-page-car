var showModal = false;

const urls = [
  "./src/img/carousel00.jpg", 
  "./src/img/carousel01.jpg", 
  "./src/img/carousel02.jpg", 
  "./src/img/carousel03.jpg", 
  "./src/img/carousel04.jpg", 
  "./src/img/carousel05.jpg", 
  "./src/img/carousel06.jpg", 
  "./src/img/carousel07.jpg", 
  "./src/img/carousel08.jpg"
]
const labels = [
  "foto mostrando o painel do carro. É possí observar duas telas, sendo uma grande no meio do painel e uma pequena na frente do volante. Também é possivel observar os pedais de acelerador e freio",
  "foto que foca no volante do carro e as telas que ficam no painel",
  "foto mostrando duas passagerias e um motorista. As passagerias demonstram ter bastante espaço",
  "foto do carro embaixo de uma árvore com os faróis e alguns LEDs ligados",
  "foto mostrando a parte traseira do carro e a lateral esquerda no por do sol. As lanternas e os LEDs estão ligados",
  "foto do carro parado com a porta aberta em uma estrada de pedra tem uma mulher parada ao lado do carro sorrindo",
  "foto da frente do carro com o farol e os LEDs ligados. Existem muitos pontos de luz no chão",
  "foto do carro em movmento em uma estrada de pedra",
  "foto do carro parado embaixo de uma árvore com as portas fechadas e os faróis acesos"
]

function resetClassOfPicture() {
  window.document.querySelector('.frame-modal').classList.remove('animate-right');
  window.document.querySelector('.frame-modal').classList.remove('animate-left');
}

function changeToPrevPicture(value){
  window.document.querySelector('.frame-modal').classList.add('animate-right');
  window.document.querySelector('.control').innerHTML = insertControlButtons(value);
  document.querySelector('.picture').innerHTML = `
    <img src="${urls[value]}" alt="${labels[value]}">
  `;
  setTimeout(resetClassOfPicture, 500);
}

function changeToNextPicture(value){
  window.document.querySelector('.frame-modal').classList.add('animate-left');
  window.document.querySelector('.control').innerHTML = insertControlButtons(value);
  document.querySelector('.picture').innerHTML = `
    <img src="${urls[value]}" alt="${labels[value]}">
  `;
  setTimeout(resetClassOfPicture, 500);
}

function insertControlButtons(value) {
  return `
  <button class="prev" type="button" 
    onclick="changeToPrevPicture(${(value-1 >= 0) ? value-1 : labels.length-1})"
  >
    <strong>
      <img src="./src/icons/arrow-left-w.svg" alt="seta para a esquerda">
    </strong>
  </button>
  <button class="next" type="button" 
    onclick="changeToNextPicture(${(value+1 < labels.length) ? value+1 : 0})"
  >
    <strong>
      <img src="./src/icons/arrow-right-w.svg" alt="seta para a esquerda">
    </strong>
  </button>
  `;
}

function insertModalGallery(value) {
  showModal = !showModal;
  if (showModal) {
    window.document.querySelector('.modal-gallery').classList.add('enable');
    
    let modalData = document.querySelector('.modal-gallery');
    modalData.innerHTML = `
    <div class="frame-modal">
      <div class="container-modal">
        <div class="picture" >
          <img src="${urls[value]}" alt="${labels[value]}">
        </div>
        <div class="control"> 
          ${insertControlButtons(value)}
        </div>
      </div>
    </div>
    <div class="close" onclick="insertModalGallery(0)"> X </div>  
    `;
  } else {
    window.document.querySelector('.modal-gallery').classList.remove('enable');
  }
}
