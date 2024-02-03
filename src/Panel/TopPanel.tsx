import React from "react";
import * as THREE from "three";
import primitivesStore from "../Store/primitives.store";
import sceneStore from "../Store/scene.store";

const TopPanel = () => {
  return (
    <div>
      <button
        onClick={() => {
          const geometry = new THREE.BoxGeometry();
          const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(0, 0.5, 0);

          primitivesStore.addPrimitive(cube);
          sceneStore.scene.add(cube);
        }}
      >
        Add Cube
      </button>
      <button
        onClick={() => {
          const geometry = new THREE.SphereGeometry(1, 32, 32);
          const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
          const sphere = new THREE.Mesh(geometry, material);

          primitivesStore.addPrimitive(sphere);
          sceneStore.scene.add(sphere);
        }}
      >
        Add Sphere
      </button>
      <button
        onClick={() => {
          const geometry = new THREE.ConeGeometry(1, 2, 32);
          const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
          const cone = new THREE.Mesh(geometry, material);

          cone.position.set(0, 1, 0);

          primitivesStore.addPrimitive(cone);
          sceneStore.scene.add(cone);
        }}
      >
        Add Cone
      </button>
      <button
        onClick={() => {
          const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
          const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
          const cylinder = new THREE.Mesh(geometry, material);
          cylinder.position.set(0, 0.5, 0);

          primitivesStore.addPrimitive(cylinder);
          sceneStore.scene.add(cylinder);
        }}
      >
        Add Cylinder
      </button>
    </div>
  );
};

export default TopPanel;
