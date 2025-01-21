import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import router from './routes/api';

import db from "./utils/database";
import docs from './docs/route';


async function init() {
    try {
        const PORT = 3000;
        const result = await db();
        console.log("Database Status: ", result);
        const app = express();
        

        app.use(cors());

        app.use(bodyParser.json());

        app.get('/', (req, res) => {
            res.status(200).json({
                message: "Welcome to the API!",
                data: null,
            })
        });
        
        app.use('/api', router);

        docs(app);

        app.listen(PORT, () => {
            console.log(`server runned on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

init();