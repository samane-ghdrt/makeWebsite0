const pstartEl=document.querySelector(".pStart");
const penadEl=document.querySelector('.pEnd');
let timein=10;
let timesec=0;
let number=10;
// time & number
pstartEl.textContent=`Remaining Guesses : ${number}`; // تعداد دفعات 
penadEl.textContent=`time left:${timein}:${timesec < 10 ? '0' + timesec : timesec}` ;// زمان
const intervalId = setInterval(() => {
   if (timein > 0 || timesec > 0) {
      if (timesec > 0) {
        timesec--;
      } else {
        timein--;
        timesec = 59;
      }
      penadEl.textContent = `Time left: ${timein}:${timesec < 10 ? '0' + timesec : timesec}`;
      if (timesec < 10) {
        penadEl.style.color = "red";
      }
    } else {
      clearInterval(intervalId); 
      alert("Your time is up!");
    }
}, 1000);
// guess
const circleEl=document.querySelectorAll('.circle');
const yourguess1El=document.querySelector('.yourguess1');
circleEl.forEach(circleE => {
    circleE.addEventListener('click',(e)=>{
      
      const circlechids = yourguess1El.children.length;
      console.log(circlechids);
      if (circlechids < 8) {
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
      }else {
         alert("You have to choose 8 colors")
      }
       })
});

 let arr=['red','blue','yellow','purple','green','orange'];
 let randomColor1=Math.floor(Math.random()*6);
 let randomColor2=Math.floor(Math.random()*6);
 let randomColor3=Math.floor(Math.random()*6);
 let randomColor4=Math.floor(Math.random()*6);
 let randomColor5=Math.floor(Math.random()*6);
 let randomColor6=Math.floor(Math.random()*6);
 let randomColor7=Math.floor(Math.random()*6);
 let randomColor8=Math.floor(Math.random()*6);
 const submitEl=document.querySelector('.Submit');
 const yourguess3El=document.querySelector('.yourguess3');
 function guess (){
 
 if (number>0) {
   
   number--;
   pstartEl.textContent=`Remaining Guesses : ${number}`; 

   const divEl=document.createElement('div');
   divEl.classList.add('card2')
   yourguess3El.append(divEl);
 } else {
   alert("you lost...")
 }
 }
 submitEl.addEventListener("click",guess);