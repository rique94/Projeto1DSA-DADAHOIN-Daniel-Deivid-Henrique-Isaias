//declarando cores e nomes e elementos
//elementos
let card1 = document.getElementById("lenda01");
let card1Title = document.getElementById("lenda01Title");
let card1Subtitle = document.getElementById("lenda01Subtitle");
let card1Text = document.getElementById("lenda01Text");

let estado1 = document.getElementById("estado1");
let estado1IsTrue = true;

let estado2 = document.getElementById("estado2");
let estado2IsTrue = false;

let estado3 = document.getElementById("estado3");
let estado3IsTrue = false;

let resEtado = document.getElementById("resEstado");

let lendas = document.getElementById("lendas");
let lendasIsTrue = true;
let comidas = document.getElementById("comidas");
let comidasIsTrue = false;

//funções
function mudarEstado(estado) {
    if (estado == "rioGrandeDoSul" && !estado1IsTrue) {
        estado1.style.backgroundColor = "#812258";
        estado1.style.color = "#f6f9fc";
        estado2.style.backgroundColor = "#dde6ee";
        estado2.style.color = "#322843";
        estado3.style.backgroundColor = "#dde6ee";
        estado3.style.color = "#322843";

        estado1IsTrue = true;
        estado2IsTrue = false;
        estado3IsTrue = false;

        resEtado.innerHTML =
            "📍Capital de Rio Grande do Sul: <strong>Porto Alegre</strong>";

        //mudando o card
        if (comidasIsTrue) {
            mudarCardEstado("comidas");
        } else {
            mudarCardEstado("lendas");
        }
    } else if (estado == "santaCatarina" && !estado2IsTrue) {
        estado2.style.backgroundColor = "#812258";
        estado2.style.color = "#f6f9fc";
        estado1.style.backgroundColor = "#dde6ee";
        estado1.style.color = "#322843";
        estado3.style.backgroundColor = "#dde6ee";
        estado3.style.color = "#322843";

        estado1IsTrue = false;
        estado2IsTrue = true;
        estado3IsTrue = false;

        resEtado.innerHTML =
            "📍Capital de Santa Catarina: <strong>Florianópolis</strong>";

        //mudando card
        if (comidasIsTrue) {
            mudarCardEstado("comidas");
        } else {
            mudarCardEstado("lendas");
        }
    } else if (estado == "parana" && !estado3IsTrue) {
        estado3.style.backgroundColor = "#812258";
        estado3.style.color = "#f6f9fc";
        estado2.style.backgroundColor = "#dde6ee";
        estado2.style.color = "#322843";
        estado1.style.backgroundColor = "#dde6ee";
        estado1.style.color = "#322843";

        estado2IsTrue = false;
        estado1IsTrue = false;
        estado3IsTrue = true;

        resEtado.innerHTML = "📍Capital de Paraná: <strong>Curitiba</strong>";

        //mudando card
        if (comidasIsTrue) {
            mudarCardEstado("comidas");
        } else {
            mudarCardEstado("lendas");
        }
    }
}

function mudarCard(escolha) {
    //fazendo escolha de comidas
    if (escolha == "comidas" && !comidasIsTrue) {
        comidas.style.backgroundColor = "#eef2f7";
        comidas.style.color = "#251c36";
        lendas.style.backgroundColor = "#dde6ee";
        lendas.style.color = "#322843";

        lendasIsTrue = false;
        comidasIsTrue = true;

        //verificando qual estado
        if (estado1IsTrue) {
            //fazendo por card2
            card1.innerText = "PRATO 01";
            card1Title.innerText = "Churrasco gaúcho";
            card1Subtitle.innerText = "O clássico gaúcho";
            card1Text.innerText = "Carnes assadas na brasa, geralmente temperadas apenas com sal. é uma das comidas mais tradicionais do rio grande do sul.";
        } else if (estado2IsTrue) {

            //fazendo pro card2
            card1.innerText = "PRATO 01";
            card1Title.innerText = "Marreco recheado";
            card1Subtitle.innerText = "O prato de origem alemã";
            card1Text.innerText = "Marreco assado e recheado, geralmente acompanhado de repolho roxo e purê de batata. é muito comum em regiões de colonização alemã.";
        } else if (estado3IsTrue) {
            //fazendo pro card2
            card1.innerText = "PRATO 01";
            card1Title.innerText = "Barreado";
            card1Subtitle.innerText = "O prato tradicional do litoral";
            card1Text.innerText = "Carne cozida lentamente em uma panela de barro, acompanhada de farinha de mandioca e banana. é um dos pratos mais tradicionais do paraná.";
        }
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas" && !lendasIsTrue) {
        lendas.style.backgroundColor = "#eef2f7";
        lendas.style.color = "#251c36";
        comidas.style.backgroundColor = "#dde6ee";
        comidas.style.color = "#322843";

        lendasIsTrue = true;
        comidasIsTrue = false;

        //verificando o estado
        if (estado1IsTrue) {
            //fazedno por card1
            card1.innerText = "LENDA 01";
            card1Title.innerText = "Negrinho do pastoreio";
            card1Subtitle.innerText = "O menino que virou símbolo de fé";
            card1Text.innerText = "A lenda conta a história de um menino escravizado que, após perder alguns cavalos, foi castigado e abandonado. depois, teria sido encontrado por um fazendeiro, tornando-se uma figura popular de proteção e esperança no rio grande do sul.";
        } else if (estado2IsTrue) {
            //fazendo pro card1
            card1.innerText = "LENDA 01";
            card1Title.innerText = "Bruxa de Itaguaçu";
            card1Subtitle.innerText = "A bruxa que assombrava a ilha";
            card1Text.innerText = "segundo a tradição, bruxas se reuniam na ilha de santa catarina para realizar festas e encantamentos. a história faz parte do folclore popular de florianópolis e região.";
        } else if (estado3IsTrue) { 
            //fazendo pro card2
            card1.innerText = "LENDA 01";
            card1Title.innerText = "A gralha-azul";
            card1Subtitle.innerText = "A ave que plantava araucárias";
            card1Text.innerText = "a lenda conta que uma gralha-azul recebeu a missão de plantar sementes de araucária. por isso, a ave é associada à preservação das florestas e se tornou um símbolo do paraná.";
        }
    }
}

