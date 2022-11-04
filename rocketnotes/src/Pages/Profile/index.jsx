import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft></FiArrowLeft>
                </Link>                
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