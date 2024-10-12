const express = require('express');
const app = express();

// Ruta básica para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

// Escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
