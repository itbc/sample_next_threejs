import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box as NativeBox } from '@react-three/drei'

export default function Box(props) {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))

  return (
    <NativeBox
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={active ? [6, 6, 6] : [10, 5, 15]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#7bfc3f' : '#827b23'}
      />
    </NativeBox>
  )
}
