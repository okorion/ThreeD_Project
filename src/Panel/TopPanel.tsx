import React from "react";
import * as THREE from "three";

const TopPanel = () => {
  return (
    <div>
      <button onClick={() => console.log("Cube")}>Add Cube</button>
      <button onClick={() => console.log("Sphere")}>Add Sphere</button>
      <button onClick={() => console.log("Cone")}>Add Cone</button>
      <button onClick={() => console.log("Cylinder")}>Add Cylinder</button>
    </div>
  );
};

export default TopPanel;
