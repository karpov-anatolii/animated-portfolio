"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import Loader from "@/components/Loader";

function MeshComponent() {
  const fileUrl = "/assets/3d/stair17.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Staircase() {
  return (
    <div className="flex justify-center items-center h-[500px] md:h-[700px] lg:h-[900px]">
      <Canvas className="">
        {/*  allows users to rotate, zoom, and pan the camera around a target */}
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color={0xccccff} />
          <MeshComponent />
        </Suspense>
      </Canvas>
    </div>
  );
}
