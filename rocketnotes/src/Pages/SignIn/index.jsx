import { FiMail, FiLock} from 'react-icons/fi'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState } from "react"

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()
    
    function handleSignIn(){
        signIn({email, password})
    }
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu Login</h2>
                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}>                        
                </Input>
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}                        
                    icon={FiLock}>
                </Input>
                <Button title="Entrar" onClick={handleSignIn}></Button>
                <Link to="/register">Criar conta</Link>
            </Form>
            <Background></Background>
        </Container>
    )
}
