import { useState } from "react"
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, Background } from './styles'
import { api } from "../../services/api"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp(){
    const [nome, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = new useNavigate()

    function handleSignUp(){
        if(!nome || !email || !password){
            return alert("Preecha todos os campos!")
        }
        api.post("/users", { nome, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel cadastrar")
            }
        })


        
    }

    return(
        <Container>
            <Background></Background>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua Conta</h2>
                <Input 
                    placeholder="Nome" 
                    type="user" 
                    onChange={e => setName(e.target.value)}
                    icon={FiUser}>
                </Input>
                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    onChange={e => setEmail(e.target.value)}
                    icon={FiMail}>
                </Input>
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                    icon={FiLock}>
                </Input>
                <Button title="Cadastrar" onClick={handleSignUp}></Button>
                <Link to="/">Voltar para o Login</Link>
            </Form>
        </Container>
    )
}
