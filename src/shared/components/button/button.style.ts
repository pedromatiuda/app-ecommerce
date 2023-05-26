import styled from 'styled-components/native';

interface ContainerButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  height: 48px;
  width: 100%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}

  background-color: blue;
`;
