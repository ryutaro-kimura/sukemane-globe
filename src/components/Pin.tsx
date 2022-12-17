import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export const Pin = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [clicked, setClicked] = useState(false)

  return (
    <mesh
      position={[-290, 280, -330]}
      scale={clicked ? 200 : 100}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[0.2, 0.1, 0.2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.2}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </mesh>
  )
}
