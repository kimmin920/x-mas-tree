import React, { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

type Props = {
  targetElementId: string
  children: ReactNode
}

function FloatMenuPortal({ targetElementId, children }: Props) {
  const [target] = useState<HTMLElement>(() => {
    const targetElement = document.getElementById(targetElementId)

    if (targetElement) {
      return targetElement
    }

    const root = document.getElementById('root')
    const parent = root?.parentElement

    const newTargetElement = document.createElement('div')
    newTargetElement.id = targetElementId

    parent?.appendChild(newTargetElement)

    return newTargetElement
  })

  useEffect(() => {
    return () => {
      console.log('remove')
    }
  }, [])

  return createPortal(children, target)
}

export default FloatMenuPortal
