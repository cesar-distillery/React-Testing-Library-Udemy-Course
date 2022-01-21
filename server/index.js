const app = require('express')();
const { cats } = require('./data');
const cors = require('cors');

app.use(cors());

app.get('/cats', async (req, res) => {
    return res.json(cats)
});


app.listen(4000, () => { 
    console.log('Server is running on port 4000');
});