import { posts } from "../data.js"

function index(req, res) {
    const risposta = {
        count: posts.length,
        results: posts
    }
    res.json(risposta)
}
function show(req, res) {
    const id = parseInt(req.params.id);
    const resp = posts.find(game => game.id === id);
    res.json(resp);
}

function store(req, res) {
    res.send("creo nuovo post");
}

function update(req, res) {
    const id = req.params.id;
    res.send("aggiorna post n." + id);
}

function modify(req, res) {
    const id = req.params.id;
    res.send("aggiorna parzialmente post n." + id);
}

function destroy(req, res) {
    const id = req.params.id;
    res.send("cancella post n." + id);
}

export { index, show, store, update, modify, destroy };