
import { Router } from "express";
import { conn } from "../database/configDb.js";
import bcrypt from "bcrypt";

const clientesRouter = Router();


clientesRouter.post("/paginaDoCliente", async (req, res) => {
  const { nome, email, senha, saldo } = req.body;
  const senhaCrypt = await bcrypt.hash(senha, 10);

  conn.query(
    `insert into clientes (nome, email, senha, saldo) values ('${nome}', '${email}', '${senhaCrypt}', '${saldo}')`,
    (err, result) => {
      if (err) {
        console.log("Erro ao inserir cliente", err);
      } else {
        res.json(`Cliente ${nome} salvo com sucesso!`);
      }
    }
  );
});


clientesRouter.get("/paginaDoCliente", (req, res) => {
  conn.query(
    `select * from clientes`,
    (err, result) => {
      if (err) {
        console.log("Erro ao buscar clientes", err);
      } else {
        res.json(result);
      }
    }
  );
});


clientesRouter.get("/paginaDoCliente/:id", (req, res) => {
  const { id } = req.params;

  conn.query(
    `select * from clientes where id = '${id}'`,
    (err, result) => {
      if (err) {
        console.log("Erro ao buscar cliente", err);
      } else {
        res.json(result);
      }
    }
  );
});


clientesRouter.put("/paginaDoCliente/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, saldo } = req.body;
  const senhaCrypt = await bcrypt.hash(senha, 10);

  conn.query(
    `update clientes set nome = '${nome}', email = '${email}', senha = '${senhaCrypt}', saldo = '${saldo}' where id = '${id}'`,
    (err, result) => {
      if (err) {
        console.log("Erro ao atualizar cliente", err);
      } else {
        res.json(`Cliente ${nome} atualizado com sucesso!`);
      }
    }
  );
});


clientesRouter.delete("/paginaDoCliente/:id", (req, res) => {
  const { id } = req.params;

  conn.query(
    `delete from clientes where id = '${id}'`,
    (err, result) => {
      if (err) {
        console.log("Erro ao excluir cliente", err);
      } else {
        res.json("Cliente excluído com sucesso!");
      }
    }
  );
});

export default clientesRouter;
