
import {ButtonContainer, ButtonContainerdois} from './styles'


const Button = ({label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
  }

  const Buttondois = ({label, onClick}) => {
    return (
        <ButtonContainerdois onClick={onClick}>
            {label}
        </ButtonContainerdois>
    );
  }
  
 export { Button, Buttondois };
  