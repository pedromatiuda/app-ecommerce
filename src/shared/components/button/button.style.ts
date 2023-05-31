import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ContainerButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  height: 48px;
  width: 100%;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const ContainerButtonGradient = styled(LinearGradient)<ContainerButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const ContainerButtonSecondary = styled(ContainerButton)<ContainerButtonProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;

export const ButtonDisabled = styled(ContainerButton)<ContainerButtonProps>`
  background-color: ${theme.colors.grayTheme.gray100};
`;

export const ActivityIndicatorButton = styled.ActivityIndicator`
  margin-left: 8px;
`;
