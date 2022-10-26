import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'

import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft></FiArrowLeft>
                </a>                
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/jpcossi.png" alt="Foto do usuário"></img>
                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>    
                        <input id="avatar" type="file"></input>  
                    </label>
                </Avatar>
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
                    placeholder="Senha atual" 
                    type="password" 
                    icon={FiLock}>
                </Input>
                <Input 
                    placeholder="Nova senha" 
                    type="password" 
                    icon={FiLock}>
                </Input>
                <Button title="Salvar"></Button>
            </Form>            
        </Container>
    )
}