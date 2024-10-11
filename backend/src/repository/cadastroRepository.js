import con from './connection.js';

export async function inserirCadastro(login) {
    const comando = `
    INSERT INTO tb_usuario(nm_usuario, ds_senha)
    values( ? , ?)
    `

    let resposta = await con.query(comando, [login.nome, login.senha])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarCadastro (id, login) {
  const comando = ` 
  select id_usuario id,
  nm_usuario  nome,
  ds_senha  senha
  from tb_usuario
  `;

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}

export async function alterarCadastro (login, id) {
    const comando = `

    update tb_usuario
    set nm_usuario = ?,
        ds_senha = ?
    where id_usuario = ?;
    `
 
    let resposta = await con.query(comando, [login.nome, login.senha, id])
    let info = resposta[0];
    
    return info.affectedRows;
}

export async function deletarCadastro (id, login) {
    const comando = ` 
     delete from tb_usuario
     where id_usuario = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}