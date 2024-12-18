"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Model() {
  const { scene } = useGLTF("/untitled.glb");
  React.useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.material.color.set("white");
      }
    });
  }, [scene]);

  return (
    <group scale={[1, 1, 1]} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}
