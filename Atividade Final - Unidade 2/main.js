/* 
    Professor, ainda tinha uma ideia de adicionar imagens obtidas através de API para cada cotação, mas todas as api que encontrei tinham keys e OAUTH e ficou dificil.

    O único que consegui mesmo foi este: https://imsea.herokuapp.com/, mas estava dando erro relacionado a isso: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS

*/


const variaveis = ["code","codein","bid"]

const pares = ["USD-BRL",
               "EUR-BRL",
               "BTC-BRL",
               "DOGE-USD",
               "BTC-USD"
              ]

function atualiza_cotacao(){
  fetch("https://economia.awesomeapi.com.br/last/" + pares.join(separator = ","))
  .then(resposta =>{
    return resposta.json()
  })
  .then(corpo =>{
    const cotacao_antiga = document.getElementById("cotacao")
    if (cotacao_antiga !== null)
    cotacao_antiga.remove()
    
    const body = document.querySelector("body")
  
    const cotacao = document.createElement("div")
    cotacao.id = "cotacao"
    body.appendChild(cotacao)

    for (const par of Object.keys(corpo)){
      cotacao_valores = []
      for (const valores of Object.keys(corpo[par])){
        if (variaveis.includes(valores)){
          cotacao_valores.push(corpo[par][valores])
        }
      }
      const p = document.createElement("p")
      p.textContent =  cotacao_valores[2] + " " + cotacao_valores[1]  + " = 1 " + cotacao_valores[0]
      
      cotacao.appendChild(p)
    }
  })
}

function captura_de_imagem(){
  fetch("https://imsea.herokuapp.com/api/1?q=" + pares[0], {credentials:"same-origin"})
  .then(resposta =>{
      return resposta.json();
  }).then(corpo =>{
    console.log(corpo)
  })
}

captura_de_imagem()

atualiza_cotacao()
document.getElementById("button")
        .addEventListener("click", atualiza_cotacao)

