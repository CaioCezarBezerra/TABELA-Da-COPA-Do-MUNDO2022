const json = [
    {
        "grupo": "A",
        "selecao1": ["Catar.svg", "Catar", "CAT"],
        "selecao2": ["Equador.svg", "Equador", "EQU"],
        "selecao3": ["Senegal.svg", "Senegal", "SEN"],
        "selecao4": ["Holanda.svg", "Holanda", "HOL"]
    },
    {
        "grupo": "B",
        "selecao1": ["inglaterra.svg", "Inglaterra", "ING"],
        "selecao2": ["ira.svg", "Irã", "IRA"],
        "selecao3": ["estados_unidos.svg", "Estados Unidos", "EUA"],
        "selecao4": ["escudo_default.png", "País de Gales/Escócia/Ucrânia", "EUR"]
    },
    {
        "grupo": "C",
        "selecao1": ["argentina.svg", "Argentina", "ARG"],
        "selecao2": ["arabia_saudita.svg", "Arábia Saudita", "ARA"],
        "selecao3": ["mexico.svg", "México", "MEX"],
        "selecao4": ["polonia.svg", "Polônia", "POL"]
    },
    {
        "grupo": "D",
        "selecao1": ["franca.svg", "França", "FRA"],
        "selecao2": ["escudo_default.png", "Emirados Árabes ou Austrália ou Peru", "PL1"],
        "selecao3": ["dinamarca.svg", "Dinamarca", "DIN"],
        "selecao4": ["tunisia.svg", "Tunísia", "TUN"]
    },
    {
        "grupo": "E",
        "selecao1": ["espanha.svg", "Espanha", "ESP"],
        "selecao2": ["escudo_default.png", "Costa Rica ou Nova Zelândia", "PL2"],
        "selecao3": ["alemanha.svg", "Alemanha", "ALE"],
        "selecao4": ["japao.svg", "Japão", "JAP"]
    },
    {
        "grupo": "F",
        "selecao1": ["belgica.svg", "Bélgica", "BEL"],
        "selecao2": ["canada.svg", "Canadá", "CAN"],
        "selecao3": ["marrocos.svg", "Marrocos", "MAR"],
        "selecao4": ["croacia.svg", "Croácia", "CRO"]
    },
    {
        "grupo": "G",
        "selecao1": ["brasil.svg", "Brasil", "BRA"],
        "selecao2": ["servia.svg", "Sérvia", "SER"],
        "selecao3": ["suica.svg", "Suíça", "SUI "],
        "selecao4": ["camaroes.svg", "Camarões", "CAM"]
    },
    {
        "grupo": "H",
        "selecao1": ["portugal.svg", "Portugal", "POR"],
        "selecao2": ["gana.svg", "Gana", "GAN"],
        "selecao3": ["uruguai.svg", "Uruguai", "URU"],
        "selecao4": ["coreia_do_sul.svg", "Coreia do Sul", "COR"]
    },

];
console.log(json);

json.map((grupo,index) =>{
    
    
    let listaDeGrupo = document.querySelector('.listaDoGrupo').cloneNode(true);
console.log(listaDeGrupo);

document.querySelector('.listas').append(listaDeGrupo);

let tituloDoGrupo = document.querySelectorAll('.tituloDoGrupo');
console.log(tituloDoGrupo);

let listaDeSelecoes = document.querySelectorAll('.listaDeSelecoes');
console.log(listaDeSelecoes)


tituloDoGrupo[index].innerHTML = `Grupo ${grupo.grupo}`


listaDeSelecoes[index].innerHTML = 
`<li><img class="bandeirap" src="images/bandeiras/${grupo.selecao1[0]}" alt="bandeira"/>${grupo.selecao1[1]} </li>
<li><img class="bandeirap" src="images/bandeiras/${grupo.selecao2[0]}" alt="bandeira"/>${grupo.selecao2[1]} </li>
<li><img class="bandeirap" src="images/bandeiras/${grupo.selecao3[0]}" alt="bandeira"/>${grupo.selecao3[1]} </li>
<li><img class="bandeirap" src="images/bandeiras/${grupo.selecao4[0]}" alt="bandeira"/>${grupo.selecao4[1]} </li>`


})


