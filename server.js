// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // Puerto en el que escucha el servidor

// Middleware
app.use(cors());
app.use(express.json());

// Datos simulados para las gráficas (reemplaza con tus datos reales)
const data = {
  bestSellingComputers: [
    { name: 'Laptop HP Pavilion', sales: 120 },
    { name: 'PC Gamer Lenovo Legion', sales: 90 },
    { name: 'iMac 27" Apple', sales: 80 },
    { name: 'Notebook ASUS ZenBook', sales: 70 },
    { name: 'Surface Laptop Microsoft', sales: 60 },
  ],
  otherChartData1: [
    { category: 'Juegos', value: 50 },
    { category: 'Productividad', value: 70 },
    { category: 'Entretenimiento', value: 30 },
  ],
  otherChartData2: [
    { label: 'Ventas Online', count: 25 },
    { label: 'Ventas en Tiendas', count: 45 },
    { label: 'Ventas por Distribuidores', count: 60 },
  ],
};

// Rutas de la API
app.get('/api/best-selling-computers', (req, res) => {
  res.json(data.bestSellingComputers);
});

app.get('/api/other-chart-data-1', (req, res) => {
  res.json(data.otherChartData1);
});

app.get('/api/other-chart-data-2', (req, res) => {
  res.json(data.otherChartData2);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
