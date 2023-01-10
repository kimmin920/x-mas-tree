import React from 'react'
import styled from 'styled-components'

function MenuSection({ text }: { text: string }) {
  return (
    <S_RelativeBox>
      <S_MenuSection>{text}</S_MenuSection>
    </S_RelativeBox>
  )
}

const S_RelativeBox = styled.div`
  position: relative;
`
const S_MenuSection = styled.div`
  padding: 8px 0 8px 16px;
  /* top: 16px; */
  position: relative;
  color: #a7a7a7;
  font-size: 12px;

  &::before {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    content: '';
    position: absolute;
    background-color: white;
    left: -1.5px;
    top: 50%;
  }
`
export default MenuSection
