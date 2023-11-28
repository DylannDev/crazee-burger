/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function TextInput({ onChange, value, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input onChange={onChange} value={value} {...extraProps} type="text" />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border-radius: 5px;
  background: #fff;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: #747b91;
    width: 15px;
  }

  input {
    color: #17161a;
    border: none;
    width: 100%;
    &::placeholder {
      color: #d3d3d3;
      font-size: 15px;
      font-weight: 400;
      line-height: 17px;
    }
  }
`;
