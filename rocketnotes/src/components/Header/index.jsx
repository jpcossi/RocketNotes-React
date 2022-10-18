import { Container } from "./styles";
import { Profile } from "./styles";


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
    </Container>
  )
}
