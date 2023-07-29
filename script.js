const gridContainer = document.querySelector('.grid-container');

for(let i =0; i<16 ; i++){
    const gridWrap= document.createElement('div');
    gridWrap.setAttribute('style', 'display:flex;flex-direction:column;flex:1;')
    for(let j =0; j<16;j++){
        const div = document.createElement('div');
        div.setAttribute('style', 'border: 1px solid black; flex:1; ');
        gridWrap.appendChild(div);
    }
    gridContainer.appendChild(gridWrap);
}
