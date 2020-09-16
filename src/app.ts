import * as express from 'express';
import * as jwt from 'express-jwt';
import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';
import { sequelize } from './models';
import { ENV } from './config';

import { resolver as resolvers, schema, schemaDirectives } from './graphql';
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import to from 'await-to-js';

const app = express();

/* File Upload Express middleware */
app.use(
    graphqlUploadExpress({
        // Limits here should be stricter than config for surrounding
        // infrastructure such as Nginx so errors can be handled elegantly by
        // `graphql-upload`:
        // https://github.com/jaydenseric/graphql-upload#type-processrequestoptions
        maxFileSize: 10000000, // 10 MB
        maxFiles: 20,
    }),
);

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

const upload = () => {
    console.log('upload');
};

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
server.applyMiddleware({ app });

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
