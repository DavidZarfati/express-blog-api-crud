import express from "express"
import postRouter from "./routers/posts.js"

const app = express()
const port = 3000

app.use(express.static("public"))




app.get("/", (req, resp) => {
    console.log("Rotta /");
    resp.send("test")
});


app.use("/posts", postRouter)

// app.get("/bacheca", (req, res) => {
//     console.log("sono console log dei post");
//     const contatore = posts.length
//     const postList = posts.map((post) => ({
//         title: post.title,
//         content: post.content,
//         imageUrl: post.path,
//         tags: post.tags,
//         id: post.id,
//         totalePost: contatore
//     }))
//     res.json(postList)
// })






app.listen(port, () => {
    console.log("il server è in ascolto sulla porta " + port);
})
