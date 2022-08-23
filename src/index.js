const app = require('./app');

const port = app.get('port');

app.listen(port, () => console.log(`Servers is Working on localhost:${port}`));
