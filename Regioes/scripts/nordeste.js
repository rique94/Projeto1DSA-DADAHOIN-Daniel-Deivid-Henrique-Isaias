//declarando cores e nomes e elementos
//elementos
let cardComidas = true
let card = document.getElementById("card")
let cardTitle = document.getElementById("cardTitle")
let cardSubtitle = document.getElementById("cardSubtitle")
let cardText = document.getElementById("cardText")

let estado1 = document.getElementById("estado1")
let estado1IsTrue = true

let estado2 = document.getElementById("estado2")
let estado2IsTrue = false

let estado3 = document.getElementById("estado3")
let estado3IsTrue = false

let resEtado = document.getElementById("resEstado")

let lendas = document.getElementById("lendas")
let lendasIsTrue =  true
let comidas = document.getElementById("comidas")
let comidasIsTrue = false

//funções
function mudarEstado(estado) {
    if (estado == "bahia" && !estado1IsTrue) {
        estado1.style.backgroundColor = "#cc2a1b"
        estado1.style.color = "#fdf8ea"
        estado2.style.backgroundColor = "#f9e6bb"
        estado2.style.color = "#49160d"
        estado3.style.backgroundColor = "#f9e6bb"
        estado3.style.color = "#49160d"

        estado1IsTrue = true
        estado2IsTrue = false
        estado3IsTrue = false

        resEtado.innerHTML = "📍 Capital de <span id=\"capitalEstado\">Bahia</span>: <strong id=\"capitalNome\">Salvador</strong>"

        //mudando o card
        if (comidasIsTrue){
            mudarCardEstado("comidas")
        }
        else {
            mudarCardEstado("lendas")
        }
    }
    else if (estado == "pernambuco" && !estado2IsTrue) {
        estado2.style.backgroundColor = "#cc2a1b"
        estado2.style.color = "#fdf8ea"
        estado1.style.backgroundColor = "#ecd6a6"
        estado1.style.color = "#49160d"
        estado3.style.backgroundColor = "#ecd6a6"
        estado3.style.color = "#49160d"

        estado1IsTrue = false
        estado2IsTrue = true
        estado3IsTrue = false
        
        resEtado.innerHTML = "📍 Capital de <span id=\"capitalEstado\">Pernambuco</span>: <strong id=\"capitalNome\">Recife</strong>"

        //mudando card
        if (comidasIsTrue){
            mudarCardEstado("comidas")
        }
        else {
            mudarCardEstado("lendas")
        }

    }
    else if (estado == "ceara" && !estado3IsTrue) {
        estado3.style.backgroundColor = "#cc2a1b"
        estado3.style.color = "#fdf8ea"
        estado1.style.backgroundColor = "#ecd6a6"
        estado1.style.color = "#49160d"
        estado2.style.backgroundColor = "#ecd6a6"
        estado2.style.color = "#49160d"

        estado1IsTrue = false
        estado2IsTrue = false
        estado3IsTrue = true
        
        resEtado.innerHTML = "📍 Capital de <span id=\"capitalEstado\">Ceara</span>: <strong id=\"capitalNome\">Fortaleza</strong>"

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
        comidas.style.backgroundColor = "#fbf1dc"
        comidas.style.color = "#2c1b0f"
        lendas.style.backgroundColor = "#f2e2bb"
        lendas.style.color = "#6b4a26"

        lendasIsTrue = false
        comidasIsTrue = true

         //verificando qual estado
         if (estado1IsTrue) {
            cardTitle.innerText = "Acarajé"
            cardSubtitle.innerText = "Feijão-fradinho, camarão seco, vatapá e pimenta."
            cardText.innerText = "Servido ainda quente, o acarajé é um dos maiores símbolos da culinária baiana. Frito no azeite de dendê, o bolinho é recheado com ingredientes marcantes e vendido principalmente em feiras, praças e tabuleiros das baianas."
         }
         else if (estado2IsTrue) {
            cardTitle.innerText = "Bolo de Rolo"
            cardSubtitle.innerText = "Pão de ló fino, goiabada e camadas delicadas."
            cardText.innerText = "Tradicional da culinária pernambucana, o bolo de rolo é conhecido por suas inúmeras camadas finas recheadas com goiabada. A sobremesa é considerada um dos maiores patrimonios gastronômicos do estado."
         }
         else if (estado3IsTrue) {
            cardTitle.innerText = "Baião de Dois"
            cardSubtitle.innerText = "Arroz, feijão, queijo coalho e carne seca."
            cardText.innerText = "Muito popular no Ceará, o baião de dois combina ingredientes simples e típicos do sertão. O prato representa a culinária nordestina e é servido em restaurantes, feiras e reuniões familiares."
         } 
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas" && !lendasIsTrue) {
        //mudando a cor
        lendas.style.backgroundColor = "#fbf1dc"
        lendas.style.color = "#2c1b0f"
        comidas.style.backgroundColor = "#f2e2bb"
        comidas.style.color = "#6b4a26"

        lendasIsTrue = true
        comidasIsTrue = false
        
        //verificando o estado
        if (estado1IsTrue){
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "Caipora"
            cardSubtitle.innerText = "Guardião da mata montado em porco-do-mato."
            cardText.innerText = "Protege os animais e confunde caçadores, apagando trilhas. Aceita fumo deixado num toco como oferenda de trégua. "
        }
        else if (estado2IsTrue) {
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "Papa-Figo"
            cardSubtitle.innerText = "O homem misterioso que percorria as cidades em busca da cura."
            cardText.innerText = "Uma das lendas mais populares de Pernambuco, o Papa-Figo conta a história de um homem doente que acreditava poder se curar ao consumir fígado humano. Com o passar do tempo, a história transformou-se em uma lenda usada para assustar crianças e alertá-las sobre os perigos das ruas."
        }
        else if (estado3IsTrue) {
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "Mãe-d'Água"
            cardSubtitle.innerText = "A encantadora sereia que protege rios, lagoas e pescadores."
            cardText.innerText = "Muito conhecida no Ceará, a Mãe-d'Água é descrita como uma bela mulher que vive nas águas. A lenda diz que ela aparece para encantar pescadores e proteger os rios, sendo considerada uma guardiã da natureza."
        }
    }
}

