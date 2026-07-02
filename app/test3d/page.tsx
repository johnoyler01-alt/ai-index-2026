"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#ff6b35" />
    </mesh>
  );
}

export default function TestPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "2rem",
          fontSize: "2rem",
        }}
      >
        Three.js Test
      </h1>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
}
