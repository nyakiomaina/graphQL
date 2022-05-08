const express = require("express");
const graphqlHTTP = require ("express-graphql");
const schema = require ("./schema");
const resolver = require ("./resolver");
const { startDatabase } = require ("./database");
const expressPlayground = require ("graphql-playground-midleware-express").default;

//create a context for holding contextual data (db info in this case)
const context = async () = gt; {
    const db = await startDatabase();

    return { db };
};

const app =  express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        context,
    })
);