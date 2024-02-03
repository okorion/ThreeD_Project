import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import sceneStore from "../Store/scene.store";

function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = sceneStore.scene;
    const camera = sceneStore.camera;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth - 50, window.innerHeight - 25);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const size = 10;
    const divisions = 10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

    // Cube 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Camera 위치 설정
    sceneStore.setCameraLookAt(new THREE.Vector3(0, 0, 0));
    sceneStore.setCameraPosition(new THREE.Vector3(5, 5, 0));

    renderer.render(scene, camera);

    // 윈도우 리사이즈 이벤트 핸들러
    const handleResize = () => {
      const width = window.innerWidth - 50;
      const height = window.innerHeight - 25;
      renderer.setSize(width, height);

      if (canvasRef.current) {
        camera.aspect =
          canvasRef.current.clientWidth / canvasRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
      renderer.render(scene, camera);
    };

    // 윈도우 리사이즈 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 정리
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}

export default Scene;
