const app = require('express')();
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))