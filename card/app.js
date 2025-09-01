const apiURL = https = '//rickandmortyapi.com/api/character/1';

async function getCharacter() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if(!response.ok){
            throw new Error(`Error de respuesta  ${response.status}`);
        }
        console.log(data);

        const imageCard = document.getElementById("img");
        const nameCard = document.getElementById("name");
        const statusCard = document.getElementById("status");

        imageCard.src = data.image;
        nameCard.textContent = data.name; 
        statusCard.textContent = `Status: ${data.status}`;

    } catch (error) {
        console.error("Error al realizar la peticion", error)
    }
}

getCharacter();