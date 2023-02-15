import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Container, Form, Avatar } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg' 

export function Profile(){
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)
    
    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({user, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)        
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft></FiArrowLeft>
                </Link>                
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário"></img>
                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>    
                        <input 
                            id="avatar" 
                            type="file"
                            onChange={handleChangeAvatar}></input>  
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome" 
                    type="user" 
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}>
                </Input>
                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                </Input>
                <Input 
                    placeholder="Senha atual" 
                    type="password" 
                    onChange={e => setPasswordOld(e.target.value)}
                    icon={FiLock}>
                </Input>
                <Input 
                    placeholder="Nova senha" 
                    type="password" 
                    onChange={e => setPasswordNew(e.target.value)}
                    icon={FiLock}>
                </Input>
                <Button title="Salvar" onClick={handleUpdate}></Button>
            </Form>            
        </Container>
    )
}