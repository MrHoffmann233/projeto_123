let img;

function preload() {
    img = loadImage('example.jpg'); // Carrega a imagem
}

function setup() {
    createCanvas(400, 400).center(); // Cria um canvas e centraliza na página
    image(img, 0, 0, width, height); // Exibe a imagem no canvas
}

function draw() {
    // Deixe esta função vazia, não precisa ser usada neste exemplo
}

document.getElementById('applyFilterButton').addEventListener('click', function() {
    filter(GRAY); // Aplica o filtro de escala de cinza
});
