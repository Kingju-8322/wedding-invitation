import { useEffect, useRef, useState } from "react"
import bgm from "../../images/bgm.mp3"

export const Bgm = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(bgm)
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)

    const events = ["click", "touchend", "keydown"]
    const start = () => {
      audio.play().catch(() => {})
      events.forEach((e) => window.removeEventListener(e, start))
    }

    // 먼저 자동재생을 시도하고, 막히면 첫 터치 때 재생
    audio.play().catch(() => {
      events.forEach((e) => window.addEventListener(e, start))
    })

    return () => {
      events.forEach((e) => window.removeEventListener(e, start))
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.pause()
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "음악 끄기" : "음악 켜기"}
      className="bgm-toggle"
      aria-pressed={playing}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 17V5l11-2v12M9 8l11-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <ellipse cx="6" cy="17" rx="3" ry="2.3" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="17" cy="15" rx="3" ry="2.3" stroke="currentColor" strokeWidth="1.4" />
        {!playing && <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.4" />}
      </svg>
    </button>
  )
}