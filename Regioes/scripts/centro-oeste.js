//declarando cores e nomes e elementos
//elementos
let card = document.getElementById("card")
let cardTitle = document.getElementById("cardTitle")
let cardSubtitle = document.getElementById("cardSubtitle")
let cardText = document.getElementById("cardText")

let estado1 = document.getElementById("estado1")
let estado1IsTrue = true

let estado2 = document.getElementById("estado2")
let estado2IsTrue = false

let resEtado = document.getElementById("resEstado")

let lendas = document.getElementById("lendas")
let lendasIsTrue =  true
let comidas = document.getElementById("comidas")
let comidasIsTrue = false

//funções
function mudarEstado(estado) {
    if (estado == "matoGrosso" && !estado1IsTrue) {
        estado1.style.backgroundColor = "#894c06"
        estado1.style.color = "#fff3df"
        estado2.style.backgroundColor = "#fff3df"
        estado2.style.color = "#44250b"

        estado1IsTrue = true
        estado2IsTrue = false

        resEtado.innerHTML = "📍 Capital de <span id=\"capitalEstado\">Mato Grosso</span>: <strong id=\"capitalNome\">Cuiabá</strong>"

        //mudando o card
        if (comidasIsTrue){
            mudarCardEstado("comidas")
        }
        else {
            mudarCardEstado("lendas")
        }
    }
    else if (estado == "goias" && !estado2IsTrue) {
        estado2.style.backgroundColor = "#894c06"
        estado2.style.color = "#fff3df"
        estado1.style.backgroundColor = "#eed7b7"
        estado1.style.color = "#44250b"

        estado1IsTrue = false
        estado2IsTrue = true
        
        resEtado.innerHTML = "📍 Capital de <span id=\"capitalEstado\">Goiás</span>: <strong id=\"capitalNome\">Goiânia</strong>"

        //mudando card
        if (comidasIsTrue){
            mudarCardEstado("comidas")
        }
        else {
            mudarCardEstado("lendas")
        }

    }
}

function mudarCard(escolha) {
    //fazendo escolha de comidas
    if (escolha == "comidas" && !comidasIsTrue) {
        //mudando a cor
        comidas.style.backgroundColor = "#fbeedd"
        comidas.style.color = "#3a2a15"
        lendas.style.backgroundColor = "#f0dfc0"
        lendas.style.color = "#6b4a26"

        lendasIsTrue = false
        comidasIsTrue = true

         //verificando qual estado
         if (estado1IsTrue) {
            cardTitle.innerText = "PACU ASSADO"
            cardSubtitle.innerText = "Peixe na brasa com farofa de banana"
            cardText.innerText = "Pacu inteira temperado com limão e alho, assado lentamente na brasa e servido com farofa de banana-da-terra."
         }
         else if (estado2IsTrue) {
            cardTitle.innerText = "EMPADÃO GOIANO"
            cardSubtitle.innerText = "o prato mais famoso do estado"
            cardText.innerText = "o empadão goiano é uma torta recheada com frango, linguiça, queijo e outros ingredientes típicos da culinária de goiás."
         }
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas" && !lendasIsTrue) {
        //mudando a cor
        lendas.style.backgroundColor = "#fbeedd"
        lendas.style.color = "#3a2a15"
        comidas.style.backgroundColor = "#f0dfc0"
        comidas.style.color = "#6b4a26"

        lendasIsTrue = true
        comidasIsTrue = false
        
        //verificando o estado
        if (estado1IsTrue){
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "MINHOCÃO DO PANTANAL"
            cardSubtitle.innerText = "A serpente que cava os corixos."
            cardText.innerText = "Dizem que abre caminho de água ao se arrastar sobe a terra, derrubando barrancos e mudando o curso dos rios na cheia."
        }
        else if (estado2IsTrue) {
            card.innerText = "LENDA 01"
            cardTitle.innerText = "A LENDA DO ANHANGUERA"
            cardSubtitle.innerText = "o bandeirante que enganava os indígenas"
            cardText.innerText = "uma das lendas mais conhecidas de goiás conta a história do anhanguera, um homem que teria usado fogo para assustar os indígenas e procurar ouro na região."
        }
    }
}

function mudarCardEstado (escolha) {
    
    //fazendo escolha de comidas
    if (escolha == "comidas") {
        //mudando a cor
        comidas.style.backgroundColor = "#fbeedd"
        comidas.style.color = "#3a2a15"
        lendas.style.backgroundColor = "#f0dfc0"
        lendas.style.color = "#6b4a26"

        lendasIsTrue = false
        comidasIsTrue = true

         //verificando qual estado
         if (estado1IsTrue) {
            cardTitle.innerText = "PACU ASSADO"
            cardSubtitle.innerText = "Peixe na brasa com farofa de banana"
            cardText.innerText = "Pacu inteira temperado com limão e alho, assado lentamente na brasa e servido com farofa de banana-da-terra."
         }
         else if (estado2IsTrue) {
            cardTitle.innerText = "EMPADÃO GOIANO"
            cardSubtitle.innerText = "o prato mais famoso do estado"
            cardText.innerText = "o empadão goiano é uma torta recheada com frango, linguiça, queijo e outros ingredientes típicos da culinária de goiás."
         }   
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas") {
        //mudando a cor
        lendas.style.backgroundColor = "#fbeedd"
        lendas.style.color = "#3a2a15"
        comidas.style.backgroundColor = "#f0dfc0"
        comidas.style.color = "#6b4a26"

        lendasIsTrue = true
        comidasIsTrue = false
        
        //verificando o estado
        if (estado1IsTrue){
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "MINHOCÃO DO PANTANAL"
            cardSubtitle.innerText = "A serpente que cava os corixos."
            cardText.innerText = "Dizem que abre caminho de água ao se arrastar sobe a terra, derrubando barrancos e mudando o curso dos rios na cheia."
        }
        else if (estado2IsTrue) {
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "A LENDA DO ANHANGUERA"
            cardSubtitle.innerText = "o bandeirante que enganava os indígenas"
            cardText.innerText = "uma das lendas mais conhecidas de goiás conta a história do anhanguera, um homem que teria usado fogo para assustar os indígenas e procurar ouro na região."
        }
    }
}