import posts from "../data/data.js";

//INDEX
function index(req, res) {
    const object = {
        count: posts.length,
        result: posts
    }
    res.json(object)
}


//SHOW
function show(req, res) {

    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id)
    if (post === undefined) {
        res.send("post non trovato chiedi a Batman !!!")
    } else {
        res.json(post)
    }

}


//STORE
function store(req, res) {
    res.send("creato nuovo post")
}

//UPDATE
function update(req, res) {
    const id = parseInt(req.params.id)
    res.send("modificato il post con id:" + id)
}


//MODIFY
function modify(req, res) {
    const id = parseInt(req.params.id)
    res.send("modica parziale del post con id:" + id)
}

//DESTROY 
function destroy(req, res) {
    const id = parseInt(req.params.id)
    res.send("hai eliminato il post con id:" + id)
}



const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}

export default controller;