import { Container } from './styles'
import { FiPlus, FiX} from 'react-icons/fi'

export function NoteItem({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest}></input>
            <button type="button" onClick={onClick} className={isNew ? "button-add" : "button-delete"}>
                {isNew ? <FiPlus></FiPlus> : <FiX></FiX>}
            </button>
        </Container>
    )
}