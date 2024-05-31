"use client";

import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "@/components/Loader";

const MeshComponent = lazy(() => import("@/models/DevOverflowModel"));

export function DevOverflow() {
  return (
    <div className="relative flex justify-center items-center h-[150px] md:h-[300px] lg:h-[500px] w-full">
      <Canvas
        className=""
        camera={{
          near: 0.1,
          far: 100000,
          fov: 40,
          aspect: 2 / 1,
          position: [0, 0, 9],
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={7} color={0xccccff} />
          <MeshComponent />
        </Suspense>
        {/* Allows users to rotate, zoom, and pan the camera around a target */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
