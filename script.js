const secondParagraph=document.getElementById('secondParagraph');
console.log(secondParagraph);
secondParagraph.innerText='this is the new one';
secondParagraph.style.fontWeight="bold";
const buttons=document.getElementsByTagName('button');
console.log(buttons);
for(let i=0;i<buttons.length;i++){
    buttons[i].style.backgroundColor='pink'
}
const redClass=document.getElementsByClassName('red');
for (let index = 0; index < redClass.length; index++) {
    redClass[index].style.color= 'green';
    
}
const div=document.getElementById('onlyDiv');
console.log(div)
const button1=document.getElementById('button');
console.log(button1);
let count=0;
button1.addEventListener(('click'),()=>{
    button1.innerText=`click ${count} times `;
    count++;
})
const selects=document.getElementsByTagName('select');
const selection=document.getElementById('selection');
for (let index = 0; index<selects.length; index++) 
   selects[index].addEventListener('change',(event)=>{
       selection.innerText=event.target.value;

   })
    
    
