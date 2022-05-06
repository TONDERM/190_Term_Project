var CabinetMove;
var CabinetImages = new Array(7);
var curCab = 0;
var gorb = 1;

for (var a = 0; a < 7; a++)
    CabinetImages[a] = 'media/pngFrames/Frame' + a + '.png';
    
function selectLeft()
{
  if (curCab  == 6)
      curCab  = 0;
  else   
    ++curCab;
    document.images[0].src = CabinetImages[curCab];
    
    if(gorb == 1)
      gorb = 3;
    else
      gorb-=1;

  setTimeout(stopCab,330);

  
}

function stopCab()
{
  clearInterval(CabinetMove);
}

function selectRight()
{
  if (curCab  == 0)
      curCab  = 6;

  else
    --curCab;
    document.images[0].src = CabinetImages[curCab];

    if(gorb == 3)
    gorb = 1;
    else
    gorb+=1;

  setTimeout(stopCab,330);
}


function selectGame(direction) 
{
  var visibleDrag = document.getElementById("dragDrop").style.opacity;
  var visibleCube = document.getElementById("cubeDude").style.opacity;
  var visibleUFO = document.getElementById("UFOcrash").style.opacity;

  if (direction == 'l')
  {  
    if(gorb == 1 && visibleDrag == 1 && visibleCube == 0 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 1;   
    }
//----------------------------------------------------------------------------
    if(gorb == 2 && visibleDrag == 0 && visibleCube == 1 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 1;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 0;   
    }
//-----------------------------------------------------------------------------------
    if(gorb == 3 && visibleDrag == 0 && visibleCube == 0 && visibleUFO == 1)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 1; 
        document.getElementById("UFOcrash").style.opacity = 0; 
    }  

    CabinetMove= setInterval("selectLeft()", 50);
  }

  if (direction == 'r')
  {  
    if(gorb == 1 && visibleDrag == 1 && visibleCube == 0 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 1; 
        document.getElementById("UFOcrash").style.opacity = 0;   
    }
//----------------------------------------------------------------------------
    if(gorb == 2 && visibleDrag == 0 && visibleCube == 1 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 1;   
    }
//-----------------------------------------------------------------------------------
    if(gorb == 3 && visibleDrag == 0 && visibleCube == 0 && visibleUFO == 1)
    {
        document.getElementById("dragDrop").style.opacity = 1;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 0; 
    } 
    CabinetMove= setInterval("selectRight()", 50); 
  }
}


function playGame()
{
  if(gorb == 1)
    window.location.href = 'Game_03/myDragandDrop.html';

  if(gorb == 2)
    window.location.href = 'CubeN/startCube.html';

  if(gorb == 3)
    window.location.href = 'Fly&Survive/startUFO.html';
  
}

     