import con from './connection.js';

export async function inserirUsuario(login) {
    const comando = `
    INSERT INTO tb_usuario(nm_usuario, ds_senha)
    values( ? , ?)
    `

    let resposta = await con.query(comando, [login.nome, login.senha])
    let info = resposta[0];

    return info.insertId;
}

export async function validarUsuario(login) {
    const comando = `
        select 
             id_usuario id,
             nm_usuario nome
        from tb_usuario 
        where 
             nm_usuario = ?
             and ds_senha = ?
    `;
    
    let registros = await con.query(comando, [login.nome, login.senha])
    return registros[0][0];
}