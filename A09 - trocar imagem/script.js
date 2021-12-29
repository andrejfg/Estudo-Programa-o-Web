const listaDeImagens = ['./images/matrix.png','./images/laranjamecanica.jpg', './images/oresgatedosoldado.jpg', './images/poderosochefao.jpg', './images/vingadores.jpg'];

function caminhoDeImagemAleatoria(listaDeImagens){
  return listaDeImagens[Math.floor(Math.random() * (5))]
}
function trocarImagem(){
  imagem.src = caminhoDeImagemAleatoria(listaDeImagens);
}


const button = document.querySelector('button');
const imagem = document.querySelector('picture img');

imagem.src = caminhoDeImagemAleatoria(listaDeImagens);


button.addEventListener('click',trocarImagem);


