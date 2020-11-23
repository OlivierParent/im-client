import React from "react";
import { useLocation } from "wouter";
import { Text } from "@react-three/drei";

export default () => {
  const [, setLocation] = useLocation();

  return (
    <Text
      color="hsl(210, 100%, 70%)"
      fontSize={1}
      onClick={() => {
        const route = "/router";
        console.log("Route: ", route);
        setLocation(route);
      }}
      text="Wouter"
    />
  );
};
