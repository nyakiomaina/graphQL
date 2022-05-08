const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const data = require("./data");

let database = null;

const mongo = new MongoMemoryServer();

async function startDatabase() {
    const mongoDBURL = await mongo.getConnectionString();
    const connecton = await MongoClient.connect(mngoDBURL, {
        useNewUrlParser: true,
    });

    //seed database
    if (!database) {
        database = connection.db();
        await database.connection("users").insertMany(data.Users);
    }

    return database;
}

async function stopDatabase(){
    await mongo.stop();
}

module.exports = {
    startDatabase,
    stopDatabase
};