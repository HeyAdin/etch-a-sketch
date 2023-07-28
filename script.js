const gridContainer = document.querySelector('.grid-container');

for(let i =0; i<16 ; i++){
    const gridWrap= document.createElement('div');
    for(let j =0; j<16;j++){
        const div = document.createElement('div');
        div.setAttribute('style', 'height:30px; width: 30px; border: 1px solid black;');
        gridWrap.appendChild(div);
    }
    gridContainer.appendChild(gridWrap);
}