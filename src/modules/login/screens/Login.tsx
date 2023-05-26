import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Teste</Text>
        <Input />
        <Button title="ENTRAR" margin="16px" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
