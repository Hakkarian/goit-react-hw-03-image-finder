const { default: styled } = require("@emotion/styled")


export const BackdropCss = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.554);
`;

export const ModalImageCss = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;