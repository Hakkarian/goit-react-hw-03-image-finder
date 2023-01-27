import styled from "@emotion/styled";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

export const SearchBarCss = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #2222f6;
`;

export const FormCss = styled.form`
    display: flex;
    align-items: center;
    width: 60%;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
`

export const IconButtonCss = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border: 1px solid #000;
  outline: none;
  border-radius: 5px;
  color: #000;
  background-color: #fff;

  transition: background-color 250ms linear, border 250ms linear,
    color 250ms linear;

  &:hover,
  &:focus {
    color: #fff;
    background-color: blue;
    border: none;
  }
`;

export const IconCss = styled(SearchIcon)`
    fill: currentColor;
`

export const InputCss = styled.input`
    width: 100%;
    height: 20px;
    border: none;
    outline: none;


    ::placeholder {
        font-size: 16px;
    }
    &[type="text"] {
        font-size: 16px;
    }
`