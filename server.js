const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Sample notes data (in a real app, this would come from a database)
const notes = [
    { id: 1, title: "Mathematics - Algebra", content: "Algebra notes content here..." },
    { id: 2, title: "Physics - Mechanics", content: "Mechanics notes content here..." },
    { id: 3, title: "Chemistry - Organic", content: "Organic chemistry notes content here..." },
];

// Route to get notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
