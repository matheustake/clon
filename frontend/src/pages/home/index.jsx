import { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Login(){

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {
        const usuario = {
            "nome": nome,
            "senha": senha
        }

        const url = `http://localhost:5001/entrar/`
        let resp = await axios.post(url, usuario)

        if (resp.data.erro != undefined) {
            alert(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/consultar')
        }
    }

return(

        <div className='pagina-login'>
            <h1> ENTRAR </h1>

            <div className='formu'>
                <label htmlFor='nome'>Nome</label>
                <input
                    id='nome'
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className='formu'>
                <label htmlFor='senha'>Senha</label>
                <input
                    id='senha'
                    type='text'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <button onClick={entrar}>Entrar</button>
        </div>

)

}