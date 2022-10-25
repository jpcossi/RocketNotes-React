import { Container } from './styles'
import { Tag } from '../Tags'

export function Note({data, ...etc}){
  return(
    <Container>
      <h1>{data.title}</h1>
      {
        data.tags && 
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name}></Tag>
              )
            }
          </footer>
      }
    </Container>
    )
}