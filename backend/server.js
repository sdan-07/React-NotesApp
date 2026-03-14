const app = require('./src/app')
require('dotenv').config()
const connect_db = require('./src/db/db')
const port = process.env.PORT;
connect_db();

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})