import express, {Request,Response} from "express"
import morgan from "morgan"

const app = express();
const hansic = require('./src/router/hansic')

if(process.env.NODE_ENV!=='test'){
    app.use(morgan('dev'))
}

app.get("/",(req:Request,res:Response) => {
    res.send("hello world");
});

app.use('/hansic',hansic)



module.exports = app;
