import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Sculpture() {
  const knot = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (!knot.current) return
    knot.current.rotation.x += delta * .07
    knot.current.rotation.y += delta * .12
    knot.current.position.y = Math.sin(state.clock.elapsedTime * .45) * .12
  })

  return (
    <Float speed={1.2} rotationIntensity={.25} floatIntensity={.45}>
      <mesh ref={knot} scale={1.7} rotation={[.4, -.25, 0]}>
        <torusKnotGeometry args={[1, .34, 256, 48, 2, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={.7}
          chromaticAberration={.08}
          anisotropy={.35}
          distortion={.22}
          distortionScale={.45}
          temporalDistortion={.08}
          transmission={1}
          roughness={.12}
          color="#c8ff66"
        />
      </mesh>
    </Float>
  )
}

export function Experience() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={4} color="#e2ffad" />
      <pointLight position={[-4, -2, 2]} intensity={12} color="#35d893" />
      <Sculpture />
      <Sparkles count={45} scale={[7, 5, 3]} size={1.4} speed={.25} opacity={.28} color="#c8ff66" />
    </Canvas>
  )
}
