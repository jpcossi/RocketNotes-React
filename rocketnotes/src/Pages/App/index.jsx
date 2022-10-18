import { Button } from '../../components/Button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Section} from '../../components/Section/index.jsx'

import { Container, Links} from './styles.js'

export function App(){  
  return(
    <Container>
      <Header/>
      <Section title="links úteis" >
          <Links>
            <li> 
                <a href='#'>https://www.rocketseat.com.br/</a>
            </li>
            <li> 
                <a href='#'>https://www.rocketseat.com.br/</a>
            </li>
          </Links>
      </Section>

      <Section title ="Marcadores">

      </Section>

      <Button title="Voltar"/>

    </Container>
  )
}

