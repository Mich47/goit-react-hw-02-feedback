import { Box } from 'components/Box';
import { ButtonStyled } from './Feedback.styled';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
};

export const Buttons = ({ keyMap, onFeedbackIncr }) => (
  <Box {...containerStyles}>
    {keyMap.map(item => (
      <ButtonStyled
        key={item}
        type="button"
        name={item}
        onClick={onFeedbackIncr}
      >
        {item}
      </ButtonStyled>
    ))}
  </Box>
);
