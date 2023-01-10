import React from 'react'
import { YoutubePlayer } from '../../components'
import { FloatMenu } from '../../components/FloatMenu'
import { Portal } from '../../components/Portal'

function Tree() {
  return (
    <div>
      <Portal targetElementId="float-menu">
        <FloatMenu />
      </Portal>
      <YoutubePlayer />
    </div>
  )
}

export default Tree
