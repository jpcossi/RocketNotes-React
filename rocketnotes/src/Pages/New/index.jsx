import { Container, Form } from './styles'
import { TextArea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { api } from '../../services/api'

export function New(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))

    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }
    
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })

        alert("Nota criada com sucesso!")
        navigate("/")
    }
    
    return(
        <Container>
            <Header></Header>
            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">voltar</Link>
                    </header>
                    <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}>                        
                    </Input>
                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                        >
                    </TextArea>
                    <Section title="Links úteis">                        
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}>
                                </NoteItem>
                            ))
                        }                     
                        <NoteItem 
                            isNew 
                            placeholder="Novo Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}>
                        </NoteItem>
                    </Section>                    
                    <Section title="Marcadores">
                        <div className='tags'> 
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}>
                                    </NoteItem>
                                ))
                            }
                            <NoteItem 
                                isNew 
                                placeholder="Nova Tag"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}>                                
                            </NoteItem>
                        </div>
                    </Section>
                    <Button 
                        title="Salvar"
                        onClick={handleNewNote}>
                    </Button>
                </Form>
            </main>
        </Container>
    )
}