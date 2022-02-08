function buildWinePage(wineObject) {
    const div = document.createElement("div");
    div.classList.add("wineEl")

    const div1 = document.createElement('div');
    div.appendChild(div1);
    div1.classList.add("div1")

    const div2 = document.createElement('div');
    div.appendChild(div2);
    div2.classList.add("div2")

    // div.style.backgroundImage = 'url(' + wineObject.image + ')';

    const wineName = document.createElement('h2');
    wineName.innerText = wineObject.wine;

    const wineRating = document.createElement('h3');
    wineRating.innerText ='Rating: ' + wineObject.rating.average;

    const location = document.createElement("p");
    location.innerText =  wineObject.location;

    const locationImage = document.createElement('img');
    locationImage.classList.add('locImg')
    locationImage.src = 'location.png'

    const wineImages = document.createElement('img');
    wineImages.src = wineObject.image;

    location.appendChild(locationImage)
    div1.appendChild(wineName);
    div1.appendChild(wineRating);
    div1.appendChild(location);
    div2.appendChild(wineImages);



    return div;
}


let xhr = new XMLHttpRequest();

xhr.open ('GET', 'https://api.sampleapis.com/wines/reds');

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
        const data = JSON.parse(xhr.responseText).slice(0,10)
        
        for(let wine of data) {
            document.querySelector("#myFIrstDiv").appendChild(buildWinePage(wine))
        }
    }
});
xhr.send(null);



