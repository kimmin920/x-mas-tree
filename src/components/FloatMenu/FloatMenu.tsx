import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
import { Menu, X } from 'react-feather'
import { NavLink } from 'react-router-dom'
import MainMenus from './partials/MainMenus'

function FloatMenu() {
  const [isMenuOpened, setMenuOpen] = useState(false)

  function onClickOpenMenu() {
    setMenuOpen((prev) => !prev)
  }

  return (
    <FloatMenuWrapper>
      <S_FloatMenu isOpen={isMenuOpened}>
        <MainMenus isActive={isMenuOpened} />

        <FloatMenus>
          <PrimaryMenu isOpen={isMenuOpened}>
            w. home
            {isMenuOpened ? (
              <X size={20} onClick={onClickOpenMenu} />
            ) : (
              <Menu size={20} onClick={onClickOpenMenu} />
            )}
          </PrimaryMenu>
          <SecondaryMenu isHidden={isMenuOpened}>
            <MenuTitle>Home</MenuTitle>
            <MenuItemList>
              <MenuItem>
                <MenuItemNav to="/">SOTD</MenuItemNav>
              </MenuItem>

              <MenuItem>
                <MenuItemNav to="/">TREES</MenuItemNav>
              </MenuItem>

              <MenuItem>
                <MenuItemNav to="/">MAKE</MenuItemNav>
              </MenuItem>
            </MenuItemList>
          </SecondaryMenu>
        </FloatMenus>
      </S_FloatMenu>
    </FloatMenuWrapper>
  )
}

const FloatMenus = styled.div`
  display: flex;
`

const MenuTitle = styled.strong`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0 12px 0 6px;
  line-height: normal;
  color: #a7a7a7;
`

const MenuItemNav = styled(NavLink)`
  justify-content: center;
  width: 100%;
  border: 1px solid #4e4e4e;
  color: #a7a7a7;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 12px;
  border-radius: var(--rounded-normal);
  text-decoration: none;
  font-weight: 200;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: #4e4e4e;
  }
`

const MenuItem = styled.li`
  margin-left: 6px;
`

const MenuItemList = styled.ul`
  position: relative;
  display: flex;
  margin-left: -6px;
`

const SecondaryMenu = styled.div<{ isHidden: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 12px;
  margin-left: 6px;
  background-color: #3e3e3e;
  padding: 0 6px;
  height: 60px;
  gap: 6px;

  ${({ isHidden }) =>
    isHidden &&
    css`
      position: absolute;
    `};
`

const PrimaryMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 6px;
  background-color: var(--bg-secondary);
  color: #fff;
  border-radius: 12px;
  height: 60px;
  z-index: 2;
  transition: all 0.3s;
  width: fit-content;

  ${({ isOpen }) =>
    isOpen &&
    css`
      width: 100%;
    `};
`
const FloatMenuWrapper = styled.div`
  position: absolute;
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 30px;
  width: 100%;
  transition: all 0.4s ease-in-out;
`

const S_FloatMenu = styled.div<{ isOpen: boolean }>`
  min-width: 400px;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: rgba(var(--color-primary-rgb), 0.8);
  padding: 6px;
  transition: all 0.3s ease-in-out;
  position: relative;

  ${({ isOpen }) =>
    isOpen &&
    css`
      min-width: 600px;
      max-width: fit-content;
    `};
`

export default FloatMenu
