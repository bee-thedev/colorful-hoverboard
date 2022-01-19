const container = document.getElementById("container");
const colors = ['#ec6643','#8c22d6','#92e5aa','#e38994','#419d33','#f49c7b','#a44709','#2cb01f', '#731172', '#f71bc5'];
const TotSQUARES = 600;

// ------------  Looping thru COLORS and placing the COLORS onto the newly created DIV -----

for(let i=0; i < TotSQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeRandomColor(square));

    container.appendChild(square);
}
// ----------- Set Color on Mouse Over --------------

function setColor(element){
    const color = generateRandomColor();
    element.style.background = color;
    element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// ------ Removing color when MOUSE OUT -------------

function removeRandomColor(element){
    element.style.background = 'black';
    element.style.boxShadow = '0 0 2px #000';
}

// ---------- to generate random colors out of color constant -----------

function generateRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}