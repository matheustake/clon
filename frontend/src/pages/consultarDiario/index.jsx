import { useEffect, useState } from 'react'
import './index.scss'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';





export default function ConsultarDiario(){
    const [token, setToken] = useState(null);
    const [diario, setDiario] = useState([]);


    const navigate = useNavigate()


    async function buscar() {
        const url = `http://localhost:5001/diario?x-access-token=${token}`;
        let resp = await axios.get(url);
        setDiario(resp.data);
    }

    async function excluir(id) {
        const url = `http://localhost:5001/diario/${id}?x-access-token=${token}`;
        await axios.delete(url)

        await buscar()
    }

    async function sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }
    

    // funcao que executa assim que a pagina carrega
    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token == 'null') {
            navigate('/')
        }
    }, [])

    return(
    
        <div className='pagina-consultarDiario'>
        <h2>Bem-vindo {token?.nome}</h2>
        <button onClick={sair}>Sair</button>
        <h1> CONSULTAR </h1>

        <button onClick={buscar}>Buscar</button>
        <button><Link to={'/cadastrar'}>Cadastrar</Link></button>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Conteudo</th>
                </tr>
            </thead>

            <tbody>
                {diario.map(item => 
                    <tr>
                        <td>{item.id}</td>
                        <td>{new Date(item.data).toLocaleDateString()}</td>
                        <td>{item.conteudo}</td>
                        <td>
                            <Link to={`/cadastrar/${item.id}`}>Alterar</Link>
                            <Link onClick={() => excluir(item.id)}>Deletar</Link>
                        </td>
                    </tr>
                )}
            </tbody>

        </table>

       
    </div>
    
    )
    
    }