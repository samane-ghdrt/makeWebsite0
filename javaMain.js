const pstartEl=document.querySelector("pStart");
const penadEl=document.querySelector('pEnd');
let timein=3;
let timesec=0;
let number=10;
pstartEl.textContent=`Remaining Guesses${number}`; // تعداد دفعات 
penadEl.textContent=`time left:${timein}:${timesec}` ;// زمان
setInterval(() => {
    if(timein<=10&&timein<0){
     timein--;
     penadEl.style.color="red";
    }
    else if(timein<=0&&timein>0){
     timein--;
     timesec=59;
    }else if(timein>0&&timein>0){
        timesec--;
    }else if(timein<=0&&timein<=0){
        alert('Your time is up')
    }
}, 1000);

