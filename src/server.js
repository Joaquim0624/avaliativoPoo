import express from "express";
import clientesRouter from "./routers/clientes.js";
import { transacoesRouter } from "./routers/transacoes.js";
// import transacoesRouter from "./routers/transacoes.js";

const app = express();
app.use(express.json());
app.use(clientesRouter)
app.use(transacoesRouter)

app.get("/", (req, res) => {
    res.json("Tudo nos conformes!");
});

app.listen(3333, () => {
    console.log("Server is running on door ?.");
});