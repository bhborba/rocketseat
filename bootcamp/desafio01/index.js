const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
let qtdRequests = 0;

// Middleware global
server.use((req, res, next) => {
  //inicia captura de tempo do request
  console.time("Request");
  //incrementa o contador de requests
  qtdRequests++;
  //mostra quantidade de requests
  console.log(`Quantidade de requisições até agora: ${qtdRequests}`);
  //permite que o restante do código (get, put...) seja executado
  next();
  //termina captura de tempo do request
  console.timeEnd("Request");
});

// Middleware local

function checkTitleExists(req, res, next) {
  // verifica se o body contém a informação do título
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }
  //permite que o restante do código (get, put...) seja executado
  return next();
}

//verifica se o id que está sendo passado por parametro existe
function checkProjectInArray(req, res, next) {
  //busca o indice do id passado por parametro
  const indiceId = projects.findIndex(k => k.id == req.params.id);
  const project = projects[indiceId];
  if (!project) {
    return res.status(400).json({ error: "Project does not exists" });
  }

  req.indiceId = indiceId;
  //permite que o restante do código (get, put...) seja executado
  return next();
}

//cadastrar um projeto
server.post("/projects", (req, res) => {
  projects.push({
    id: req.body.id,
    title: req.body.title,
    tasks: []
  });
  return res.status(201).json({ created: "O projeto foi cadastrado" });
});

//listar projetos cadastrados
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//editar um projeto
server.put(
  "/projects/:id",
  checkProjectInArray,
  checkTitleExists,
  (req, res) => {
    const index = req.indiceId;
    const title = req.body.title;
    projects[index].title = title;
    return res.status(200).json({ success: "O projeto foi alterado" });
  }
);

//deletar um projeto
server.delete("/projects/:id", checkProjectInArray, (req, res) => {
  const index = req.indiceId;
  projects.splice(index, 1);
  return res.status(200).json({ success: "O projeto foi deletado" });
});

//cadastrar uma tarefa
server.post("/projects/:id/tasks", checkProjectInArray, (req, res) => {
  const index = req.indiceId;
  const titulo = req.body.title;
  projects[index].tasks.push(titulo);
  return res.status(201).json({ created: "Tarefa cadastrada" });
});
server.listen(3000);
