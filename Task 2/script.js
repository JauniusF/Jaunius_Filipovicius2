/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const mygtukas=document.querySelector('#btn__element')
let counter=0
document.querySelector('#btn__element').addEventListener('click', (e)=>{
    counter++;
    e.preventDefault();
    document.querySelector('#btn__state').innerText=`${counter}`
})