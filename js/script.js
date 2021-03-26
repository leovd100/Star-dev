const persons = document.querySelector('#persons');
const starships = document.querySelector('#starships');
const planets = document.querySelector('#planets');

function fillConters(){
    Promise.all([
        getDate('people/'),
        getDate('starships/'),
        getDate('planets')
    ])
    .then(data => {
        persons.style.fonSize = '5em';
        starships.style.fonSize = '5em';
        planets.style.fonSize = '5em';

        persons.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;

    }).catch(err => console.log("Erro:", err));
}

function getDate(param){
    return fetch(`https://swapi.dev/api/${param}`)
    .then(res => res.json())
}


fillConters();

function loadPhase(){
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');

    return fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(data => data.json())
    .then(json =>{
        btn.innerHTML = 'Ver mais uma frase!';
        phrase.innerHTML = `"${json.content}"`;

        phrase.animate([
            {transform: 'translateY(-70px)'},
            {transform: 'translateY(0px)'}
        ],{
            duration:500
        })

    }).catch(err => console.log("ERRO ", err))
};


