import express from 'express';
import {
    json,
    urlencoded
} from 'body-parser';
import {
    join
} from 'path';
import {
    createServer
} from 'http';
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express';
import port from './assets/port';
import schema from './data/schema';

const app = express();

app.use(json());
app.use(urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.use('/graphql', json(), graphqlExpress({
    schema
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.set('port', port);

const server = createServer(app);
server.listen(port, () => console.log(`App running on localhost:${port}`));