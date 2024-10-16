const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta src/public
app.use(express.static(path.join(__dirname, 'src/public')));

// Importar os controladores
const homeController = require('./src/controllers/homeController');
const aboutController = require('./src/controllers/aboutController');

// Rotas
app.get('/', homeController.home);
app.get('/projetos', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/project.html'));
});
app.get('/quem-somos', aboutController.about);
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/contato.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
