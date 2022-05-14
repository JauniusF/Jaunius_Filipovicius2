/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';
const box=document.querySelector('#output')
fetch ('./cars.json')
    .then((res)=>res.json())
    .then((data)=>{
    console.log(data)
    data.forEach((user)=>{
        const carCard=document.createElement('div')
        box.append(carCard)

        const brand=document.createElement('h3');
        brand.innerText=user.brand;
        brand.classList.add('brand');
        carCard.append(brand)

        const models=document.createElement('h4');
        models.innerText=user.models;
        models.classList.add('models');
        brand.append(models)

        
    });
    });
