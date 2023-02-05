const express = require('express');
const dotenv = require('dotenv');
const {mongoose } = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

const userRouter = require('./routes/user');
const leaveRouter = require('./routes/leave');
const wfhRouter = require('./routes/wfh')

dotenv.config();
const port = process.env.PORT;
const URL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.static('uploads'))
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

mongoose.set('strictQuery', false);
mongoose.connect(URL,()=>{
    console.log("DB connection successful!!!");
})

app.use('/',userRouter);
app.use('/leave',leaveRouter);
app.use('/wfh',wfhRouter);

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})