import 'dotenv/config'
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
import dotenv from 'dotenv';

dotenv.config();

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("Imersao-Instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function atualizarPost(id, novoPost){
    const db = conexao.db("Imersao-Instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost})
}

export async function criarPost(novoPost){
    const db = conexao.db("Imersao-Instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

// export async function uploadImagem(req, res) {
//     const novoPost = req.body;
//     try {
//         const postCriado = await criarPost(novoPost);
//         res.status(200).json(postCriado);
//     } catch(erro) {
//         console.error(erro.message);
//         res.status(500).json({"Erro":"Falha na requisição"})
//     }
// } 
