import { useEffect, useState } from 'react'
import './index.scss'
import moment from 'moment';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function AdicionarDiario(){
    const [token, setToken] = useState(null);

    const [data, setData] = useState('');
    const [conteudo, setConteudo] = useState('');


    const navigate = useNavigate()

    const { id } = useParams();

    async function salvar() {
        let paramCorpo = {
            "data": data,
            "conteudo": conteudo
        }
        
        if (id == undefined) {
            // Criar
            const url = `http://localhost:5001/diario?x-access-token=${token}`;
            let resp = await axios.post(url, paramCorpo);
            alert('Item adicionado ao Diario. Id: ' + resp.data.novoId);
        } else {
            // Alterar
            const url = `http://localhost:5001/diario/${id}?x-access-token=${token}`;
            let resp = await axios.put(url, paramCorpo);
            alert('Item alterado no Diario.');
        }
    }

    async function consultar(token) {
        if (id != undefined) {
            const url = `http://localhost:5001/diario/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            let date = moment(dados.data).format('YYYY-MM-DD')
            console.log(date)

            setData(date)
            setConteudo(dados.conteudo)
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token == 'null') {
            navigate('/')
        }

        consultar(token);
    }, [])

    return(
        <div className='pagina-cadastrarDiario'>
            <button><Link to={'/consultar'}>Voltar</Link></button>
            <h1>{id ? 'EDITAR' : 'CADASTRAR'}</h1>


            <div className='form'>
            <div>
                <div>
                    <label>Data:</label>
                    <input
                        type='date'
                        value={data}
                        onChange={e => setData(e.target.value)} />
                </div>
                <div>
                    <label>Conteudo:</label>
                    <input
                        type='text'
                        value={conteudo}
                        onChange={e => setConteudo(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>
        </div>
      </div>  
    )
}