import { useEffect, useRef } from 'react'
import styles from './index.module.scss'

export default function Home() {
  const ref = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    console.log('hej')
    ref.current?.addEventListener('canplay', () => {
      console.log('xcan')
    })
    ref.current?.play()
  }, [])

  return (
    <>
      <audio
        ref={ref}
        src={'/Goodnight sleepless.m4a'}
        autoPlay={true}
      />
      <div className={styles.container} onClick={() => ref.current?.play()}>
        <img src={'/20201230000000_doublelows.gif'} alt="prlplprpls" />
      </div>

    </>
  )
}
