import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/Textarea'
import { Container, Form } from './styles'

export function New(){
    return(
        <Container>
            <Header></Header>
            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="#">voltar</a>
                    </header>
                    <Input placeholder="Título"></Input>
                    <TextArea placeholder="Observações"></TextArea>
                </Form>
            </main>
        </Container>
    )
}