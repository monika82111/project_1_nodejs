const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to the dashboard page (default route)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Route to the "new job sheet" page
app.get('/new_job_sheet', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new_job_sheet.html'));
});
// Route to the "view job sheet" page
app.get('/view_job_sheet', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view_job_sheet.html'));
});

// Route to the "edit job sheet" page
app.get('/edit_job_sheet', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'edit_job_sheet.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

