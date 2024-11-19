// Dados de descrição dos planetas e do Sol
const planetData = {
    mercury: {
        name: "Mercúrio",
        description: "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar. Sua temperatura varia drasticamente entre o dia e a noite devido à sua fina atmosfera.",
        temperature: "A temperatura pode variar entre 430°C durante o dia e -180°C à noite.",
        size: "Mercúrio tem um diâmetro de cerca de 4.880 km, o menor entre os planetas do Sistema Solar.",
        composition: "É composto principalmente de ferro e níquel, com uma crosta rochosa.",
        funFact: "Mercúrio não tem atmosfera significativa para reter calor."
    },
    venus: {
        name: "Vênus",
        description: "Vênus é conhecido como o 'planeta irmão' da Terra devido ao seu tamanho e composição semelhantes. Sua atmosfera é densa e cheia de gases venenosos.",
        temperature: "A temperatura média de Vênus é de cerca de 465°C, mais quente que Mercúrio, apesar de estar mais distante do Sol.",
        size: "Vênus tem um diâmetro de aproximadamente 12.104 km, quase igual ao da Terra.",
        composition: "A atmosfera é composta principalmente de dióxido de carbono, com nuvens de ácido sulfúrico.",
        funFact: "Vênus gira no sentido oposto da Terra, o que significa que o Sol nasce no oeste e se põe no leste."
    },
    earth: {
        name: "Terra",
        description: "A Terra é o único planeta conhecido a abrigar vida. Ela tem uma atmosfera rica em oxigênio e água, essencial para a vida como a conhecemos.",
        temperature: "A temperatura média na Terra é de 15°C, com variações dependendo da região.",
        size: "A Terra tem um diâmetro de 12.742 km, o maior dos planetas rochosos.",
        composition: "A Terra é composta principalmente por rochas e metais, com uma camada de água em sua superfície.",
        funFact: "A Terra é o único planeta conhecido até agora que possui vida."
    },
    mars: {
        name: "Marte",
        description: "Marte é conhecido como o planeta vermelho devido ao óxido de ferro em sua superfície. Cientistas acreditam que pode ter abrigado vida no passado.",
        temperature: "A temperatura média em Marte é de -60°C, mas pode chegar a -125°C nas regiões polares.",
        size: "Marte tem um diâmetro de 6.779 km, cerca de metade do diâmetro da Terra.",
        composition: "Marte tem uma atmosfera muito fina, composta principalmente de dióxido de carbono.",
        funFact: "Marte possui o maior vulcão do Sistema Solar, o Monte Olimpo."
    },
    jupiter: {
        name: "Júpiter",
        description: "Júpiter é o maior planeta do Sistema Solar, com uma atmosfera composta principalmente por hidrogênio e hélio. Ele tem uma enorme mancha vermelha, uma tempestade persistente.",
        temperature: "A temperatura de Júpiter varia entre -108°C na parte superior da atmosfera e -148°C nas camadas mais profundas.",
        size: "Júpiter tem um diâmetro de 139.820 km, mais de 11 vezes o diâmetro da Terra.",
        composition: "A atmosfera de Júpiter é composta principalmente de hidrogênio, hélio e pequenas quantidades de metano e amônia.",
        funFact: "Júpiter tem mais de 80 luas conhecidas, incluindo Ganimedes, a maior lua do Sistema Solar."
    },
    saturn: {
        name: "Saturno",
        description: "Saturno é famoso por seus belos anéis, que são feitos de partículas de gelo e rocha. Ele é o segundo maior planeta do Sistema Solar.",
        temperature: "A temperatura média em Saturno é de -178°C.",
        size: "Saturno tem um diâmetro de 116.460 km, mais de 9 vezes o diâmetro da Terra.",
        composition: "Saturno é composto principalmente de hidrogênio e hélio, com uma pequena quantidade de metais.",
        funFact: "Os anéis de Saturno são compostos por partículas de gelo e rocha e têm mais de 200.000 km de extensão."
    },
    uranus: {
        name: "Urano",
        description: "Urano é um gigante gasoso com uma cor azul-esverdeada, causada pelo metano em sua atmosfera. Ele gira de lado, o que é uma característica única entre os planetas.",
        temperature: "A temperatura média de Urano é de -224°C, o planeta mais frio do Sistema Solar.",
        size: "Urano tem um diâmetro de 50.724 km, mais de 4 vezes o diâmetro da Terra.",
        composition: "A atmosfera de Urano é composta principalmente por hidrogênio, hélio e metano.",
        funFact: "Urano tem um eixo de rotação inclinado a 98 graus, o que faz com que ele gire de lado em relação ao seu plano orbital."
    },
    neptune: {
        name: "Netuno",
        description: "Netuno é o planeta mais distante do Sol e tem uma atmosfera fria e densa. Ele é conhecido por seus ventos rápidos e sua cor azul intensa, devido ao metano.",
        temperature: "A temperatura média de Netuno é de -214°C.",
        size: "Netuno tem um diâmetro de 49.244 km, aproximadamente 4 vezes o diâmetro da Terra.",
        composition: "Netuno tem uma atmosfera composta principalmente de hidrogênio, hélio e metano.",
        funFact: "Netuno tem os ventos mais rápidos do Sistema Solar, com rajadas que podem chegar a 2.100 km/h."
    },
    pluto: {
        name: "Plutão",
        description: "Plutão, um planeta anão, era considerado o nono planeta do Sistema Solar até 2006, quando foi reclassificado. Ele é composto por rochas e gelo.",
        temperature: "A temperatura média em Plutão é de -229°C.",
        size: "Plutão tem um diâmetro de 2.377 km, cerca de um quinto do diâmetro da Terra.",
        composition: "Plutão é composto principalmente por rochas e gelo, com uma fina atmosfera de nitrogênio.",
        funFact: "Plutão tem uma órbita altamente excêntrica, o que faz com que ele esteja mais distante do Sol que Netuno por um período de tempo."
    },
    sun: {
        name: "Sol",
        description: "O Sol é uma estrela de tamanho médio, responsável por fornecer luz e calor para o Sistema Solar. Ele é essencial para a vida na Terra e tem uma enorme influência gravitacional.",
        temperature: "A temperatura na superfície do Sol é de aproximadamente 5.500°C, mas no núcleo pode atingir até 15 milhões de graus Celsius.",
        size: "O Sol tem um diâmetro de 1.391.000 km, mais de 100 vezes o diâmetro da Terra.",
        composition: "O Sol é composto principalmente de hidrogênio (cerca de 75%) e hélio (cerca de 24%), com traços de elementos mais pesados.",
        funFact: "O Sol é responsável por 99,86% da massa do Sistema Solar."
    }
};

