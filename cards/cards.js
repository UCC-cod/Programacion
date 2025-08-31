const apiUrl = 'https://rickandmortyapi.com/api/character'; 

async function getCharacters() {
  try {
    const response = await fetch(apiUrl); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 

    const container = document.getElementById('characters-container'); 

 
    data.results.slice(0, 20).forEach(character => {
     
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4'); 

      card.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${character.image}" class="card-img-top" alt="${character.name}">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Status: ${character.status}</p>
          </div>
        </div>
      `;

     
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}

getCharacters(); 

