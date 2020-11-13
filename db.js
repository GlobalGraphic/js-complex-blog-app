const mongodb = require('mongodb');
require('dotenv').config();

mongodb.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    module.exports = client.db();

    // app listening for specific PORT
    const app = require('./app');
    app.listen(2028);
});