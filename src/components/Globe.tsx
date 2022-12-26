import { OrbitControls } from '@react-three/drei'
import { useFrame, useLoader, Vector3 } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import img from '../page/earthmap1k.jpg'
import { Pin } from './Pin'

export type AreaInfo = {
  name: string
  position: Vector3
  population: number
}

export const Globe = () => {
  const texture = useLoader(THREE.TextureLoader, img)
  const earthRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current!.rotation.y = elapsedTime / 30
  })
  const kyushu: AreaInfo = { name: 'kyushu', position: [-290, 280, -330], population: 20 }
  const kanto: AreaInfo = { name: 'kanto', position: [-320, 300, -270], population: 40 }
  return (
    <mesh ref={earthRef}>
      <ambientLight intensity={0.5} />
      <Pin areaInfo={kyushu} />
      <Pin areaInfo={kanto} />
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
