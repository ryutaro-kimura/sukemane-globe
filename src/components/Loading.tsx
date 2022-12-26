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
        <div className="inline-block w-52 h-48 text-white relative mb-10">
          <img src={pic} alt="globe" className="z-0 h-full w-full border-4 border-red-600" />
          <p className="text-4xl absolute top-1/2 left-1/3 z-40">point</p>
          <p className="z-30 absolute bottom-1">地球をぐるぐる回しながら世界で活躍するフェローを探せる！</p>
          <div className="bg-red-600 absolute bottom-0 w-full h-16"></div>
        </div>

        <div className="radial-progress text-red-600 mb-2" style={style}>
          {progress}%
        </div>
        <div className="text-white">loading...</div>
      </div>
    </>
  )
}
