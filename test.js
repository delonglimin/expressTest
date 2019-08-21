var nconf = require('nconf');
	path = require('path');

nconf.argv()
   .env()
   .file('default-env', path.join(__dirname, 'config.production.json'));
   console.log(nconf.get("database"))
   console.log(nconf)