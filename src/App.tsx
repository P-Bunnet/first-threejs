/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CircleGeometry } from "three";
import "./App.css";
const fuck = new THREE.Vector3(0, 0, 0);
function Box(props: JSX.IntrinsicElements["mesh"]) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      {/* threejs house */}
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>

      <mesh position={[0, 1, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[-1, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[0, 0, -1]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[0, 0, 1]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      {/* threejs roof */}
      <mesh position={[0, 1, 0]}>
        <coneBufferGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <coneBufferGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[-1, 0, 0]}>
        <coneBufferGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <coneBufferGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh position={[0, 0, -1]}>
        <coneBufferGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas className="Canvas">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-3.2, 0, 0]} />
      <Box position={[3.2, 0, 0]} />
    </Canvas>
  );
}
