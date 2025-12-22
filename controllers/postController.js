import posts from "../data/data";

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
    res.json(post)
}


//STORE
function store (req, res) {
     res.send("creato nuovo post")
}

//UPDATE

//MODIFY

//DESTROY 


const controller = {
    index,
    show,
    store,
}

export default controller;