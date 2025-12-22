import posts from "../data/data.js";
import controller from "../controllers/postController.js";
import express, { Router } from "express";

const rounter = express.Router();


//INDEX 
rounter.get("/", controller.index)

//SHOW 
rounter.get("/:id", controller.show)
//STORE
rounter.post("/", controller.store)


//UPDATE
rounter.put("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.send("modificato il post con id:" + id)
})

//MODIFY
rounter.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.send("modica parziale del post con id:" + id)
})
//DESTROY 
rounter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.send("hai eliminato il post con id:" + id)
})



export default rounter;