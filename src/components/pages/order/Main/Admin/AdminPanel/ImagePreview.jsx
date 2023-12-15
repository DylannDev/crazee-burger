/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? <img src={imageSource} alt={title} /> : "Aucune Image"}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  height: 134px;
  border: 2px solid ${theme.colors.quaternary};
  border-radius: ${theme.borderRadius.round};
  margin-right: 10px;
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
