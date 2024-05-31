"use client";

import { Suspense, useEffect, useRef, useState } from "react";
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
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Staircase() {
  const [height, setHeight] = useState("500px");

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setHeight("500px");
      } else if (width < 1024) {
        setHeight("600px");
      } else {
        setHeight("700px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    // it is necessary to set height of canvas with inline style. Otherwise it won't work
    <div className="flex justify-center items-center " style={{ height }}>
      <Canvas className="h-full w-full">
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
