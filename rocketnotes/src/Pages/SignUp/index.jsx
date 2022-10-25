import { FiLogIn, FiMail, FiLock, FiUser} from 'react-icons/fi'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp(){
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
                    icon={FiUser}>
                </Input>
                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail}>
                </Input>
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={FiLock}>
                </Input>
                <Button title="Cadastrar"></Button>
                <a href="#">Voltar para o Login</a>
            </Form>
        </Container>
    )
}
