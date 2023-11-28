/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 24px;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid #ff9f1b;
  background: #ff9f1b;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #ff9f1b;
  }

  &:active {
    background: #ff9f1b;
    color: #ffffff;
  }
`;
