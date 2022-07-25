
var height = 0;
var width  =  0;
var positionX = 0;
var positionY = 0;
var fly  = document.createElement('img');

function adjustGameStageSize(){

    height = window.innerHeight;
    width  = window.innerWidth;

}

adjustGameStageSize();

function positionRandom(){

    positionX = Math.floor(Math.random() * width) - 90;
    positionY = Math.floor(Math.random() * height) - 90;
    
    positionX = positionX <0 ? 0 : positionX;
    positionY = positionY <0 ? 0 : positionY;

    
    fly.src = '../../assets/imges/mosca.png';
    fly.className = randomSize();
    fly.style.left = positionX + 'px';
    fly.style.top = positionY + 'px';
    fly.style.position = 'absolute';
    
    document.body.appendChild(fly);
    
    randomSize();
}

function randomSize(){

    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'flyOne';
        case 1:
            return 'flyTwo';
        case 2:
            return 'flyThree';

    }
}
    




