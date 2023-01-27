import PropTypes from 'prop-types';
import { ButtonCss } from './Button.styled';

const Button = ({ children, onLoad }) =>
    <ButtonCss type="submit" onClick={onLoad}>{children}</ButtonCss>;

Button.propTypes = {
    children: PropTypes.node,
    onLoad: PropTypes.func.isRequired
}

export default Button