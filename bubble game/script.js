 var hitrn=0;
 var score=0;
 

 function increaseScore(){
    score+=10
    document.querySelector("#scoreval").textContent=score;
 }
 function genrateHit(){
     hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn

 }
  function makeBubble(){ var clutter= "";
for(i=1;i<=168;i++){
    var rn= Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML= clutter;
 }
 var timer=60;
 function runtime(){
    var timeInt= setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }else{
            document.querySelector("#pbtm").innerHTML=`<h1> game over!</h1>`
            clearInterval(timeInt);
        }
    },1000);
 }
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        genrateHit();

    }
});





 genrateHit();
 runtime();
 makeBubble();


