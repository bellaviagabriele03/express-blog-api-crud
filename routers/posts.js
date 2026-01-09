
import controller from "../controllers/postController.js";
import express from "express";

const rounter = express.Router();


//INDEX 
 rounter.get("/", controller.index)

//SHOW 
rounter.get("/:id", controller.show)
//STORE
rounter.post("/", controller.store)


//UPDATE
rounter.put("/:id", controller.update)

//MODIFY
rounter.patch("/:id", controller.modify)


//DESTROY 
rounter.delete("/:id", controller.destroy)



export default rounter;