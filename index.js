const app = require('express')();
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/asd', (req, res) => {
    res.send('asd');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))