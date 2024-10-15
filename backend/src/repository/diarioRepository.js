import con from './connection.js';


export async function inserirDiario(segredo) {
    const comando = `
    INSERT INTO tb_diario(dt_dia, ds_conteudo,)
    values( ? , ?)
    `

    let resposta = await con.query(comando, [segredo.dia, segredo.conteudo])
    let info = resposta[0];

    return info.insertId;
    
}

export async function consultarDiario (id, segredo) {
    const comando = `
    select 
    id_diario     id,
    dt_dia        data,
    ds_conteudo   conteudo
    from tb_diario
    `;

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;

}


export async function alterarDiario (id, segredo) {

    const comando = `
    update tb_diario
    set data = ?,
        conteudo = ?
    where id_diario= ?;
    `
 
    let resposta = await con.query(comando, [segredo.data, segredo.conteudo, id])
    let info = resposta[0];
    
    let linhasAfetadas = registros.affectedRows
  
    return linhasAfetadas;
}

export async function deletarDiario (id) {
    const comando = ` 
     delete from tb_diario
     where id_diario = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;

}