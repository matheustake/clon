import { gerarToken } from '../utils/jwt.js';

import * as db from '../repository/loginRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/entrar/', async (req, resp) => {

    try {
        let login = req.body;

        let dados = await db.validarLogin(login);

        if (dados == null) {
            resp.send({ error: 'E-mail ou senha incorreta!' });
        }
        else {
           let token = gerarToken(dados);

            resp.send({
                "token": token
            });
        }
    }
    catch (error) {

        resp.status(400).send({
            erro: error.message
        })

    }

})


endpoints.get('/login/', async (req, resp) => {

    try {
        let pessoa = req.body;

        let id = await db.consultarUsuario();

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default endpoints;