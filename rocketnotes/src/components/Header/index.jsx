import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"
import { useAuth } from '../../hooks/auth'

export function Header(){
  const { signOut } = useAuth()

  return(
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/jpcossi.png"
          alt="imagem de perfil"/>

        <div>
          <span>Bem-vindo,</span>
          <strong>João Paulo Cossi</strong>
        </div>  
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine></RiShutDownLine>
      </Logout>
    </Container>
  )
}
