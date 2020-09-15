import * as express  from 'express';
import * as jwt from 'express-jwt';
import { ApolloServer } from 'apollo-server-express';
import { sequelize } from './models';
import { ENV } from './config';
const bodyParser = require('body-parser');

import { resolver as resolvers, schema, schemaDirectives } from './graphql';
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import to from 'await-to-js';
import { raw } from 'body-parser';
// The Express middleware for file upload

const app = express();

const authMiddleware = jwt({
    secret: ENV.JWT_ENCRYPTION,
    credentialsRequired: false,
});
app.use(authMiddleware);

app.use(function (err, req, res, next) {
    const errorObject = {error: true, message: `${err.name}: ${err.message}`};
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json(errorObject);
    } else {
        return res.status(400).json(errorObject);
    }
});
// app.use('/graphql', bodyParser.json());

const upload = () => {
    console.log('upload');
};

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    schemaDirectives,
    playground: true,
    uploads: false,
    context: ({ req }) => {
        let nreq = <any> req;
        let user = nreq.user;
        return {
            [EXPECTED_OPTIONS_KEY]: createContext(sequelize),
            user: user
        };
    }
});
server.applyMiddleware({ app, bodyParserConfig: true });

app.listen({ port: ENV.PORT }, async () => {
    console.log(`🚀 Server ready at http://localhost:${ENV.PORT}${server.graphqlPath}`);
    let err;
    [err] = await to(sequelize.sync(
        // {force: true},
    ));

    if(err){
        console.error('Error: Cannot connect to database');
    } else {
        console.log('Connected to database');
    }
});
