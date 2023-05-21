const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir os arquivos estáticos da pasta 'build' do projeto React
app.use(express.static(path.join(__dirname, 'build')));

// Rota para servir a aplicação React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
