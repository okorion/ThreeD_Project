import * as THREE from "three";
import { makeAutoObservable } from "mobx";

class PrimitivesStore {
  primitives: THREE.Object3D[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addPrimitive(primitive: THREE.Object3D) {
    this.primitives.push(primitive);
  }

  removePrimitive(primitiveId: string) {
    const index = this.primitives.findIndex(
      (primitive) => primitive.uuid === primitiveId
    );
    if (index !== -1) {
      this.primitives.splice(index, 1);
    }
  }

  clearPrimitives() {
    this.primitives = [];
  }
}

const primitivesStore = new PrimitivesStore();

export default primitivesStore;
