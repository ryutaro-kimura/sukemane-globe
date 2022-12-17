import GoogleMapComponent from '../components/GoogleMapComponent'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import img from './earthmap1k.jpg'
import { Stars } from "@react-three/drei"

const App = () => {
  const texture = useLoader(THREE.TextureLoader, img)
  const count = 1000;
    return (
    <>
      <GoogleMapComponent />
      <div id="canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 1000],
            aspect: 960 / 540
          }}
        >
          <mesh>
            {/* @react-three/dreiをインストールしてStarsを使った！ */}
          <Stars radius={300} depth={200} count={5000} factor={7} saturation={0} fade={true} /> 
            <sphereGeometry args={[300]} />
            <meshStandardMaterial map={texture} />
          </mesh>
          <directionalLight color="white" position={[1, 1, 1]} />
        </Canvas>
      </div>
    </>
  )
}


export default App
