//declarando cores e nomes e elementos
//elementos
let card1 = document.getElementById("lenda01")
let card1Title = document.getElementById("lenda01Title")
let card1Subtitle = document.getElementById("lenda01Subtitle")
let card1Text = document.getElementById("lenda01Text")

let card2 = document.getElementById("lenda02")
let card2Title = document.getElementById("lenda02Title")
let card2Subtitle = document.getElementById("lenda02Subtitle")
let card2Text = document.getElementById("lenda02Text")

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
    if (estado == "minasGerais" && !estado1IsTrue) {
        estado1.style.backgroundColor = "#ecbe24"
        estado1.style.color = "#0c0d12"
        estado2.style.backgroundColor = "#25262d"
        estado2.style.color = "#f1f1f5"
        estado3.style.backgroundColor = "#25262d"
        estado3.style.color = "#f1f1f5"

        estado1IsTrue = true
        estado2IsTrue = false
        estado3IsTrue = false

        resEtado.innerHTML = "📍Capital de Minas Gerais: <strong>Belo Horizonte</strong>"

        //mudando o card
        if (comidasIsTrue){
            mudarCardEstado("comidas")
        }
        else {
            mudarCardEstado("lendas")
        }
    }
    else if (estado == "rioDeJaneiro" && !estado2IsTrue) {
        estado2.style.backgroundColor = "#ecbe24"
        estado2.style.color = "#0c0d12"
        estado1.style.backgroundColor = "#25262d"
        estado1.style.color = "#f1f1f5"
        estado3.style.backgroundColor = "#25262d"
        estado3.style.color = "#f1f1f5"

        estado1IsTrue = false
        estado2IsTrue = true
        estado3IsTrue = false
        
        resEtado.innerHTML = "📍Capital de Rio de Janeiro: <strong>Rio de Janeiro</strong>"

        //mudando card
        if (comidasIsTrue){
            mudarCardEstado("comidas")
        }
        else {
            mudarCardEstado("lendas")
        }

    }
    else if (estado == "saoPaulo" && !estado3IsTrue) {
        estado3.style.backgroundColor = "#ecbe24"
        estado3.style.color = "#0c0d12"
        estado1.style.backgroundColor = "#25262d"
        estado1.style.color = "#f1f1f5"
        estado2.style.backgroundColor = "#25262d"
        estado2.style.color = "#f1f1f5"

        estado2IsTrue = false
        estado1IsTrue = false
        estado3IsTrue = true
        
        resEtado.innerHTML = "📍Capital de São Paulo: <strong>São Paulo</strong>"

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
        comidas.style.backgroundColor = "#0c0d12"
        comidas.style.color = "#f4f5f8"
        lendas.style.backgroundColor = "#25262d"
        lendas.style.color = "#f4f5f8"

        lendasIsTrue = false
        comidasIsTrue = true

         //verificando qual estado
         if (estado1IsTrue) {
            //fazendo por card2
            card1.innerText  = "PRATO 01"
            card1Title.innerText = "Mojica de pintado"
            card1Subtitle.innerText = "Peixe com mandioca"
            card1Text.innerText = "Prato feito com pintado, mandioca e temperos, muito tradicional em mato grosso."

            //fazendo pro card1
            card2.innerText = "PRATO 02"
            card2Title.innerText = "Farofa de banana"
            card2Subtitle.innerText = "Doce e salgada"
            card2Text.innerText = "Farofa feita com banana e farinha de mandioca, comum na culinária mato-grossense."
         }
         else if (estado2IsTrue) {
            //fazendo pro card1 
            card2.innerText = "PRATO 02"
            card2Title.innerText = "Feijoada carioca"
            card2Subtitle.innerText = "O prato tradicional"
            card2Text.innerText = "Feijoada feita com feijão preto, carnes e acompanhamentos, muito popular no rio de janeiro."

            //fazendo pro card2
            card1.innerText = "PRATO 01"
            card1Title.innerText = "filé à oswaldo aranha"
            card1Subtitle.innerText = "o prato carioca"
            card1Text.innerText = "filé servido com alho, farofa, arroz e batatas fritas, criado e popularizado no rio de janeiro."
         }
         else if (estado3IsTrue) {
            //fazendo pro card2
            card1.innerText = "PRATO 01"
            card1Title.innerText = "Virado à paulista"
            card1Subtitle.innerText = "O prato tradicional"
            card1Text.innerText = "Arroz, feijão, farinha de mandioca, couve e carne de porco."

            //fazendo pro card2
            card2.innerText = "PRATO 02"
            card2Title.innerText = "Cuscuz paulista"
            card2Subtitle.innerText = "O prato colorido"
            card2Text.innerText = "Massa de milho com legumes, ovos e outros ingredientes, servido em fatias."
         }       
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas" && !lendasIsTrue) {
        lendas.style.backgroundColor = "#0c0d12"
        lendas.style.color = "#f4f5f8"
        comidas.style.backgroundColor = "#25262d"
        comidas.style.color = "#f4f5f8"

        lendasIsTrue = true
        comidasIsTrue = false
        
        //verificando o estado
        if (estado1IsTrue){
            //fazedno por card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Minhocão do pari"
            card1Subtitle.innerText = "O monstro dos rios"
            card1Text.innerText = "Uma criatura gigante que viveria nos rios e assustaria os pescadores."
            
            //fazendo por card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Mãe de ouro"
            card2Subtitle.innerText = "A luz misteriosa"
            card2Text.innerText = "Uma luz dourada que apareceria nas montanhas, protegendo riquezas escondidas."
        }
        else if (estado2IsTrue) {
            //fazendo pro card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Lenda da pedra da gávea"
            card2Subtitle.innerText = "O mistério da montanha."
            card2Text.innerText = "A lenda diz que a pedra da gávea possui inscrições e segredos deixados por povos antigos."

            //fazendo pro card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Lenda do gigante adormecido"
            card1Subtitle.innerText = "A montanha misteriosa"
            card1Text.innerText = "a formação das montanhas do rio seria parecida com um gigante deitado, dando origem à lenda."
        }
        else if (estado3IsTrue) {
            //fazendo pro card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Mula sem cabeça"
            card2Subtitle.innerText = "Fogo no lugar da cabeça, correndo o arraial."
            card2Text.innerText = "Mulher amaldiçoada por desrespeitar o sagrado, transformada em mula que solta fogo pelo pescoço nas noites de quinta para sexta."
            
            //fazendo pro card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Saci pererê"
            card1Subtitle.innerText = "Uma perna, gorro vermelho e redemoinho."
            card1Text.innerText = "Viaja em redemoinhos, embaraça crina de cavalo e esconde objetos. Aprisiona-se dentro de uma garrafa fechada com rolha de bento."
        }
    }
}

