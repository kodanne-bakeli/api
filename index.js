let url = `https://jsonplaceholder.typicode.com/photos`
//recupérons l'url avec fecth et effectuons une promesse
//si la promesse se realise
fetch(url).then((response) =>
//effectuons une deuxieme promesse
    response.json().then((data) => {
        console.log(data);
        //faisons appel a une fonction pour afficher la temperature
        function promesseResolve() {
            for (let i = 0; i < 10; i++) {
                photos = document.getElementById("zone_photos");
                photos.innerHTML += `<div class="col-12 col-md-6 col-lg-4 my-3">
                    <img src="${data[i].url}" alt='${data[i].url}' class="img-fluid rounded-3 shadow">
                    <figcaption>${data[i].title}</figcaption>
                    </div>`
            }
        }
        promesseResolve();
    })//si jamais la promeese ne se realise pas
).catch(err => console.log("erreur :" + err));

