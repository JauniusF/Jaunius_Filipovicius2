/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output=document.querySelector('#output')
fetch(ENDPOINT).then((res)=>res.json()).then((data)=>{
    document.querySelector('#btn').addEventListener('click',(e)=>{
        e.preventDefault()
        document.querySelector('#message').innerText=' '
        data.forEach((a)=>{
            const user=new NewUser(a);
            const login=document.createElement('span').innerText=` `
            createNewCard(user)
        })
    })
    function createNewCard(a){
        const box=document.createElement('div');
        const login=document.createElement('span').innerText=`${a.login} `
        const face=document.createElement('img')
        face.src=a.image
        console.log(face)
        output.append(box);
        box.append(login)
        box.append(face)
    }
})
class NewUser{
    constructor(data){
        this.login=data.login;
        this.image=data.avatar_url;
    }
}

