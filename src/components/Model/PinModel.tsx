import * as React from 'react'
import * as Drei from '@react-three/drei'

const RedPinModel: React.FC = () => {
  const { scene } = Drei.useGLTF('assets/scene.gltf')

  return (
    <group dispose={null}>
      <primitive scale={[1, 1, 1]} object={scene} />
    </group>
  )
}

export default RedPinModel
