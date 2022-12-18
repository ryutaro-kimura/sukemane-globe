import { Html, OrbitControls } from '@react-three/drei'
import { useFrame, Vector3 } from '@react-three/fiber'
import { useRef, useState } from 'react'

type AreaInfo = {
  name: string
  position: Vector3
}

type Props = {
  areaInfo: AreaInfo
}

export const Pin: React.FC<Props> = ({ areaInfo }) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [clicked, setClicked] = useState(false)

  return (
    <mesh
      position={areaInfo.position}
      scale={clicked ? 200 : 100}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[0.2, 0.1, 0.2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      <Html className="text-red-600 text-4"  distanceFactor={10}>
        {/* {text} */}
        九州
      </Html>
    </mesh>
  )
}
