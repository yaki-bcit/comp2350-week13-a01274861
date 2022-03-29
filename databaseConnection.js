const database = require('mongoose');

//const MongoClient = require("mongodb").MongoClient;

const is_heroku = process.env.IS_HEROKU || false;

const databaseName = "lab_example";

const herokuURI = "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.vbdu6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const localURI = "mongodb://localhost/"+databaseName+"?authSource=admin&retryWrites=true&w=majority";

if (is_heroku) {
	database.connect(herokuURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
else {
	database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = database;
		