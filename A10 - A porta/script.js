function abrirPorta(event){
  const portaFechada = document.querySelector("#portafechada");
  const portaAberta = document.querySelector('#portaaberta');
  portaAberta.classList.remove('hidden');
  portaFechada.classList.add('hidden');

  const somPortaFechada = document.querySelector("#portafechada audio");
  const somPortaAberta = document.querySelector("#portaaberta audio");

  somPortaAberta.pause();
  somPortaAberta.currentTime = 0;
  
  somPortaFechada.play();

  const relatorio = document.querySelector("#relatorio");
  const data = new Date();
  

  const log = document.createElement('p');
  log.textContent = ++contador + ': Porta abriu - ' +  data.toLocaleDateString('pt-BR') + ' - ' +  data.getHours() + ':' + data.getMinutes() ;

  relatorio.appendChild(log)



}

function fecharPorta(event){
  const portaFechada = document.querySelector("#portafechada");
  const portaAberta = document.querySelector('#portaaberta');
  portaFechada.classList.remove('hidden');
  portaAberta.classList.add('hidden');

  const somPortaFechada = document.querySelector("#portafechada audio");
  const somPortaAberta = document.querySelector("#portaaberta audio");
  
  somPortaFechada.pause();
  somPortaFechada.currentTime = 0;
  
  somPortaAberta.play();

  const relatorio = document.querySelector("#relatorio");
  const data = new Date();

  const log = document.createElement('p');
  log.textContent = ++contador + ': Porta fechou - ' +  data.toLocaleDateString('pt-BR') + ' - ' +  data.getHours() + ':' + data.getMinutes() ;

  relatorio.appendChild(log)


}

let contador = 0;

const portaFechada = document.querySelector('#portafechada');
const portaAberta = document.querySelector('#portaaberta');

portaFechada.addEventListener('click',abrirPorta);
portaAberta.addEventListener('click',fecharPorta);


