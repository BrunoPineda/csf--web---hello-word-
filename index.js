const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo desde Node.js!');
});

app.get('/saludo', (req, res) => {
    res.send('¡Hola Mundo desde la nueva ruta!');
  });

  
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
