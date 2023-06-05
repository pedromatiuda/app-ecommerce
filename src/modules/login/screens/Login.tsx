import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import { Icon } from '../../../shared/components/icon/Icon';
import Input from '../../../shared/components/input/Input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Icon name="music" size={44} />
        <Input placeholder="Digite seu email" title="Email:" />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="ENTRAR"
          margin="16px"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
