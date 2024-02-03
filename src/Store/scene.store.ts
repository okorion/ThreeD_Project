import { makeAutoObservable } from "mobx";
import * as THREE from "three";

class SceneStore {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;

  constructor() {
    makeAutoObservable(this);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
  }

  // 씬(Scene)에 객체를 추가하는 메서드
  addObject(object: THREE.Object3D) {
    this.scene.add(object);
  }

  // 씬(Scene)에서 객체를 제거하는 메서드
  removeObject(object: THREE.Object3D) {
    this.scene.remove(object);
  }

  // 카메라의 위치를 설정하는 메서드
  setCameraPosition(position: THREE.Vector3) {
    this.camera.position.copy(position);
  }

  // 카메라의 시선을 설정하는 메서드
  setCameraLookAt(target: THREE.Vector3) {
    this.camera.lookAt(target);
  }
}

const sceneStore = new SceneStore();
export default sceneStore;
