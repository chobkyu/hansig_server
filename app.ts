import express, {Request,Response} from "express"
import morgan from "morgan"

const app = express();

if(process.env.NODE_ENV!=='test'){
    app.use(morgan('dev'))
}

app.get("/",(req:Request,res:Response) => {
    res.send("hello world");
});



module.exports = app;
