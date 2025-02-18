const pstartEl=document.querySelector("pStart");
const penadEl=document.querySelector('pEnd');
let timein=3;
let timesec=0;
let number=10;
// pstartEl.textContent=`Remaining Guesses${number}`; // تعداد دفعات 
// penadEl.textContent=`time left:${timein}:${timesec}` ;// زمان
// setInterval(() => {
//     if(timein<=10&&timein<0){
//      timein--;
//      penadEl.style.color="red";
//     }
//     else if(timein<=0&&timein>0){
//      timein--;
//      timesec=59;
//     }else if(timein>0&&timein>0){
//         timesec--;
//     }else if(timein<=0&&timein<=0){
//         alert('Your time is up')
//     }
// }, 1000);

const circleEl=document.querySelectorAll('.circle');
const yourguess1El=document.querySelector('.yourguess1');
circleEl.forEach(circleE => {
    circleE.addEventListener('click',(e)=>{
        const cirEl=document.createElement('div');
        cirEl.classList.add("colors")
        cirEl.classList.add('circleguess')
        yourguess1El.append(cirEl);
        if (e.target.classList.contains("circle1")){
           cirEl.classList.add("circle1");
        } else if(e.target.classList.contains("circle2")){
           cirEl.classList.add("circle2");
        }else if(e.target.classList.contains("circle3")){
           cirEl.classList.add("circle3");
        }else if(e.target.classList.contains("circle4")){
           cirEl.classList.add("circle4");
        }else if(e.target.classList.contains("circle5")){
           cirEl.classList.add("circle5");
        }else if(e.target.classList.contains("circle6")){
           cirEl.classList.add("circle6");
        }
       
       })
});
