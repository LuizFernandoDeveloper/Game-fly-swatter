
var height = 0;
var width  =  0;
var positionX = 0;
var positionY = 0;
var fly  = document.createElement('img');
var lifes = 1 ;
var timer = 10;
var timercOfCreateFly = 0;

var level =((window.location.search).replace('?', ''));

if(level === 'normal'){

    timercOfCreateFly = 1500;
}

else if(level === 'difficult'){

    timercOfCreateFly = 1000;
}

else if (level === 'chucknorris'){

    timercOfCreateFly = 750;
}

else{

    alert("Erro: volte e selecione um nivel");
    window.location.href = "index.html";
}

function AdjustGameStageSize(){

    height = window.innerHeight;
    width  = window.innerWidth;

}

AdjustGameStageSize();

var stopwatch = setInterval(function() {

    timer -= 1;
    if(timer < 0){

        clearInterval(stopwatch);
        clearInterval(createFly);
        window.location.href = 'victory.html'

    }
    else{

        document.getElementById('stopwatch').innerHTML = timer;
    }
    
    
}, 1000);

function PositionRandom(){

    if(document.getElementById('fly')) {

        document.getElementById('fly').remove;

        if(lifes > 3){

            window.location.href = 'game-Over.html';
            
        }
        else{

            document.getElementById('life' + lifes).src = "../../assets/imges/coracao_vazio.png";
            lifes++;
        }
        
    }
    

    positionX = Math.floor(Math.random() * width) - 90;
    positionY = Math.floor(Math.random() * height) - 90;
    
    positionX = positionX <0 ? 0 : positionX;
    positionY = positionY <0 ? 0 : positionY;

    
    fly.src = '../../assets/imges/mosca.png';
    fly.className = RandomSize() +' '+ SideRandom();
    fly.style.left = positionX + 'px';
    fly.style.top = positionY + 'px';
    fly.style.position = 'absolute';
    fly.id = 'fly'
    fly.onclick = function(){

        this.remove()
    }

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
    




