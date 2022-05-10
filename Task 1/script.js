/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------ */
const input=document.querySelector('#search');
const output=document.querySelector('#output');
function converter (a){
    a=Number(input.value)
    b=a*2.046;
    c=a/0.001;
    d=a*35.274;
    console.log(b)
    bb=`${b} lbs`;
    cc=`${c} g`;
    dd=`${d} oz`;
    createNewElement(bb);
    createNewElement(cc);
    createNewElement(dd);
}
function createNewElement(a){
    f=document.createElement('span');
    f.textContent=`Weigth is ${a} `;
    output.append(f);
}
document.querySelector('#submit-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    converter(input);
});