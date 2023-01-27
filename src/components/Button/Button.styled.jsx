import styled from "@emotion/styled";

export const ButtonCss = styled.button`
  position: absolute;
  left: 50%;

  transform: translate(-50%, -50%);

  margin: 30px 0;

  min-width: 150px;
  height: 30px;

  color: blue;

  border: 1px solid blue;
  outline: none;
  border-radius: 5px;

  transition: background-color 250ms linear, border 250ms linear,
    color 250ms linear;

  &:hover,
  &:focus {
    color: #fff;
    background-color: blue;
    border: none;
  }
`;