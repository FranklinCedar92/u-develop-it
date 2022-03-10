const express = require('express');
const res = require('express/lib/response');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');

const apiRoutes = require('./routes/apiRoutes'); //which is to index.js (which is automatically understood in Node)

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// By adding the "/api" prefix here, we can remove it from the individual route expressions after we move them to their new home.
app.use('/api', apiRoutes);

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


/* Test GET route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello world!'
    });
});
*/