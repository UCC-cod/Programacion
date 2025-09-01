const urlAPI = 'https://rickandmortyapi.com/api/character';

async function getCharacters() {
    try {
        const response = await fetch(urlAPI);
        if(!response.ok){
            throw new Error(`Error ${response.status}`);
        }
        const data = await response.json();
        console.log(data.results);

        const container = document.getElementById("container");

        data.results.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4', 'p-4');

            card.innerHTML = `
                <div class="card" style="width: 18rem;" id="card">
                    <img src="${character.image}" class="card-img-top" alt="..." id="img">
                    <div class="card-body">
                        <h5 class="card-title" id="name">${character.name}</h5>
                        <p class="card-text" id="status">Status: ${character.status}</p>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
        
    } catch (error) {
        console.error("Error al consumir la API:", error);
    }
}

getCharacters();