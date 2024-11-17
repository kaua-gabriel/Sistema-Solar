// Função para mostrar as informações sobre os planetas e o Sol
function showPlanetInfo(name, description) {
    const planetInfo = document.getElementById("planet-info");
    planetInfo.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
    planetInfo.style.display = 'block';
}

// Adicionando eventos de clique para os planetas e o Sol
document.getElementById("mercury").addEventListener("click", function() {
    showPlanetInfo("Mercúrio", "Mercúrio é o planeta mais próximo do Sol e tem uma temperatura extremamente alta.");
});

document.getElementById("venus").addEventListener("click", function() {
    showPlanetInfo("Vênus", "Vênus é conhecido como o 'irmão' da Terra devido ao seu tamanho semelhante, mas é muito mais quente.");
});

document.getElementById("earth").addEventListener("click", function() {
    showPlanetInfo("Terra", "A Terra é o único planeta conhecido a abrigar vida.");
});

document.getElementById("mars").addEventListener("click", function() {
    showPlanetInfo("Marte", "Marte é o planeta vermelho e está sendo explorado para possíveis missões humanas.");
});

document.getElementById("jupiter").addEventListener("click", function() {
    showPlanetInfo("Júpiter", "Júpiter é o maior planeta do Sistema Solar e possui uma grande mancha vermelha, que é uma tempestade.");
});

document.getElementById("saturn").addEventListener("click", function() {
    showPlanetInfo("Saturno", "Saturno é famoso por seus anéis, compostos principalmente de gelo e rochas.");
});

document.getElementById("uranus").addEventListener("click", function() {
    showPlanetInfo("Urano", "Urano é um planeta gasoso que gira de lado, com uma inclinação axial única.");
});

document.getElementById("neptune").addEventListener("click", function() {
    showPlanetInfo("Netuno", "Netuno é o planeta mais distante do Sol e tem ventos extremamente fortes.");
});

document.getElementById("pluto").addEventListener("click", function() {
    showPlanetInfo("Plutão", "Plutão, embora tenha sido reclassificado como um planeta anão, ainda fascina por seu tamanho pequeno e órbita excêntrica.");
});

// Adicionando evento de clique para o Sol
document.getElementById("sun").addEventListener("click", function() {
    showPlanetInfo("Sol", "O Sol é uma estrela que fornece luz e calor essenciais para a vida na Terra. Ele é o centro do nosso Sistema Solar.");
});