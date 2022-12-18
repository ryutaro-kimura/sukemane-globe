import GoogleMapComponent from '../components/GoogleMapComponent'
import { Globe } from '../components/Globe'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Loading } from '../components/Loading'
import { useState } from 'react'

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <div id="canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 1000],
            aspect: 960 / 540
          }}
        >
          <Stars radius={300} depth={200} count={50000} factor={7} saturation={0} fade={true} />
          <Globe />
          <directionalLight color="white" position={[1, 1, 1]} />
        </Canvas>
      </div>
    </>
  )
}

export default App
