import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'
import Link from 'next/link'

export default function BoxesPage() {
  return (
    <>
      <h1>Click on me - Hover me :)</h1>
      <div className="main">
        <Link href="/">Home</Link>
      </div>

      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Box position={[10, 0, 0]} />
        <Box position={[-10, 0, 0]} />
        <Box position={[0, 10, 0]} />
        <Box position={[0, -10, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  )
}
