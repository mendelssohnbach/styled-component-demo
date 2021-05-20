import styled from 'styled-components';
import StyledButton from './Button';

export const Button = styled(StyledButton)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-weight: bold;

  &:hover {
    background-color: coral;
    & label {
      color: green;
    }
  }
  &:active {
    background-color: #ff7528;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 25px;
  color: white;
`;