function mudarCardEstado (escolha) {
    
    //fazendo escolha de comidas
    if (escolha == "comidas") {
        comidas.style.backgroundColor = "#0c0d12"
        comidas.style.color = "#f4f5f8"
        lendas.style.backgroundColor = "#25262d"
        lendas.style.color = "#f4f5f8"

        lendasIsTrue = false
        comidasIsTrue = true

         //verificando qual estado
         if (estado1IsTrue) {
            //fazendo por card2
            card1.innerText  = "PRATO 01"
            card1Title.innerText = "Mojica de pintado"
            card1Subtitle.innerText = "Peixe com mandioca"
            card1Text.innerText = "Prato feito com pintado, mandioca e temperos, muito tradicional em mato grosso."

            //fazendo pro card1
            card2.innerText = "PRATO 02"
            card2Title.innerText = "Farofa de banana"
            card2Subtitle.innerText = "Doce e salgada"
            card2Text.innerText = "Farofa feita com banana e farinha de mandioca, comum na culinária mato-grossense."
         }
         else if (estado2IsTrue) {
            //fazendo pro card1 
            card2.innerText = "PRATO 02"
            card2Title.innerText = "Feijoada carioca"
            card2Subtitle.innerText = "O prato tradicional"
            card2Text.innerText = "Feijoada feita com feijão preto, carnes e acompanhamentos, muito popular no rio de janeiro."

            //fazendo pro card2
            card1.innerText = "PRATO 01"
            card1Title.innerText = "filé à oswaldo aranha"
            card1Subtitle.innerText = "o prato carioca"
            card1Text.innerText = "filé servido com alho, farofa, arroz e batatas fritas, criado e popularizado no rio de janeiro."
         }
         else if (estado3IsTrue) {
            //fazendo pro card2
            card1.innerText = "PRATO 01"
            card1Title.innerText = "Virado à paulista"
            card1Subtitle.innerText = "O prato tradicional"
            card1Text.innerText = "Arroz, feijão, farinha de mandioca, couve e carne de porco."

            //fazendo pro card2
            card2.innerText = "PRATO 02"
            card2Title.innerText = "Cuscuz paulista"
            card2Subtitle.innerText = "O prato colorido"
            card2Text.innerText = "Massa de milho com legumes, ovos e outros ingredientes, servido em fatias."
         }     
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas") {
        lendas.style.backgroundColor = "#0c0d12"
        lendas.style.color = "#f4f5f8"
        comidas.style.backgroundColor = "#25262d"
        comidas.style.color = "#f4f5f8"

        lendasIsTrue = true
        comidasIsTrue = false
        
        //verificando o estado
        if (estado1IsTrue){
            //fazedno por card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Minhocão do pari"
            card1Subtitle.innerText = "O monstro dos rios"
            card1Text.innerText = "Uma criatura gigante que viveria nos rios e assustaria os pescadores."
            
            //fazendo por card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Mãe de ouro"
            card2Subtitle.innerText = "A luz misteriosa"
            card2Text.innerText = "Uma luz dourada que apareceria nas montanhas, protegendo riquezas escondidas."
        }
        else if (estado2IsTrue) {
            //fazendo pro card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Lenda da pedra da gávea"
            card2Subtitle.innerText = "O mistério da montanha."
            card2Text.innerText = "A lenda diz que a pedra da gávea possui inscrições e segredos deixados por povos antigos."

            //fazendo pro card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Lenda do gigante adormecido"
            card1Subtitle.innerText = "A montanha misteriosa"
            card1Text.innerText = "a formação das montanhas do rio seria parecida com um gigante deitado, dando origem à lenda."
        }
        else if (estado3IsTrue) {
            //fazendo pro card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Mula sem cabeça"
            card2Subtitle.innerText = "Fogo no lugar da cabeça, correndo o arraial."
            card2Text.innerText = "Mulher amaldiçoada por desrespeitar o sagrado, transformada em mula que solta fogo pelo pescoço nas noites de quinta para sexta."
            
            //fazendo pro card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Saci pererê"
            card1Subtitle.innerText = "Uma perna, gorro vermelho e redemoinho."
            card1Text.innerText = "Viaja em redemoinhos, embaraça crina de cavalo e esconde objetos. Aprisiona-se dentro de uma garrafa fechada com rolha de bento."
        }
    }
}