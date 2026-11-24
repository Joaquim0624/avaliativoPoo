import { Router } from "express";
import { conn } from "../database/configDb.js";
const transacoesRouter = Router();


transacoesRouter.post("/paginaDeTransacao", (req, res) => {
  const { descricao, tipo, valor, data } = req.body;
  conn.query(
    `insert into transacoes ( descricao, tipo, valor, data) values ('${descricao}', '${tipo}', '${valor}', '${data}')`,
    (err, resul) => {
      if (err) {
        console.log("Erro ao efetuar transação", err);
      } else {
        res.json(`Transação salva com sucesso!`);
      }
    })
});


transacoesRouter.put("/paginaDeTransacao", (req, res) => {
  const {descricao, tipo, valor, data, id} = req.body;

  conn.query(`update transacoes set descricao='${descricao}', tipo='${tipo}', valor='${valor}', data='${data}' where id=${id}`, (err, result) =>{
    if (err) {
      res.status(400).json("Erro ao inserir a transação.", err)
      console.log("Erro ao inserir a transação.", err)
      return;
    }
    res.status(200).json("Inserido com sucesso.")
  })
});


transacoesRouter.get("/paginaDeTransacao", (req, res) => {
  conn.query(
    `select * from transacoes`,
    (err, result) => {
      if (err) {
        console.log("Erro ao buscar as transações.", err);
        res.status(400).json("Erro ao buscar as transações.");
        return;
      }

      res.status(200).json(result);
    }
  );
});


transacoesRouter.delete("/paginaDeTransacao", (req, res) => {
  const { id } = req.body;

  conn.query(
    `delete from transacoes where id=${id}`,
    (err, result) => {
      if (err) {
        console.log("Erro ao excluir a transação.", err);
        res.status(400).json("Erro ao excluir a transação.");
        return;
      }

      res.status(200).json("Transação excluída com sucesso.");
    }
  );
});
export {transacoesRouter};