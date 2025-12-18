import express from "express"
import { posts } from "../data.js"

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    const risposta = {
        count: posts.length,
        results: posts
    }
    res.json(risposta)
})

//SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const resp = posts.find(game => game.id === id);
    res.json(resp)
})

//STORE
router.post("/", (req, res) => {
    res.send("creo nuovo post")
})

//UPDATE
router.put("/:id", (req, res) => {
    const id = req.params.id;
    res.send("aggiorna post n." + id)
})

//MODIFY
router.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.send("aggiorna parzialmente post n." + id)
})

//DESTROY
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.send("cancella post n." + id)
})


export default router; 