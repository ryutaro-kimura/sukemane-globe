import { Text } from '@react-three/drei'
import { Euler } from '@react-three/fiber'
import { useState } from 'react'
import { AreaInfo } from './Globe'
import * as THREE from 'three'

type Props = {
  areaInfo: AreaInfo
}

export const Pin: React.FC<Props> = ({ areaInfo }) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [clicked, setClicked] = useState(false)
  const rotation: Euler = new THREE.Euler(Math.PI / 12, 3.5, 0.1)

  return (
    <mesh
      position={areaInfo.position}
      scale={hovered ? 150 : 100}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry
        args={[0.2 * (areaInfo.population / 40), 0.2 * (areaInfo.population / 40), 0.2 * (areaInfo.population / 40)]}
      />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      {hovered ? (
        <Text rotation={rotation} position={[0, 0.1, -0.3]} font="/Roboto-Black.ttf" fontSize={0.1} color={'#fff'}>
          {areaInfo.population} people
        </Text>
      ) : (
        <></>
      )}
    </mesh>
  )
}
