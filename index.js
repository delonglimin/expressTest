var nconf = require('nconf');
	path = require('path');
console.log("==============")
nconf.argv()
   .env()
   .file('default-env', path.join(__dirname, 'config.production.json'));
   console.log(nconf.get("database"))
   console.log(nconf)

console.log("==============")
const app = require('express')();
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.all('*', (req, res) => {
    res.json(req.body)
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))