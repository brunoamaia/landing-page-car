var showModal = false

function insertModalGallery(value) {
  showModal = !showModal
  if (showModal) {
    window.document.querySelector('.modal-gallery').classList.add('enable')
    
    let modalData = document.querySelector('.modal-gallery')
    modalData.innerHTML = `
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item ${value === 0 ? 'active' :''}">
          <img src="./src/img/carousel00.jpg" class="d-block w-100" 
            alt="foto mostrando o painel do carro. É possí observar duas telas,
            sendo uma grande no meio do painel e uma pequena na frente do volante.
            Também é possivel observar os pedais de acelerador e freio"
          >
        </div>
        <div class="carousel-item ${value === 1 ? 'active' :''}">
          <img src="./src/img/carousel01.jpg" class="d-block w-100" 
            alt="foto que foca no volante do carro e as telas que ficam no painel"
          >
        </div>
        <div class="carousel-item ${value === 2 ? 'active' :''}">
          <img src="./src/img/carousel02.jpg" class="d-block w-100" 
            alt="foto mostrando duas passagerias e um motorista. As passagerias
            demonstram ter bastante espaço"
          >
        </div>
        <div class="carousel-item ${value === 3 ? 'active' :''}">
          <img src="./src/img/carousel03.jpg" class="d-block w-100" 
            alt="foto do carro embaixo de uma árvore com os faróis e alguns LEDs
            ligados"
          >
        </div>
        <div class="carousel-item ${value === 4 ? 'active' :''}">
          <img src="./src/img/carousel04.jpg" class="d-block w-100" 
            alt="foto mostrando a parte traseira do carro e a lateral esquerda
            no por do sol. As lanternas e os LEDs estão ligados"
          >
        </div>
        <div class="carousel-item ${value === 5 ? 'active' :''}">
          <img src="./src/img/carousel05.jpg" class="d-block w-100" 
            alt="foto do carro parado com a porta aberta em uma estrada de pedra
            tem uma mulher parada ao lado do carro sorrindo"
          >
        </div>
        <div class="carousel-item ${value === 6 ? 'active' :''}">
          <img src="./src/img/carousel06.jpg" class="d-block w-100" 
            alt="foto da frente do carro com o farol e os LEDs ligados. 
            Existem muitos pontos de luz no chão"
          >
        </div>
        <div class="carousel-item ${value === 7 ? 'active' :''}">
          <img src="./src/img/carousel07.jpg" class="d-block w-100" 
            alt="foto do carro em movmento em uma estrada de pedra"
          >
        </div>
        <div class="carousel-item ${value === 8 ? 'active' :''}">
          <img src="./src/img/carousel08.jpg" class="d-block w-100" 
            alt="foto do carro parado embaixo de uma árvore com as portas fechadas
            e os faróis acesos"
          >
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="close" onclick="insertModalGallery(0)"> X </div>  
      
    `
  } else {
    window.document.querySelector('.modal-gallery').classList.remove('enable')
  }

}