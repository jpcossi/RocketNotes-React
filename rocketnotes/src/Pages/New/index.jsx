import { Container, Form } from './styles'
import { TextArea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

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
                    <Section title="Links úteis">
                        <NoteItem value="htt"></NoteItem>
                        <NoteItem isNew placeholder="Novo link"></NoteItem>
                    </Section>
                    <Section title="Marcadores">
                        <div className='tags'>    
                            <NoteItem value="react"></NoteItem>
                            <NoteItem isNew placeholder="Nova Tag"></NoteItem>
                        </div>
                    </Section>
                    <Button title="Salvar"></Button>

                </Form>
            </main>
        </Container>
    )
}