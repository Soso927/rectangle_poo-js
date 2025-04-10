// Vous mettrez ici le code JavaScript principal


const boutonRectangle = document.querySelector('#create_rect');
const resultatRectangle = document.querySelector('#rect_state');
const boutonperimetre = document.querySelector('#calc_perimeter');
const resultatperimetre = document.querySelector('#perimeter_state');
const boutonAire = document.querySelector('#calc_area');
const resultatAire = document.querySelector('#area_state');
const boutonSquare = document.querySelector('#is_square');
const resulatSquare = document.querySelector('#is_square_state');
let rectangle = null;
boutonRectangle.addEventListener('click', () => {
    console.log(boutonRectangle);
    let longueur = document.querySelector('#length').value;
    let hauteur = document.querySelector('#width').value;

    longueur = Number(longueur);
    hauteur = Number(hauteur);

    rectangle = new Rectangle(longueur, hauteur);
    console.log(`Longueur = ${longueur} | Largeur = ${hauteur}`);
    resultatRectangle.textContent = `Longueur = ${longueur} | Largeur = ${hauteur}`;
});



boutonperimetre.addEventListener('click', () => {
    rectangle.length = Number(rectangle.length);
    rectangle.width = Number(rectangle.width);
    let perimetre = rectangle.perimeter();
    console.log(`Périmètre = ${rectangle.length} + ${rectangle.width} * 2`);
    resultatperimetre.textContent = `Périmètre = ${perimetre} `;
})

boutonAire.addEventListener('click', () => {
    a = Number(rectangle.length);
    b = Number(rectangle.width);
    let aire = rectangle.area();
    console.log(`Aire = ${rectangle.length} * ${rectangle.width}`);
    resultatAire.textContent = `Aire = ${aire}`;
})

boutonSquare.addEventListener('click', () => {
    a = Number(rectangle.length);
    b = Number(rectangle.width);
    let carre = rectangle.isSquare();
    console.log(`Carré ? ${carre}`);
    resulatSquare.textContent = `Carré ? ${carre}`;
})
