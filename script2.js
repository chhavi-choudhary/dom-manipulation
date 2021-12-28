let secondElem=document.getElementById("second");
secondElem.innerHTML="<h1>I am new to this second group<h1>";

let thirdElem=document.getElementById("third");
thirdElem.innerHTML="I am <em>new team member</em> to this second group";
secondElem.style.fontWeight="bold"

const buttons=document.getElementsByTagName("button");
console.log(buttons);
for (let i=0;i<buttons.length;i++){
    buttons[i].style.backgroundColor="teal"
}

const redClass=document.getElementsByClassName("red")
console.log(redClass)
for(let i=0;i<redClass.length;i++){
    redClass[i].style.color='red';
}
const onlyDiv=document.getElementById("onlydiv");

const heading1=document.getElementsByTagName('h3')
console.log(heading1)
for(let i=0;i<heading1.length;i++){
    heading1[i].style.color='blue';
}

const clickButton=document.getElementById('click');
let count=0;
clickButton.addEventListener('click',()=>{
    count+=1;
    clickButton.innerText=`I have been clicked ${count} times`;
})

const userSelection=document.getElementById("show-choice");
const selectors=document.getElementsByTagName("select");
for (let index = 0; index < selectors.length; index++) {
    selectors[index].addEventListener('change',(event)=>{
        console.log(event.target)
        userSelection.innerHTML=event.target.value;
    })
    
}
