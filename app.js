import express from 'express';

import clientesRoutes from "./routes/clientes.routes.js";

let app = express();

app.use(express.json());

app.use(clientesRoutes);





app.listen(3000)
console.log("server port 3000")