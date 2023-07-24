const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const PORT = 5000;

let mongoURI = ''
if (process.env.APP_ENV === 'production') {
    mongoURI = process.env.PRODUCTION_DB
} else {
    mongoURI = process.env.LOCAL_DB
}

mongoose.connect(mongoURI, () => {
    console.log('Connected to Mongo Successfully');
})

// app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Available routes
app.use('/api/auth', require('./routes/Authentication'));
app.use('/api/profile', require('./routes/Profile'));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})