//declarando cores e nomes e elementos
//elementos
let card1 = document.getElementById("prato1")
let card1Title = document.getElementById("prato1Title")
let card1Subtitle = document.getElementById("prato1Subtitle")
let card1Text = document.getElementById("prato1Text")

let card2 = document.getElementById("prato2")
let card2Title = document.getElementById("prato2Title")
let card2Subtitle = document.getElementById("prato2Subtitle")
let card2Text = document.getElementById("prato2Text")

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

        estado2IsTrue = false
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
        lendas.style.backgroundColor = "#0c0d12"
        lendas.style.color = "#f4f5f8"
        comidas.style.backgroundColor = "#25262d"
        comidas.style.color = "#f4f5f8"

        lendasIsTrue = false
        comidasIsTrue = true

         //verificando qual estado
         if (estado1IsTrue) {
            //fazendo por card2
            card2.innerText  = "PRATO 02"
            card2Title.innerText = "Pirarucu de casaca"
            card2Subtitle.innerText = "Camadas de pirarucu, banana e farofa."
            card2Text.innerText = "Prato de festa montado em camadas: pirarucu desfiado, banane-pacovã frita, purê e farofa de farinha d'água, gratinado até dourar."

            //fazendo pro card1
            card1.innerText = "PRATO 01"
            card1Title.innerText = "Tacacá"
            card1Subtitle.innerText = "Tucupi quente, jambu, camarão seco e goma."
            card1Text.innerText = "Servido fervendo na cuia, o tacacá combina o azedo do tucupi com o formigamento do jambu. Comida de fim de tarde vendidade em tacacázeiras nas esquinas"
         }
         else if (estado2IsTrue) {
            //fazendo pro card1 
            card2Title.innerText = "Maniçoba"
            card2Subtitle.innerText = "Folhas de mandioca cozidas, carne bovina, carne suíça e linguíça."
            card2Text.innerText = "Conhecida como a “feijoada paraense”, a maniçoba é preparada com folhas de mandioca cozidas durante vários dias. O prato é muito consumido durante festas tradicionais e faz parte da cultura do estado do Pará."

            //fazendo pro card2
            card1Title.innerText = "Vatapá paraense"
            card1Subtitle.innerText = "Camarão, leite de coco, farinha, azeite de dendê e temperos."
            card1Text.innerText = "Diferente do vatapá de outras regiões do Brasil, a versão paraense apresenta características próprias e costuma ser servida como acompanhamento em almoços e celebrações. É um dos pratos mais conhecidos da culinária do estado."
         }       
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas" && !lendasIsTrue) {
        comidas.style.backgroundColor = "#0c0d12"
        comidas.style.color = "#f4f5f8"
        lendas.style.backgroundColor = "#25262d"
        lendas.style.color = "#f4f5f8"

        lendasIsTrue = true
        comidasIsTrue = false
        
        //verificando o estado
        if (estado1IsTrue){

        }
        else if (estado2IsTrue) {
            //fazendo pro card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Cobra Grande"
            card2Subtitle.innerText = "A serpente gigante que habita os rios da Amazônia."
            card2Text.innerText = "Presente no imaginário paraense, a Cobra Grande é descrita como uma enorme serpente que vive nas profundezas dos rios. Muitas histórias afirmam que ela é responsável por fenômenos misteriosos e pelo desaparecimento de embarcações."

            //fazendo pro card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Matinta perera"
            card1Subtitle.innerText = "A misteriosa mulher que se transforma em um pássaro noturno."
            card1Text.innerText = "A lenda conta a história de uma mulher que percorre as comunidades durante a noite emitindo um assobio característico. Segundo a tradição popular, ela visita as casas em busca de tabaco ou outros presentes, despertando medo e curiosidade."
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
            card2.innerText  = "PRATO 02"
            card2Title.innerText = "Pirarucu de casaca"
            card2Subtitle.innerText = "Camadas de pirarucu, banana e farofa."
            card2Text.innerText = "Prato de festa montado em camadas: pirarucu desfiado, banane-pacovã frita, purê e farofa de farinha d'água, gratinado até dourar."

            //fazendo pro card1
            card1.innerText = "PRATO 01"
            card1Title.innerText = "Tacacá"
            card1Subtitle.innerText = "Tucupi quente, jambu, camarão seco e goma."
            card1Text.innerText = "Servido fervendo na cuia, o tacacá combina o azedo do tucupi com o formigamento do jambu. Comida de fim de tarde vendidade em tacacázeiras nas esquinas"
         }
         else if (estado2IsTrue) {
            //fazendo pro card1 
            card2Title.innerText = "Maniçoba"
            card2Subtitle.innerText = "Folhas de mandioca cozidas, carne bovina, carne suíça e linguíça."
            card2Text.innerText = "Conhecida como a “feijoada paraense”, a maniçoba é preparada com folhas de mandioca cozidas durante vários dias. O prato é muito consumido durante festas tradicionais e faz parte da cultura do estado do Pará."

            //fazendo pro card2
            card1Title.innerText = "Vatapá paraense"
            card1Subtitle.innerText = "Camarão, leite de coco, farinha, azeite de dendê e temperos."
            card1Text.innerText = "Diferente do vatapá de outras regiões do Brasil, a versão paraense apresenta características próprias e costuma ser servida como acompanhamento em almoços e celebrações. É um dos pratos mais conhecidos da culinária do estado."
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
            //fazendo pro card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Vitória-régia"
            card2Subtitle.innerText = "A moça que virou a flor da lua"
            card2Text.innerText = "Naiá perseguiu o reflexo da lua nas águas e se afogou. Comovida, a lua a transformou na maior flor do rio, que abre á noite e perfuma o igarapé"

            //fazendo pro card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Boto-cor-de-rosa"
            card1Subtitle.innerText = "O encantado que vira rapaz nas festas de junho."
            card1Text.innerText = "Nas noites de festa, o boto assume forma humana, veste branco e usa chapéu para esconder o orifício na cabeça. Encanta moças ribeirinhas e desaparece antes do amanhecer, voltando ao rio."
        }
        else if (estado2IsTrue) {
            //fazendo pro card2
            card2.innerText = "LENDA 02"
            card2Title.innerText = "Cobra Grande"
            card2Subtitle.innerText = "A serpente gigante que habita os rios da Amazônia."
            card2Text.innerText = "Presente no imaginário paraense, a Cobra Grande é descrita como uma enorme serpente que vive nas profundezas dos rios. Muitas histórias afirmam que ela é responsável por fenômenos misteriosos e pelo desaparecimento de embarcações."

            //fazendo pro card1
            card1.innerText = "LENDA 01"
            card1Title.innerText = "Matinta perera"
            card1Subtitle.innerText = "A misteriosa mulher que se transforma em um pássaro noturno."
            card1Text.innerText = "A lenda conta a história de uma mulher que percorre as comunidades durante a noite emitindo um assobio característico. Segundo a tradição popular, ela visita as casas em busca de tabaco ou outros presentes, despertando medo e curiosidade."
        }
    }
}