import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { Text } from "@react-three/drei";
import { ZeroFill } from "App/utils";

export default (props) => {
  const clockRef = useRef();

  useEffect(() => {
    if (clockRef.current) {
      clockRef.current.rotation.x = THREE.MathUtils.degToRad(-30);
    }
  }, []);

  useFrame(() => {
    let d = new Date();

    const HH = new ZeroFill(d.getHours(), 2);
    const MM = new ZeroFill(d.getMinutes(), 2);
    const SS = new ZeroFill(d.getSeconds(), 2);

    clockRef.current.text = `${HH}:${MM}:${SS}`;
  });

  return <Text fontSize={2} ref={clockRef} {...props} />;
};
