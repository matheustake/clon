import loginController from './controller/loginController.js'
import diarioController from './controller/diarioController.js' 

export default function adicionarRotas(servidor){
 servidor.use(loginController);
 servidor.use(diarioController);
}