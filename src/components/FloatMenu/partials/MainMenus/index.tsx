import React from 'react'
import styled, { css } from 'styled-components'
import MenuItem from './MenuItem'
import MenuSection from './MenuSection'

type Props = {
  isActive: boolean
}

function MainMenus({ isActive }: Props) {
  return (
    <S_MainMenus isOpen={isActive}>
      {isActive && (
        <>
          <MenuCol>
            <MenuSection text="Section1" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
          </MenuCol>

          <MenuCol>
            <MenuSection text="Section2" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
            <MenuSection text="Section3" />
            <MenuItem text="hi" href="/" />
          </MenuCol>

          <MenuCol>
            <MenuSection text="Section4" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
            <MenuSection text="Section5" />
            <MenuItem text="hi" href="/" />
          </MenuCol>

          <MenuCol>
            <MenuSection text="Section6" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
            <MenuItem text="hi" href="/" />
          </MenuCol>
        </>
      )}
    </S_MainMenus>
  )
}

export default MainMenus

const MenuCol = styled.div`
  width: 161.5px;
  display: flex;
  /* padding-bottom: 28px;
  padding-top: 28px; */
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    #7a7a7a 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: left top;
  background-repeat: repeat-y;
  background-size: 1px 8px;
`

const S_MainMenus = styled.div<{ isOpen: boolean }>`
  display: flex;
  min-height: 250px;
  background-color: var(--bg-secondary);
  color: #fff;
  border-radius: 12px;
  padding: 30px;
  padding-right: 0px;
  transition: all 0.4s ease-in-out;
  margin-bottom: 6px;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      /* color: transparent; */
      min-height: 0px;
      padding: 0;
      visibility: hidden;
      margin-bottom: 0;
    `};
`
