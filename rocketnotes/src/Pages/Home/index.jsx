import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header></Header>
            <Menu>
                <li><ButtonText title="Todos" isActive></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
                <li><ButtonText title="NodeJs"></ButtonText></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            </Search>
            <Content>

            </Content>
            <NewNote>
                <FiPlus></FiPlus>
                    Criar Nota
            </NewNote>
        </Container>        
    )
}
