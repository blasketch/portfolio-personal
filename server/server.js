const express = require('express');
const app = express();
const PORT = 5000;

// Middleware para poder leer datos JSON
app.use(express.json());

// Ruta básica para comprobar que el servidor funciona
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