function mudarCardEstado (escolha) {
    
    //fazendo escolha de comidas
    if (escolha == "comidas") {
        //mudando a cor
        comidas.style.backgroundColor = "#fbf1dc"
        comidas.style.color = "#2c1b0f"
        lendas.style.backgroundColor = "#f2e2bb"
        lendas.style.color = "#6b4a26"

        lendasIsTrue = false
        comidasIsTrue = true

         //verificando qual estado
         if (estado1IsTrue) {
            cardTitle.innerText = "Acarajé"
            cardSubtitle.innerText = "Feijão-fradinho, camarão seco, vatapá e pimenta."
            cardText.innerText = "Servido ainda quente, o acarajé é um dos maiores símbolos da culinária baiana. Frito no azeite de dendê, o bolinho é recheado com ingredientes marcantes e vendido principalmente em feiras, praças e tabuleiros das baianas."
         }
         else if (estado2IsTrue) {
            cardTitle.innerText = "Bolo de Rolo"
            cardSubtitle.innerText = "Pão de ló fino, goiabada e camadas delicadas."
            cardText.innerText = "Tradicional da culinária pernambucana, o bolo de rolo é conhecido por suas inúmeras camadas finas recheadas com goiabada. A sobremesa é considerada um dos maiores patrimonios gastronômicos do estado."
         }       
         else if (estado3IsTrue) {
            cardTitle.innerText = "Baião de Dois"
            cardSubtitle.innerText = "Arroz, feijão, queijo coalho e carne seca."
            cardText.innerText = "Muito popular no Ceará, o baião de dois combina ingredientes simples e típicos do sertão. O prato representa a culinária nordestina e é servido em restaurantes, feiras e reuniões familiares."
            
         }
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas") {
        //mudando a cor
        lendas.style.backgroundColor = "#fbf1dc"
        lendas.style.color = "#2c1b0f"
        comidas.style.backgroundColor = "#f2e2bb"
        comidas.style.color = "#6b4a26"

        lendasIsTrue = true
        comidasIsTrue = false
        
        //verificando o estado
        if (estado1IsTrue){
            //fazendo pro card
           card.innerText = "LENDA 01"
            cardTitle.innerText = "Caipora"
            cardSubtitle.innerText = "Guardião da mata montado em porco-do-mato."
            cardText.innerText = "Protege os animais e confunde caçadores, apagando trilhas. Aceita fumo deixado num toco como oferenda de trégua. "
        }
        else if (estado2IsTrue) {
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "Papa-Figo"
            cardSubtitle.innerText = "O homem misterioso que percorria as cidades em busca da cura."
            cardText.innerText = "Uma das lendas mais populares de Pernambuco, o Papa-Figo conta a história de um homem doente que acreditava poder se curar ao consumir fígado humano. Com o passar do tempo, a história transformou-se em uma lenda usada para assustar crianças e alertá-las sobre os perigos das ruas."
        }
        else if (estado3IsTrue){
            //fazendo pro card
            card.innerText = "LENDA 01"
            cardTitle.innerText = "Mãe-d'Água"
            cardSubtitle.innerText = "A encantadora sereia que protege rios, lagoas e pescadores."
            cardText.innerText = "Muito conhecida no Ceará, a Mãe-d'Água é descrita como uma bela mulher que vive nas águas. A lenda diz que ela aparece para encantar pescadores e proteger os rios, sendo considerada uma guardiã da natureza."

        }
    }
}