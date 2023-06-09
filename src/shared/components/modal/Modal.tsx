import { Alert, Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';

import { theme } from '../../themes/theme';
import Button from '../button/Button';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ContainerModal, IconCloseModal } from './modal.style';

interface ModalPropps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalPropps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text type={textTypes.SUB_TITLE_BOLD} color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Text>{text}</Text>
        <IconCloseModal onPress={onCloseModal} name="cross" />
        <Button title="OK" onPress={onCloseModal} />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
