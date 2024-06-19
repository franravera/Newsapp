const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const titularesRoutes = require('./Routes/titularesRoutes');
const tecnologiaRoutes = require('./Routes/tecnologiaRoutes');
const cochesRoutes = require ("./Routes/cochesRoutes")
const saludRoutes = require('./Routes/saludRoutes'); // Asegúrate de importar correctamente cochesRoutes
const cienciaRoutes = require("./Routes/cienciaRoutes")
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(cors());

// Rutas de titulares
app.use('/api/titulares', titularesRoutes);

// Rutas de tecnología
app.use('/api/tecnologia', tecnologiaRoutes);

// Rutas de coches
app.use('/api/coches', cochesRoutes); // Asegúrate de usar la ruta '/api/coches' para cochesRoutes
// Rutas de Salud
app.use('/api/salud', saludRoutes); // Asegúrate de usar la ruta '/api/coches' para cochesRoutes
//Ruta de ciencia 

app.use('/api/ciencia', cienciaRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
