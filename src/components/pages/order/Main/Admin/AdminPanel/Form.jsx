/* eslint-disable react/prop-types */
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import TextareaDescription from "./TextareaDescription";
import Checkbox from "./Checkbox";
import { getInputTextsConfig } from "./getInputTextsConfig";
import React from "react";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, children }, ref) => {
    const inputTexts = getInputTextsConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              key={input.id}
              {...input}
              onChange={onChange}
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
          <TextareaDescription
            value={product.description}
            onChange={onChange}
          />
          <Checkbox isVegetarian={product.isVegetarian} onChange={onChange} />
        </div>
        <div className="submit">{children}</div>
      </FormStyled>
    );
  }
);

Form.displayName = "Form";
export default Form;

const FormStyled = styled.form`
  width: 70%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 1fr) 2fr repeat(2, 1fr);

  .input-fields {
    grid-area: 1 / 2 / 6 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr) 2fr 1fr;
    gap: 10px;
  }
  .submit {
    width: 100%;
    display: flex;
    grid-area: 6 / -2 / -2 / -1;

    .submit-btn {
      width: 50%;
    }
  }
`;
