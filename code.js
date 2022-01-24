urlRegion = "https://restcountries.com/v3.1/region/";

function RequeteRegion(region){
    url = urlRegion + region;
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    requete.onload = () => {
        if(requete.readyState == XMLHttpRequest.DONE){
            if (requete.status == 200){
                let data = requete.response;            
            Affiche(data);
            }
        }
    }
}  

function Affiche(data){

    let maDiv = document.querySelector('#corps');
    maDiv.innerHTML = "";
    data.forEach(info => {
        let langue = info.languages.fra;
        if(langue == 'French'){
            let country = info.name.nativeName.fra.official;
            let flag = info.flags.svg;
            let capital = info.capital;
            let conteneur = document.createElement('div');
            conteneur.innerHTML = `<div class="conteneur"> <img class="flag" src=${flag}> <p class="country"> ${country}</p> <p class="capital"> Capitale: ${capital}</p></div>`;
            maDiv.append(conteneur);
        }
    });
}

//Déroulé du programme

let btnAfrica = document.querySelector('.Africa');
btnAfrica.addEventListener('click', () => {
    RequeteRegion('africa');
});

let btnAmerica = document.querySelector('.America');
btnAmerica.addEventListener('click', () => {
    RequeteRegion('america');
});

let btnAsia = document.querySelector('.Asia');
btnAsia.addEventListener('click', () => {
    RequeteRegion('asia');
});

let btnEurope = document.querySelector('.Europe');
btnEurope.addEventListener('click', () => {
    RequeteRegion('europe');
});

let btnOceania = document.querySelector('.Oceania');
btnOceania.addEventListener('click', () => {
    RequeteRegion('oceania');
});