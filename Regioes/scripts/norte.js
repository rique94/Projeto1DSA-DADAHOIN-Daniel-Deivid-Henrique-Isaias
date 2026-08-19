//declarando cores e nomes e elementos
//elementos
let estado1 = document.getElementById("estado1")
let estado1IsTrue = true
let card1Comidas = true
let card1 = document.getElementById("prato1")
let card1Title = document.getElementById("prato1Title")
let card1Subtitle = document.getElementById("prato1Subtitle")
let card1Text = document.getElementById("prato1Text")

let resEtado = document.getElementById("resEstado")

let estado2 = document.getElementById("estado2")
let estado2IsTrue = false
let card2Comidas = true
let card2 = document.getElementById("prato2")
let card2Title = document.getElementById("prato2Title")
let card2Subtitle = document.getElementById("prato2Subtitle")
let card2Text = document.getElementById("prato2Text")

let lendas = document.getElementById("lendas")
let lendasIsTrue =  false
let comidas = document.getElementById("comidas")
let comidasIsTrue = true

//funções
function mudarEstado(estado) {
    if (estado == "amazonas" && !estado1IsTrue) {
        estado1.style.backgroundColor = "#6fda75"
        estado1.style.color = "#00180c"
        estado2.style.backgroundColor = "#0d362a"
        estado2.style.color = "#e8f3de"

        estado1IsTrue = true
        estado2IsTrue = false

        resEtado.innerText = "📍Capital de Amazonas: Manaus"

        //mudando o card
        if (comidasIsTrue){
            mudarCardEstado("comidas")
        }
        else {
            mudarCardEstado("lendas")
        }
    }
    else if (estado == "para" && !estado2IsTrue) {
        estado2.style.backgroundColor = "#6fda75"
        estado2.style.color = "#00180c"
        estado1.style.backgroundColor = "#0d362a"
        estado1.style.color = "#e8f3de"

        estado2IsTrue = true
        estado1IsTrue = false
        
        resEtado.innerText = "📍Capital do Pará: Belém"

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
    if (escolha == "comidas" && lendasIsTrue) {
        //mudando a cor
        lendas.style.backgroundColor = "#001a0f"
        comidas.style.backgroundColor = "#0d362a"

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
    else if (escolha == "lendas" && comidasIsTrue) {
        //mudando a cor
        comidas.style.backgroundColor = "#001a0f"
        lendas.style.backgroundColor = "#0d362a"

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

function mudarCardEstado (escolha) {
    
    //fazendo escolha de comidas
    if (escolha == "comidas") {
        //mudando a cor
        lendas.style.backgroundColor = "#001a0f"
        comidas.style.backgroundColor = "#0d362a"

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
        //mudando a cor
        comidas.style.backgroundColor = "#001a0f"
        lendas.style.backgroundColor = "#0d362a"

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