// Função para mostrar a descrição na aba deslizante
function showDescription(planet) {
    const nameElement = document.getElementById('planet-name');
    const descriptionElement = document.getElementById('planet-description');
    const temperatureElement = document.getElementById('planet-temperature');
    const sizeElement = document.getElementById('planet-size');
    const compositionElement = document.getElementById('planet-composition');
    const funFactElement = document.getElementById('planet-funFact');
    const infoPanel = document.getElementById('info-panel');

    // Preencher as informações
    nameElement.textContent = planetData[planet].name;
    descriptionElement.textContent = planetData[planet].description;
    temperatureElement.textContent = `Temperatura: ${planetData[planet].temperature}`;
    sizeElement.textContent = `Tamanho: ${planetData[planet].size}`;
    compositionElement.textContent = `Composição: ${planetData[planet].composition}`;
    funFactElement.textContent = `Curiosidade: ${planetData[planet].funFact}`;

    // Mostrar a aba deslizante
    infoPanel.classList.add('active');
}

// Função para fechar a aba deslizante
document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('info-panel').classList.remove('active');
});

// Adiciona os eventos de clique nos planetas e no Sol
document.getElementById('mercury').addEventListener('click', () => showDescription('mercury'));
document.getElementById('venus').addEventListener('click', () => showDescription('venus'));
document.getElementById('earth').addEventListener('click', () => showDescription('earth'));
document.getElementById('mars').addEventListener('click', () => showDescription('mars'));
document.getElementById('jupiter').addEventListener('click', () => showDescription('jupiter'));
document.getElementById('saturn').addEventListener('click', () => showDescription('saturn'));
document.getElementById('uranus').addEventListener('click', () => showDescription('uranus'));
document.getElementById('neptune').addEventListener('click', () => showDescription('neptune'));
document.getElementById('pluto').addEventListener('click', () => showDescription('pluto'));
document.getElementById('sun').addEventListener('click', () => showDescription('sun'));