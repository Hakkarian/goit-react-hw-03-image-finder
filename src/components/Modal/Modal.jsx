import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import { BackdropCss, ModalImageCss } from "./Modal.styled";


const Modal = ({item, closeModal, closeEscape}) => (
  <BackdropCss onClick={closeModal} onKeyDown={closeEscape}>
    <ModalImageCss  src={item.largeImageURL} alt={item.tags} />
  </BackdropCss>
);

Modal.propTypes = {
    item: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    }),
  closeModal: PropTypes.func.isRequired,
  closeEscape: PropTypes.func.isRequired,
}

export default Modal;

