import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Icosahedron ref={ref} args={[1.6, 4]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#b57bff"
        emissive="#7a2bff"
        emissiveIntensity={0.4}
        roughness={0.15}
        metalness={0.7}
        distort={0.45}
        speed={2}
      />
    </Icosahedron>
  );
}

function Ring({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={ref} args={[0.5, 0.06, 16, 60]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.9} roughness={0.1} />
      </Torus>
    </Float>
  );
}

function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={3}>
      <Sphere args={[0.18, 32, 32]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
      </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#b57bff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.6} color="#57e0ff" />
      <Suspense fallback={null}>
        <Blob />
        <Ring position={[-2.5, 1.2, -1]} color="#57e0ff" />
        <Ring position={[2.5, -1, -1]} color="#b57bff" />
        <Orb position={[2.3, 1.8, 0]} color="#57e0ff" />
        <Orb position={[-2.3, -1.5, 0]} color="#ff7bd0" />
        <Orb position={[-2.8, 0.4, 1]} color="#b57bff" />
      </Suspense>
    </Canvas>
  );
}
