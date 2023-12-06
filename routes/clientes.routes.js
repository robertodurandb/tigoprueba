import { Router } from 'express';
import { getClientes, postClientes, putClientes, deleteClientes } from "../controllers/clientes.controller.js";

const router = Router();

router.get('/clientes', getClientes);

router.post('/clientes', postClientes)

router.put('/clientes', putClientes)

router.delete('/clientes', deleteClientes)

export default router;