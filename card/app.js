const apiUrl = 'https://rickandmortyapi.com/api/character/1'; 

async function getCharacters() {
  try {
    const response = await fetch(apiUrl); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 

    const imgElement = document.getElementById('img');
    const nameElement = document.getElementById('name');
    const statusElement = document.getElementById('status');

    imgElement.src = data.image; 
    nameElement.textContent = data.name; 
    statusElement.textContent = `Status: ${data.status}`; 

    console.log(data.results);
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}

getCharacters();