import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/jpcossi.png"
          alt="imagem de perfil"/>

        <div>
          <span>Bem-vindo,</span>
          <strong>João Paulo Cossi</strong>
        </div>  
      </Profile>

      <Logout>
        <RiShutDownLine></RiShutDownLine>
      </Logout>
    </Container>
  )
}
