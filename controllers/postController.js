import { posts } from "../data.js"

function index(req, res) {
    let filteredPosts = posts;
    const tag = req.query.tag;
    if (tag) {
        filteredPosts = posts.filter(post => Array.isArray(post.tags) && post.tags.includes(tag));
    }
    const risposta = {
        count: filteredPosts.length,
        results: filteredPosts
    };
    res.json(risposta);
}
function show(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
        return res.status(404).json({
            errore: "IdNonValido",
            numero_errore: 404,
            descrizione: "L'id fornito non è valido."
        });
    }
    const resp = posts.find(game => game.id === id);
    if (!resp) {
        return res.status(404).json({
            errore: "PostNonTrovato",
            numero_errore: 404,
            descrizione: "Nessun post trovato con l'id fornito."
        });
    }
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
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
        return res.status(404).json({
            errore: "IdNonValido",
            numero_errore: 404,
            descrizione: "L'id fornito non è valido."
        });
    }
    const post = posts.find(post => post.id === id);
    if (!post) {
        return res.status(404).json({
            errore: "PostNonTrovato",
            numero_errore: 404,
            descrizione: "Nessun post trovato con l'id fornito."
        });
    }
    res.send("cancella post n." + id);
}

export { index, show, store, update, modify, destroy };