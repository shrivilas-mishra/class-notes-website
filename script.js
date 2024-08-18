document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/notes')
        .then(response => response.json())
        .then(data => {
            const notesList = document.querySelector('.notes-list');
            notesList.innerHTML = '';
            data.forEach(note => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="#">${note.title}</a>`;
                notesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching notes:', error));
});
