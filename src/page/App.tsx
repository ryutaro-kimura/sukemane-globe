import { Canvas } from '@react-three/fiber';
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import img from "./earthmap1k.jpg";

const App = () => {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          position: [0, 0, 1000],
          aspect: 960 / 540,
        }
        }>
        <mesh>
          <sphereGeometry args={[300]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <directionalLight color="white" position={[1, 1, 1]} />
      </Canvas>
    </div>
  );
}

export default App;