const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
  };
//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSze: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})



L.marker([lat, lng], {icon})
    .addTo(map)


/* image gallery */    

function selectImage(event){
    const button = event.currentTarget

    /* remover todas as classes actives */
    const buttons = document.querySelectorAll(".active")
    buttons.forEach((button)=>{
        button.classList.remove("active")
    })
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar a imagem principal
    imageContainer.src = image.src
    //adicionar a classe .active para o clicado
    button.classList.add('active')
}