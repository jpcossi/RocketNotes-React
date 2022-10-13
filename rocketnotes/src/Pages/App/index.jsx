import { Button } from '../../components/Button/index.jsx'
import { Container } from './styles.js'

export function App(){  
  return(
    <Container>
      <h1>Hello World!</h1>
      <span>João Paulo Cossi</span>

      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Sair"/>

    </Container>
  )
}