console.log("Hello Boolean !!");


import express from "express";
import postsRouter from "./routers/posts.js"

//express senza sicilia (questo mi fa male...)
const app = express();
const port = 3000;

//per rendere la cartella public publica (mano sui capelli...)
//url per le immagini: localhost:3000/images/ciambellone.jpeg ----> restituisce l'immagine !!!!!!!
app.use(express.static("public"));

app.use("/posts", postsRouter)


//ascolto del server (ma c'è davvero bisogno di spiegare tutto ? )
app.listen(port, () => {
    console.log(`Server avviato con successo nella porta ${port}`);

})

