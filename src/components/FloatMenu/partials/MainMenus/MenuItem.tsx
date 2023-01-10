import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  text: string
  href: string
}

function MenuItem({ text, href }: Props) {
  return <S_Link to={href}>{text}</S_Link>
}

const S_Link = styled(Link)`
  padding: 8px 0 8px 16px;
  border-left: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    color: yellow;
    border-color: yellow;
  }
`

export default MenuItem
