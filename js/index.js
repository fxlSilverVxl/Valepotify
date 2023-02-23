const cardTop = document.querySelector('#cardTop').content
const fragment = document.createDocumentFragment()
const contenido = document.querySelector('#contenido')
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusic()
})

const loadMusic = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1cfbc7ea36msh0be25b5ac61b51fp195839jsn895480fb8cd6',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=MX', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            creaCards()
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
}

const creaCards = () => {
    topTwoHundred.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.TrackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.TrackMetadata.trackName

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}