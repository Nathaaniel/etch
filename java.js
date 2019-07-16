//The JavaScript file

const container = document.querySelector('#flex-container');



createEtch(64);

function createEtch(columns){
    let squareWidth = (960 - (2*columns)) / columns;
    console.log(squareWidth + "px")



    for (let i=0; i<(columns**2); i++) {
        const i = document.createElement('div');
        i.classList.add('box');
        i.style.width = squareWidth + "px";
        i.style.height = squareWidth + "px";
        i.style.borderStyle = "solid";
        i.style.borderWidth = "1px";
        container.appendChild(i);
    }

    const boxes = document.querySelectorAll("div.box");

    boxes.forEach((box) =>
        box.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        })
    )



}