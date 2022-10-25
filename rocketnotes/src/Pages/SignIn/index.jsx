import { FiLogIn, FiMail, FiLock} from 'react-icons/fi'

import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu Login</h2>
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
                <Button title="Entrar"></Button>
                <a href="#">Criar conta</a>
            </Form>
        </Container>
    )
}
