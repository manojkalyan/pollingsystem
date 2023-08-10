const express =require('express')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const app = express()
const port = 3002
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded()); // Parse incoming request bodies


const db = require('./config/mongoose')
app.use(express.json())
app.use(cookieParser());



app.use('/', require('./routes')); // Use the defined routes


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
