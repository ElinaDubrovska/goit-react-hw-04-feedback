import PropTypes from 'prop-types';
import { StyledButton} from "./FeedbackOptions.styled";
import { StyledList } from 'components/StyledCommon/List.styled';
import { StyledListItem } from 'components/StyledCommon/ListItem.styled';

export const FeedbackOptions = (props) =>{
    const {variants, onClick} = props
    return(
        <StyledList>
      {variants.map(variant => {
        return (
          <StyledListItem key={variant}>
            <StyledButton
              type="button"
              name={variant}
              onClick={onClick}
              
            >
              {variant.toUpperCase()}
            </StyledButton>
          </StyledListItem>
        );
      })}
    </StyledList>)

    }
 FeedbackOptions.propTypes = {
      variants: PropTypes.arrayOf(PropTypes.string),
      onClick: PropTypes.func
    }
    

    