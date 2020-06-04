import React from "react"
import styled from "styled-components"

const ImageBox = styled.div`
  position: relative;

  z-index: 1;
`

const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  width: 75%;
  height: 60%;
  background: rgba(65, 134, 148, 0.8);
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  padding: 2%;
  z-index: 3;
`

const TextTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 1;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(236, 121, 15, 0.3);
  z-index: 2;
`

const ImageWithDescription = () => {
  return (
    <ImageBox>
      <Overlay />
      <StyledImage src="terapia.jpg"></StyledImage>
      <TextBox>
        <TextTitle>Questionário Sobre Saúde Mental</TextTitle>
      </TextBox>
    </ImageBox>
  )
}

export default ImageWithDescription
