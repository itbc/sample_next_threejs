import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Universe from '../components/Universe'
import Link from 'next/link'

export default function UniversePage() {
  return (
    <>
      <h1>Click on me - Hover me :)</h1>
      <div className="main">
        <Link href="/">Home</Link>
      </div>
      <Canvas camera={{ position: [0, 0, 25] }}>
        <ambientLight intensity={3} />
        <pointLight position={[40, 40, 40]} />
        <Universe position={[10, 0, 0]} />
        <Universe position={[-10, 0, 0]} />
        <Universe position={[0, 10, 0]} />
        <Universe position={[0, -10, 0]} />
        <Universe position={[-10, 0, 0]} />
        <Universe position={[0, 10, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  )
}
