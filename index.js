
function init(isFirst)
{   
    if(isFirst!==j)
    {
        currLvl=1;
        currRnd=0;
        colorsToPick=[];
        gameCondition=1;
        randomColor();
       $("h1").text("Level "+currLvl);
       console.log("init");
      
    }
    j="shit";
        
}

function checkGameCondition()
{
    if(gameCondition==1)
    {
        currRnd++;
        if(currRnd==currLvl)
        {
            setTimeout(randomColor,1000);
            currLvl++;
            currRnd=0;
        }
        $("h1").text("Level "+currLvl);
    }
    else 
    {
        $("body").addClass("game-over");
        setTimeout( function(){$("body").removeClass("game-over")},200);
        $("h1").text("Game Over, Press Any Key to Restart");
        hiScore=currLvl;
        $("h3").text("Hi score:"+ hiScore);
        var audio = new Audio('./sounds/wrong.mp3');
               audio.play();
        currLvl=0;

        $("body").keypress(function(){ init(1)});
        
    }
}

function randomColor()
{
    var rand=Math.floor(Math.random()*4)+1;
    switch(rand)
    {
    case 1:
    colorToPick="green";
    break;
    case 2:
    colorToPick="red";
    break;
    case 3:
    colorToPick="yellow";
    break;
    case 4:
    colorToPick="blue";
    break;
    }
    colorsToPick.push(colorToPick);

    chosenColorClass="."+colorToPick;
    
    $(chosenColorClass).addClass("pick");
    playAudio($(chosenColorClass));
    setTimeout(function(){
        $(chosenColorClass).removeClass("pick");
      },150);

}

function checkColor(button)
{
    
   
    var tempColor=colorsToPick[currRnd];
    if($(button).hasClass(tempColor) && currLvl!=0)
    {
        return 1;
    
    }
    return 0;
}

    function clickButton(buttonn){
        $(buttonn).addClass("pressed");$("body");
    
     setTimeout(function(){
        $(buttonn).removeClass("pressed");
      },200);
    }

    function playAudio(buttonn)
    {
        if($(buttonn).hasClass('green'))
            {
               var audio = new Audio('./sounds/green.mp3');
               audio.play();
            }
            else if($(buttonn).hasClass('red'))
            {
               var audio = new Audio('./sounds/red.mp3');
               audio.play();
            }
            else if($(buttonn).hasClass('yellow'))
               {
                  var audio = new Audio('./sounds/yellow.mp3');
                  audio.play();
               }
               else if($(buttonn).hasClass('blue'))
                   { 
                      var audio = new Audio('./sounds/blue.mp3');
                      audio.play();
                   }   
    }


////////////////////////////main/////////////////////////

var currLvl=1;
var currRnd=0;
var colorsToPick=[];
var colorToPick;
var gameCondition;
var colorsPicked=[];
var hiScore=0;
let j;


    $("body").keypress(function(){init("shit"); console.log("shit")});
    



    $(".btn").click(function(event){
        var btnClicked=this;
        gameCondition=checkColor(btnClicked);
        checkGameCondition();
        playAudio(btnClicked);
        clickButton(btnClicked);
       });
   
