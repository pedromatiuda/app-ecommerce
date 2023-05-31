import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import {
  ActivityIndicatorButton,
  ButtonDisabled,
  ContainerButton,
  ContainerButtonGradient,
  ContainerButtonSecondary,
} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disable?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, type, loading, disabled, margin, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicatorButton color={theme.colors.neutralTheme.white} />}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ContainerButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ContainerButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ContainerButton margin={margin} {...props} onPress={handleOnPress}>
          <ContainerButtonGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </ContainerButtonGradient>
        </ContainerButton>
      );
  }
};

export default Button;
