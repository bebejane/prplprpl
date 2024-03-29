import { useEffect, useRef } from 'react'
import styles from './index.module.scss'

export default function Home() {
  const ref = useRef<HTMLAudioElement | null>(null)
  const refV = useRef<HTMLVideoElement | null>(null)

  return (
    <>
      <audio ref={ref} src={'/Goodnight sleepless.m4a'} />
      <div className={styles.container} onClick={() => ref.current?.play()}>
        <video ref={refV} src={'/20201230000000_doublelows.mp4'} muted={true} autoPlay={true} loop={true} />
      </div>
    </>
  )
}
