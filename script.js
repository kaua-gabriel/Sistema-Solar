// Dados de descrição dos planetas e do Sol
const planetData = {
    mercury: {
        name: "Mercúrio",
        description: "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar. Sua temperatura varia drasticamente entre o dia e a noite devido à sua fina atmosfera."
    },
    venus: {
        name: "Vênus",
        description: "Vênus é conhecido como o 'planeta irmão' da Terra devido ao seu tamanho e composição semelhantes. Sua atmosfera é densa e cheia de gases venenosos."
    },
    earth: {
        name: "Terra",
        description: "A Terra é o único planeta conhecido a abrigar vida. Ela tem uma atmosfera rica em oxigênio e água, essencial para a vida como a conhecemos."
    },
    mars: {
        name: "Marte",
        description: "Marte é conhecido como o planeta vermelho devido ao óxido de ferro em sua superfície. Cientistas acreditam que pode ter abrigado vida no passado."
    },
    jupiter: {
        name: "Júpiter",
        description: "Júpiter é o maior planeta do Sistema Solar, com uma atmosfera composta principalmente por hidrogênio e hélio. Ele tem uma enorme mancha vermelha, uma tempestade persistente."
    },
    saturn: {
        name: "Saturno",
        description: "Saturno é famoso por seus belos anéis, que são feitos de partículas de gelo e rocha. Ele é o segundo maior planeta do Sistema Solar."
    },
    uranus: {
        name: "Urano",
        description: "Urano é um gigante gasoso com uma cor azul-esverdeada, causada pelo metano em sua atmosfera. Ele gira de lado, o que é uma característica única entre os planetas."
    },
    neptune: {
        name: "Netuno",
        description: "Netuno é o planeta mais distante do Sol e tem uma atmosfera fria e densa. Ele é conhecido por seus ventos rápidos e sua cor azul intensa, devido ao metano."
    },
    pluto: {
        name: "Plutão",
        description: "Plutão, um planeta anão, era considerado o nono planeta do Sistema Solar até 2006, quando foi reclassificado. Ele é composto por rochas e gelo."
    },
    sun: {
        name: "Sol",
        description: "O Sol é uma estrela de tamanho médio, responsável por fornecer luz e calor para o Sistema Solar. Ele é essencial para a vida na Terra e tem uma enorme influência gravitacional."
    }
};

// Função para mostrar a descrição na aba deslizante
function showDescription(planet) {
    const nameElement = document.getElementById('planet-name');
    const descriptionElement = document.getElementById('planet-description');
    const infoPanel = document.getElementById('info-panel');

    // Preencher as informações
    nameElement.textContent = planetData[planet].name;
    descriptionElement.textContent = planetData[planet].description;

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

// Função para detectar o clique fora da aba e fechar
document.addEventListener('click', (event) => {
    const infoPanel = document.getElementById('info-panel');
    const panelContent = infoPanel.querySelector('div');

    // Verificar se o clique foi fora da aba
    if (!infoPanel.contains(event.target) && !panelContent.contains(event.target)) {
        infoPanel.classList.remove('active');
    }
});

// Função para fechar a aba ao arrastar
let isDragging = false;
let startX;

document.getElementById('info-panel').addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const panel = document.getElementById('info-panel');
        const distance = e.clientX - startX;
        panel.style.right = `${-100 + distance}px`; // Mover a aba ao arrastar
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        const panel = document.getElementById('info-panel');
        const distance = parseInt(panel.style.right.replace('px', ''));

        if (distance > -150) {
            panel.classList.add('active');
            panel.style.right = '0';
        } else {
            panel.classList.remove('active');
            panel.style.right = '-100%';
        }
        isDragging = false;
    }
});