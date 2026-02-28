"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const PALM_COLOR = "#b8c8d4";
const WRIST_COLOR = "#9ca8b8";
const FINGER_COLOR = "#c8d4de";
const TIP_COLOR = "#a8b4be";
const SPHERE_COLOR = "#d4dce4";

/** 오른손 한 종류만 정의. 왼손은 상위에서 scale={[-1,1,1]} 로 거울상 처리 */
function RobotHand({ curl }: { curl: number }) {
  const baseAngle = 0.2 + curl * 0.5;
  const midAngle = 0.15 + curl * 0.45;
  const tipAngle = 0.1 + curl * 0.4;
  const thumbBaseAngle = 0.3 + curl * 0.4;
  const thumbTipAngle = 0.2 + curl * 0.35;

  return (
    <group>
      {/* Palm */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.2, 0.4]} />
        <meshStandardMaterial
          color={PALM_COLOR}
          metalness={0.6}
          roughness={0.35}
          emissive="#6b7a8a"
          emissiveIntensity={0.06}
        />
      </mesh>

      {/* Wrist */}
      <mesh position={[0, -0.9, -0.1]} rotation={[0.4, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 1.4, 24]} />
        <meshStandardMaterial
          color={WRIST_COLOR}
          metalness={0.65}
          roughness={0.35}
          emissive="#5a6474"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Fingers: 관절 기준 계층 회전 (각 세그먼트가 자신의 관절을 축으로 회전) */}
      {[-0.6, -0.2, 0.2, 0.6].map((x) => (
        <group key={x} position={[x, 0.7, 0]}>
          {/* 1관절: 손바닥-기저골 */}
          <group position={[0, 0, 0.1]} rotation={[baseAngle, 0, 0]}>
            <mesh position={[0, 0.35, 0]}>
              <boxGeometry args={[0.25, 0.7, 0.22]} />
              <meshStandardMaterial
                color={FINGER_COLOR}
                metalness={0.6}
                roughness={0.35}
                emissive="#6b7a8a"
                emissiveIntensity={0.07}
              />
            </mesh>
            {/* 2관절: PIP */}
            <group position={[0, 0.7, 0.08]} rotation={[midAngle, 0, 0]}>
              <mesh position={[0, 0.3, 0]}>
                <boxGeometry args={[0.22, 0.6, 0.18]} />
                <meshStandardMaterial
                  color={FINGER_COLOR}
                  metalness={0.65}
                  roughness={0.34}
                  emissive="#6b7a8a"
                  emissiveIntensity={0.05}
                />
              </mesh>
              {/* 3관절: DIP */}
              <group position={[0, 0.6, 0.06]} rotation={[tipAngle, 0, 0]}>
                <mesh position={[0, 0.2, 0]}>
                  <boxGeometry args={[0.2, 0.4, 0.16]} />
                  <meshStandardMaterial
                    color={TIP_COLOR}
                    metalness={0.7}
                    roughness={0.32}
                    emissive="#6b7a8a"
                    emissiveIntensity={0.06}
                  />
                </mesh>
                <mesh position={[0, 0.4, 0.08]}>
                  <sphereGeometry args={[0.09, 24, 24]} />
                  <meshStandardMaterial
                    color={SPHERE_COLOR}
                    emissive="#7a8a9a"
                    emissiveIntensity={0.15}
                    metalness={0.5}
                    roughness={0.35}
                  />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      ))}

      {/* Thumb: 오른손 기준 왼쪽(소지 반대)에 배치, 바깥쪽(+x)으로 벌어지게 */}
      <group position={[-0.95, 0.1, -0.05]} rotation={[0, 0, -0.6]}>
        <group position={[0, 0, 0.1]} rotation={[thumbBaseAngle, 0, 0]}>
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[0.26, 0.7, 0.22]} />
            <meshStandardMaterial
              color={FINGER_COLOR}
              metalness={0.65}
              roughness={0.35}
              emissive="#6b7a8a"
              emissiveIntensity={0.06}
            />
          </mesh>
          <group position={[0, 0.7, 0.12]} rotation={[thumbTipAngle, 0, 0]}>
            <mesh position={[0, 0.25, 0]}>
              <boxGeometry args={[0.24, 0.5, 0.18]} />
              <meshStandardMaterial
                color={TIP_COLOR}
                metalness={0.7}
                roughness={0.32}
                emissive="#6b7a8a"
                emissiveIntensity={0.06}
              />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

function SceneContent() {
  const interactingRef = useRef(false);
  const curlRef = useRef(0);
  const [curl, setCurl] = useState(0);

  useFrame((_, delta) => {
    const target = interactingRef.current ? 1 : 0;
    const speed = interactingRef.current ? 3 : 1.5;
    curlRef.current += (target - curlRef.current) * Math.min(1, delta * speed);
    setCurl(curlRef.current);
  });

  return (
    <>
      <OrbitControls
        enablePan={false}
        maxDistance={6}
        minDistance={2}
        enableDamping
        dampingFactor={0.08}
        onStart={() => {
          interactingRef.current = true;
        }}
        onEnd={() => {
          interactingRef.current = false;
        }}
      />
      <group rotation={[0.3, 0.6, 0]}>
        <group position={[-1.65, 0, 0]} scale={[-1, 1, 1]}>
          <RobotHand curl={curl} />
        </group>
        <group position={[1.65, 0, 0]}>
          <RobotHand curl={curl} />
        </group>
      </group>
    </>
  );
}

export default function GearboxOrbit() {
  return (
    <Canvas
      camera={{ position: [3, 2.1, 5], fov: 42 }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#f1f5f9"]} />
      <hemisphereLight intensity={0.7} groundColor="#e2e8f0" />
      <directionalLight position={[4, 6, 4]} intensity={1.3} />
      <pointLight position={[-4, 3, 2]} intensity={0.5} color="#8a9aaa" />
      <pointLight position={[3, -2, -2]} intensity={0.4} color="#7a8a9a" />
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
