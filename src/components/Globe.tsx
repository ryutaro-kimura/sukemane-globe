import { OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import img from '../page/earthmap1k.jpg'
import GoogleMapComponent from './GoogleMapComponent'
import { Pin } from './Pin'

export const Globe = () => {
  const texture = useLoader(THREE.TextureLoader, img)
  const earthRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current!.rotation.y = elapsedTime / 30
  })
  return (
    <mesh ref={earthRef}>
      <ambientLight intensity={0.5} />
      <Pin />
      <sphereGeometry args={[500]} />
      <meshStandardMaterial map={texture} roughness={0.7} />
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
