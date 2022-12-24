import { Box } from 'components/Box';
import { TextStyled } from './Feedback.styled';

export const Statistics = ({ isEmptyState, keyMap, getStateValue }) => {
  {
    return isEmptyState ? (
      <TextStyled fontWeight="bold" fontSize="m">
        There is no feedback
      </TextStyled>
    ) : (
      <Box>
        {keyMap.map(item => (
          <TextStyled key={item}>
            {item}: {getStateValue(item)}
          </TextStyled>
        ))}
      </Box>
    );
  }
};
