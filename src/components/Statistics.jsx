import {StyledList} from "components/StyledCommon/List.styled"
import { StyledText } from "components/StyledCommon/Text.styled"
import {StyledListItem} from "components/StyledCommon/ListItem.styled"
import PropTypes from 'prop-types';

export const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
        <StyledList>
            <StyledListItem>
                <StyledText> Good : {good}
                </StyledText>
                </StyledListItem>
            <StyledListItem>
                <StyledText> Neutral : {neutral}
                </StyledText>
                </StyledListItem>
            <StyledListItem>
                <StyledText> Bad : {bad}
                </StyledText>
            </StyledListItem>
            <StyledListItem>
                <StyledText> Total : {total}
                </StyledText>
            </StyledListItem>
            {total > 0 &&
             <StyledListItem>
                <StyledText> Positive Feedback : {positivePercentage} %
                </StyledText>
                </StyledListItem>}
        </StyledList>
    )
}

Statistics.propTypes = {
    props: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number,
        positivePercentage:PropTypes.number    
    }),  
}