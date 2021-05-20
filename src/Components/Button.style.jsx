import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-weight: bold;
`;
