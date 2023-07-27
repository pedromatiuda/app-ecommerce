import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin, Imagelogo } from '../styles/login.style';

const Login = () => {
  const handleOnPress = async () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Imagelogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
        <Input margin="0px 0px 8px 0px" placeholder="Digite seu email" title="Email:" />
        <Input secureTextEntry placeholder="Digite sua senha" title="Senha:" />
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
