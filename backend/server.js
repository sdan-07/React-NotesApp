const app = require('./src/app')
require('dotenv').config()
const connect_db = require('./src/db/db')
const port = 3000;
connect_db();

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})