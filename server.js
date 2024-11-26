import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/postsRoutes.js';
import conectarAoBanco from './src/config/dbConfig.js';

dotenv.config();

const app = express();

app.use(express.static("uploads"))

routes(app)

//função para subir o servidor
app.listen(3000,()=>{
    console.log("Olá, Mundo!!!");
});


