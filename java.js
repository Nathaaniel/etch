//The JavaScript file

const container = document.querySelector('#flex-container');



createEtch(16);

function newGame(){
    var response = prompt("How many tiles wide?" , 64);
    response = parseInt(response);
    if (Number.isInteger(response)){
        newEtch(response)
    }
    else {
        return alert("Please enter an integer")
    }
}


function newEtch (columns) {
    container.innerHTML ='';
    
    createEtch(columns);

    
}

function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function colorChooser() {
    let color = getRadioValue("color");
    console.log(color);
    if (color == "black") {return "black"}
    else if (color == "colours") {return getRandomColor()}
    
}

function createEtch(columns){
    let squareWidth = (960 - (2*columns)) / columns;
    

     
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
            event.target.style.backgroundColor = colorChooser();
        })
    )



}