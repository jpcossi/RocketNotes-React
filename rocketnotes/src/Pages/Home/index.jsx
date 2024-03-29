import { FiPlus, FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { api } from '../../services/api'

export function Home(){
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    function handleTagSelected(tagName){
        const alreadySelected = tagsSelected.includes(tagName)
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }else{
            setTagsSelected(prevState => [...prevState, tagName])
        }
        
    }

    useEffect(() =>{
        async function fecthTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fecthTags()
    }, [])

    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header></Header>
            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        onClick={() => handleTagSelected("all")}
                        isActive={tagsSelected.length === 0}
                        >
                    </ButtonText>
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name} 
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                                >
                            </ButtonText>
                        </li>
                    ))
                }
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            </Search>
            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                      title: 'React',
                      tags: [
                        { id: '1', name: 'react' },
                        { id: '2', name: 'rocketseat' }
                      ]
                      }}>                        
                    </Note>
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus></FiPlus> 
                Criar Nota
            </NewNote>
        </Container>        
    )
}