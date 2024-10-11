import con from './connection.js';

<<<<<<<< HEAD:backend/src/repository/diarioRepository.js
export async function inserirDiario() {
========
export async function inserirLogin(login) {
>>>>>>>> 38af4f28a7d3d8f1814445b61fdcf7fb5c5c3d0d:backend/src/repository/loginRepository.js
    const comando = `
    INSERT INTO tb_cadastro_adm(email, senha)
    values( ? , ?)
    `

    let resposta = await con.query(comando, [login.email, login.senha])
    let info = resposta[0];

    return info.insertId;
    
}

<<<<<<<< HEAD:backend/src/repository/diarioRepository.js
export async function consultarDiario (id, login) {
========

export async function validarLogin(login){

    const comando = `
    
    select 
    id_cadastro id,
    email,
    senha
    from tb_cadastro_adm
    where email = ? and senha = ?

    `;

    let resposta = await con.query(comando, [login.email, login.senha]);

    let registros = resposta[0][0];

    return registros;

}


export async function consultarLogin() {
>>>>>>>> 38af4f28a7d3d8f1814445b61fdcf7fb5c5c3d0d:backend/src/repository/loginRepository.js
  const comando = ` 
  select id_cadastro id,
  email  email,
  senha  senha
  from tb_cadastro_adm
  `;

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}

<<<<<<<< HEAD:backend/src/repository/diarioRepository.js
export async function alterarDiario (login, id) {
========
export async function alterarLogin(login, id) {
>>>>>>>> 38af4f28a7d3d8f1814445b61fdcf7fb5c5c3d0d:backend/src/repository/loginRepository.js
    const comando = `

    update tb_cadastro_adm 
    set email = ?,
        senha = ?
    where id_cadastro = ?;
    `
 
    let resposta = await con.query(comando, [login.email, login.senha, id])
    let info = resposta[0];
    
    return info.affectedRows;
}

<<<<<<<< HEAD:backend/src/repository/diarioRepository.js
export async function deletarDiario (id, login) {
========
export async function deletarLogin(id) {
>>>>>>>> 38af4f28a7d3d8f1814445b61fdcf7fb5c5c3d0d:backend/src/repository/loginRepository.js
    const comando = ` 
     delete from tb_cadastro_adm
     where id_cadastro = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;

}