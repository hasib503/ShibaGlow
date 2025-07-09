'use client'

import { useEffect, useState } from 'react'

type CountdownProps = {
  targetDate: string // ISO string like "2025-12-31T23:59:59"
}

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center justify-center gap-4 text-center mt-10">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center"
        >
          <div className="text-2xl font-[500] bg-[#602d00] flex items-center justify-center text-white rounded-md p-4 w-14 h-20 shadow-md">{value}</div>
          <div className="font-semibold capitalize mt-2">{unit}</div>
        </div>
      ))}
    </div>
  )
}

export default Countdown
