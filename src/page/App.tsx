import GoogleMapComponent from '../components/GoogleMapComponent'
import { Globe } from '../components/Globe'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Pin } from '../components/Pin'
const App = () => {
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
