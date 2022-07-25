
var height = 0;
var width  =  0;
var positionX = 0;
var positionY = 0;
var fly  = document.createElement('img');

function AdjustGameStageSize(){

    height = window.innerHeight;
    width  = window.innerWidth;

}

AdjustGameStageSize();

function PositionRandom(){

    positionX = Math.floor(Math.random() * width) - 90;
    positionY = Math.floor(Math.random() * height) - 90;
    
    positionX = positionX <0 ? 0 : positionX;
    positionY = positionY <0 ? 0 : positionY;

    
    fly.src = '../../assets/imges/mosca.png';
    fly.className = RandomSize() +' '+ SideRandom();
    fly.style.left = positionX + 'px';
    fly.style.top = positionY + 'px';
    fly.style.position = 'absolute';
    
    document.body.appendChild(fly);
    
    RandomSize();
}

function RandomSize(){

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

function SideRandom(){

    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'sideRight';
        case 1:
            return 'sideLeft';
 

    }


}
    




