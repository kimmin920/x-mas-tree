import React, { useLayoutEffect, useRef, useState } from 'react'

import styled from 'styled-components'

const YOUTUBE_PLAYER_ID = 'YOUTUBE-IFRAME'

function YoutubePlayer() {
  const [appSize, setAppSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [isYoutubeLoading, setIsYoutubeLoading] = useState(true)
  const [isMute, setIsMute] = useState(true)
  const [player, setPlayer] = useState(null)

  useLayoutEffect(() => {
    function onResize() {
      setAppSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useLayoutEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement('script')
      console.log('hiere')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      tag.onload = () => {
        loadVideo()
      }
    }

    function loadVideo() {
      ;(window as any).YT.ready(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const player = new (window as any).YT.Player(YOUTUBE_PLAYER_ID, {
          videoId: '18qoJQ8O6P4',
          playerVars: {
            playsinline: 1,
            autoplay: 1,
            controls: 0,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        })

        setPlayer(player)
      })
    }

    function onPlayerReady(event: any) {
      event.target.mute()
      event.target.playVideo()
    }

    function onPlayerStateChange(event: any) {
      try {
        const ENDED = 0
        const PLAYING = 1
        const TEMP_STOP = 2
        const BUFFERING = 3
        const { data } = event
        if (data === PLAYING) {
          setIsYoutubeLoading(false)
          event.target.unMute()
          console.log(event.target)
        }
        if (data === BUFFERING) {
          setIsYoutubeLoading(true)
        }
        if (data === ENDED || data === TEMP_STOP) {
          setIsYoutubeLoading(true)
          event.target.playVideo()
        }
      } catch (err) {
        setIsYoutubeLoading(true)
      }
    }
  }, [])

  function onClickMute() {
    // console.log((player as any)?.playerInfo?.muted)

    ;(player as any).playerInfo.muted = false
    console.log((player as any).mute)
    // setIsMute((prev) => !prev)
    // console.log((player as any)?.isMuted)
    // player && (player as any).unMute()

    // const iframeEl = document.querySelector('iframe')

    // const video = iframeEl?.contentWindow?.document.body.querySelector('video')

    // console.log(video)
    // if (!video) {
    //   video && ((video as any).muted = false)
    // }
  }

  return (
    <S_AbsoluteMedia appSize={appSize}>
      <MuteButton onClick={onClickMute}>
        {isMute ? '음악켜' : '음악꺼'}
      </MuteButton>
      <S_IframeWrapper appSize={appSize}>
        {isYoutubeLoading && <BlackScreen />}
        <div id={YOUTUBE_PLAYER_ID}></div>
      </S_IframeWrapper>
    </S_AbsoluteMedia>
  )
}

const S_AbsoluteMedia = styled.div<{
  appSize: { width: number; height: number }
}>`
  position: fixed;
  z-index: 1;
`

const MuteButton = styled.div`
  position: absolute;
  background-color: red;
  width: 50px;
  height: 50px;
`

const BlackScreen = styled.div`
  background-color: ${({ theme }) => theme.ui_62};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`
const S_IframeWrapper = styled.div<{
  appSize: { width: number; height: number }
}>`
  height: 100%;
  width: 100%;
  margin: auto;
  overflow: hidden;
  pointer-events: none;

  iframe {
    border: 0;
    @media (max-width: 1200px) {
      height: ${({ appSize }) => `${appSize.height}px`};
      width: ${({ appSize }) => `${appSize.height * (16 / 9)}px`};
      margin-left: ${({ appSize }) =>
        `${(appSize.width - appSize.height * (16 / 9)) / 2}px`};
    }

    @media (min-width: 1200px) {
      height: ${({ appSize }) => `${appSize.width * (9 / 16)}px`};
      width: ${({ appSize }) => `${appSize.width}px`};
      margin-top: ${({ appSize }) =>
        `${(appSize.height - appSize.width * (9 / 16)) / 2}px`};
    }
  }
`

export default YoutubePlayer
