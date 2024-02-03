import React from "react";
import TopPanel from "./Panel/TopPanel";
// import Scene from "./Scene/Scene";
import { Canvas, useThree } from "react-three-fiber";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  // TransformControls,
  Grid,
} from "@react-three/drei";
import sceneStore from "./Store/scene.store";

const App = () => {
  return (
    <>
      <TopPanel />
      {/* <Scene /> */}
      <Canvas
        scene={sceneStore.scene}
        style={{ width: window.innerWidth, height: window.innerHeight }}
      >
        {/* <Grid args={[10, 10]} /> */}
        <Scene />
        {/* <OrbitControls /> */}
        {/* <TransformControls /> */}
      </Canvas>
    </>
  );
};

const Scene = () => {
  const { camera } = useThree();

  camera.position.set(7, 4, 2);
  camera.lookAt(0, 0, 0);

  return (
    <>
      <Grid args={[10, 10]} />
      <OrbitControls args={[camera]} makeDefault />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
          labelColor="white"
        />
      </GizmoHelper>
    </>
  );
};

export default App;
