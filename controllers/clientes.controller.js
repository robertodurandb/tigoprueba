import { pool } from "../db.js";

export const getClientes = async (req, res) => {
    const result = await pool.query('select * from cliente')
    res.json(result);
};

export const postClientes = (req, res) => {
    pool.query('INSERT INTO cliente VALUES ?')
}

export const putClientes = (req, res) => res.send('actualizando datos de clientes')

export const deleteClientes = (req, res) => res.send('eliminando datos de clientes')
