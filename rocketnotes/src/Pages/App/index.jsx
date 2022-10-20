import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section} from '../../components/Section'
import { Tag } from '../../components/Tags'

import { Container, Links, Content} from './styles.js'

export function App(){  
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir Nota"></ButtonText>
          <h1>Introdução ao React</h1>   
          <p>
            Et quis elit do enim veniam magna aute fugiat pariatur officia deserunt.
             Do commodo commodo pariatur qui sit ad irure. Enim anim laboris mollit
              deserunt nostrud culpa. Laborum in adipisicing quis occaecat minim tempor
               est incididunt est.Commodo irure aliquip ex cillum mollit do consequat
                commodo aute voluptate est cillum labore minim. Pariatur aliqua do 
                reprehenderit cupidatat sit esse eiusmod velit nisi anim nulla esse
                 occaecat. Non qui aute reprehenderit irure. Cupidatat id laboris duis
                  nisi occaecat sit enim fugiat do anim. Ullamco voluptate Lorem sunt
                   culpa elit. Nisi nulla quis mollit ea ex cupidatat elit irure et
                    fugiat officia. Tempor deserunt consequat incididunt quis veniam
                     anim incididunt deserunt cillum Lorem cupidatat quis.
          </p>
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
            <Tag title="express"/>    
            <Tag title="node"/>    
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}

