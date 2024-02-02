import { makeAutoObservable } from "mobx";
import * as THREE from "three";

class SceneStore {
  scene: THREE.Scene;

  constructor() {
    makeAutoObservable(this);

    this.scene = new THREE.Scene();
  }

  // 씬(Scene)에 객체를 추가하는 메서드
  addObject(object: THREE.Object3D) {
    this.scene.add(object);
  }

  // 씬(Scene)에서 객체를 제거하는 메서드
  removeObject(object: THREE.Object3D) {
    this.scene.remove(object);
  }
}

const sceneStore = new SceneStore();
export default sceneStore;
