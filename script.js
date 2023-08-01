const gridContainer = document.querySelector('.grid-container');
const mainContainer = document.querySelector('.main-container');
const button = document.querySelector('button');
const sizeText = document.createElement('p');


let size = 16;

sizeText.textContent = "Current Grid Size = " + size + " x " + size;
sizeText.setAttribute('id', 'sizeText');
mainContainer.insertBefore(sizeText, button);

for (let i = 0; i < size; i++) {
    const gridWrap = document.createElement('div');
    gridWrap.classList.add('wrapper');
    gridWrap.setAttribute('style', 'display:flex;flex-direction:column;flex:1;')
    for (let j = 0; j < size; j++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.setAttribute('style', 'flex:1; ');
        gridWrap.appendChild(div);
    }
    gridContainer.appendChild(gridWrap);
}

const allgrid = document.querySelectorAll('.grid');


allgrid.forEach((grid)=>{
    grid.addEventListener('mouseenter',()=>{
        grid.classList.add('color');
    });
});


button.addEventListener('click', () => {
    const allWrapper = document.querySelectorAll('.wrapper');
    let allgrid = document.querySelectorAll('.grid');

    allWrapper.forEach((wrapper) => {
        wrapper.remove();
    });

    allgrid.forEach((grid) => {
        grid.remove();
    });

    size = prompt("Enter Number Between 1 to 100");
    if(size>0 && size<=200){
        sizeText.textContent = "Current Grid Size = " + size + " x " + size;

    for (let i = 0; i < size; i++) {
        const gridWrap = document.createElement('div');
        gridWrap.classList.add('wrapper');
        gridWrap.setAttribute('style', 'display:flex;flex-direction:column;flex:1;')
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            div.setAttribute('style', ' flex:1; ');
            gridWrap.appendChild(div);
        }
        gridContainer.appendChild(gridWrap);
    }
    allgrid = document.querySelectorAll('.grid');
    allgrid.forEach((grid)=>{
    grid.addEventListener('mouseenter',()=>{
        grid.classList.add('color');
    });
});
    }
    else{
        alert("Try Again and Enter size in between give value");
    }
    
});