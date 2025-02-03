let minute=document.querySelector(".minute");
let second=document.querySelector(".seconds");
let btnReset=document.querySelector(".reset")
let btnStart=document.querySelector(".start");
let btnPause=document.querySelector(".pause");

let timerINterval;
let isrunning=false;
let timer=1500;
function timerStart(){
    
    if(!isrunning){
      isrunning=true;
      timerINterval=setInterval(()=>{
        let minutes=Math.floor(timer/60);
        let seconds=Math.floor(timer%60);
        minute.innerText=minutes;
        second.innerText=seconds<10?"0"+seconds:seconds;
        
        if(timer===0){
             clearInterval(timerINterval);
             isrunning=false;
        }
        else{
            timer--;
        }
    },1000)
    }
    
   
}
function pause(){
    clearInterval(timerINterval);
    isrunning=false;
}

function reset(){
    clearInterval(timerINterval);
    isrunning=false;
    timer = 1500;
    minute.innerText = "25";
    second.innerText = "00";
}

btnStart.addEventListener("click",()=>{
    timerStart();
})
btnReset.addEventListener("click",()=>{
    reset();
})
btnPause.addEventListener("click",()=>{
    pause();
})
