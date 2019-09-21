const express = require("express");

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name" = "Bruno", "email" : "bruno@gmail.com "}

const users = ["Bruno", "Henrique"];

// Middleware global
server.use((req, res, next) => {
  //inicia captura de tempo do request
  console.time("Request");
  //mostra qual req está sendo feito
  console.log(`Method: ${req.method}; URL: ${req.url}`);
  //permite que o restante do código (get, put...) seja executado
  next();
  //termina captura de tempo do request
  console.timeEnd("Request");
});

// Middleware local

//verifica se há a propriedade "name" no body
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }
  //permite que o restante do código (get, put...) seja executado
  return next();
}

//verifica se o usuário que está sendo passado por parametro existe
function checkUserInArray(req, res, next) {
  // adiciona o nome para a const user
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }
  //coloca o valor do index dentro de req.user
  req.user = user;
  //permite que o restante do código (get, put...) seja executado
  return next();
}

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  //const { index } = req.params;
  //return res.json(users[index]);
  return res.json(req.user);
  //return res.json({ message: `Buscando o usuário ${index}` });
});

server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3000);
