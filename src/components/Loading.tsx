import React, { useState, useEffect } from 'react'
import pic from '../globe.jpeg'

export const Loading = () => {
  const [progress, setProgress] = useState<number>(0)
  const style = { '--value': progress } as React.CSSProperties

  useEffect(() => {
    let percent: number
    if (progress < 100) {
      percent = 5 + progress
      setTimeout(() => {
        setProgress(percent)
      }, 100)
    }
  }, [progress])

  return (
    <>
      <div className="h-screen bg-zinc-900 flex flex-col justify-center items-center">
        <div className="w-60 mb-10 p-2 bg-red-600 flex flex-col items-center text-white">
          <div className="w-54 h-48 overflow-hidden">
            <img src={pic} alt="app-description" className="w-54 object-fit mb-2" />
          </div>
          <p className="font-bold text-3xl mb-2">point</p>
          <p className="font-bold text-base">地球をぐるぐる回しながら世界で活躍するフェローを探せる！</p>
        </div>
        <div className="radial-progress text-red-600 mb-2" style={style}>
          {progress}%
        </div>
        <div className="text-white">loading...</div>
      </div>
    </>
  )
}
