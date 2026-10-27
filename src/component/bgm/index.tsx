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
      style={{
        position: "fixed",
        top: 12,
        right: 12,
        zIndex: 1000,
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.85)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        fontSize: 18,
        cursor: "pointer",
      }}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  )
}