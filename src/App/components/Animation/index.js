import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

import animationGlb from "./animation.glb";

export default () => {
  const { animations, scene } = useGLTF(animationGlb, true);
  const animationRef = useRef();
  const mixer = new THREE.AnimationMixer();

  useEffect(() => {
    if (animationRef.current) {
      mixer.clipAction(animations[0], animationRef.current).play();
    }
  }, []);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={scene} ref={animationRef} />;
};
