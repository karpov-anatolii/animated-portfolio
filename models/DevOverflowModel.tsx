import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module";
import { Mesh } from "three";

const MeshComponent = () => {
  const fileUrl = "/assets/3d/logo.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });
  gltf.scene.rotation.x = Math.PI / 2;

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default MeshComponent;
