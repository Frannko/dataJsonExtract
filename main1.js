
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const lista = data;
        const cardsContainer = document.querySelector('.list-container');
        lista.forEach((usuario, index) => {
            const row = document.createElement('tr'); 
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${usuario.name}</td>
                <td>${usuario.username}</td>
                <td>${usuario.email}</td>
            `;
            cardsContainer.appendChild(row);
        });
    })
    .catch(error => console.error('Error al obtener datos:', error));
