let contador = 0;
const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = "Number of images: " + contador;
h1.style.color = "blue";
div.style.backgroundcolor = "black";

h1.classList.add("contadorImagem")
const body = document.querySelector("body");
div.appendChild(h1)
body.insertBefore(div, body.firstChild);



function trocaImagem () {
  contador = 0;
  const img = document.querySelectorAll("img");
  if(img){
    for (i of img){
      contador++;
      i.src = "https://scontent.fsdu28-1.fna.fbcdn.net/v/t1.6435-9/44306306_2142619005772414_3148929009060937728_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGpoMtbKgImNFm28ru3zV3VBB1bYXCrUIEEHVthcKtQgbT163S6xj73Zw7Iju9c96AhezQwi80u_vZ3iCb2KKga&_nc_ohc=k6kvbunBKkIAX9K0HSL&tn=SHdCoOWM2Pi_kamn&_nc_ht=scontent.fsdu28-1.fna&oh=3af414b5a864d2bf10a396c789a0c763&oe=61BD7C86";
    
      i.style.width = "100%";
      i.style.objectfit = "fill";
    }
    const contadorImagem = document.querySelector(".contadorImagem");

    contadorImagem.innerHTML = "Number of images: " + contador;
  }

  setTimeout(trocaImagem,500);
}

trocaImagem();