function mudarCardEstado(escolha) {
    //fazendo escolha de comidas
    if (escolha == "comidas") {
        comidas.style.backgroundColor = "#eef2f7";
        comidas.style.color = "#251c36";
        lendas.style.backgroundColor = "#dde6ee";
        lendas.style.color = "#251c36";

        lendasIsTrue = false;
        comidasIsTrue = true;

        //verificando qual estado
        if (estado1IsTrue) {
            //fazendo por card2
            card1.innerText = "PRATO 01";
            card1Title.innerText = "Churrasco gaúcho";
            card1Subtitle.innerText = "O clássico gaúcho";
            card1Text.innerText = "Carnes assadas na brasa, geralmente temperadas apenas com sal. é uma das comidas mais tradicionais do rio grande do sul.";
        } else if (estado2IsTrue) {

            //fazendo pro card2
            card1.innerText = "PRATO 01";
            card1Title.innerText = "Marreco recheado";
            card1Subtitle.innerText = "O prato de origem alemã";
            card1Text.innerText = "Marreco assado e recheado, geralmente acompanhado de repolho roxo e purê de batata. é muito comum em regiões de colonização alemã.";
        } else if (estado3IsTrue) {
            //fazendo pro card2
            card1.innerText = "PRATO 01";
            card1Title.innerText = "Barreado";
            card1Subtitle.innerText = "O prato tradicional do litoral";
            card1Text.innerText = "Carne cozida lentamente em uma panela de barro, acompanhada de farinha de mandioca e banana. é um dos pratos mais tradicionais do paraná.";
        }
    }
    //fazedno escolha de lendas
    else if (escolha == "lendas") {
        lendas.style.backgroundColor = "#eef2f7";
        lendas.style.color = "#251c36";
        comidas.style.backgroundColor = "#dde6ee";
        comidas.style.color = "#251c36";

        lendasIsTrue = true;
        comidasIsTrue = false;

        //verificando o estado
        if (estado1IsTrue) {
            //fazedno por card1
            card1.innerText = "LENDA 01";
            card1Title.innerText = "Negrinho do pastoreio";
            card1Subtitle.innerText = "O menino que virou símbolo de fé";
            card1Text.innerText = "A lenda conta a história de um menino escravizado que, após perder alguns cavalos, foi castigado e abandonado. depois, teria sido encontrado por um fazendeiro, tornando-se uma figura popular de proteção e esperança no rio grande do sul.";
        } else if (estado2IsTrue) {
            //fazendo pro card1
            card1.innerText = "LENDA 01";
            card1Title.innerText = "Bruxa de Itaguaçu";
            card1Subtitle.innerText = "A bruxa que assombrava a ilha";
            card1Text.innerText = "segundo a tradição, bruxas se reuniam na ilha de santa catarina para realizar festas e encantamentos. a história faz parte do folclore popular de florianópolis e região.";
        } else if (estado3IsTrue) {
            //fazendo pro card2
            card1.innerText = "LENDA 01";
            card1Title.innerText = "A gralha-azul";
            card1Subtitle.innerText = "A ave que plantava araucárias";
            card1Text.innerText = "a lenda conta que uma gralha-azul recebeu a missão de plantar sementes de araucária. por isso, a ave é associada à preservação das florestas e se tornou um símbolo do paraná.";
        }
    }
}
