import { useGLTF } from '@react-three/drei';

export default function ARViewer() {
  //DNA Model from https://www.fab.com/listings/dad3bc90-cef7-4ac6-9166-eb94483c2dca
  //Credits to Respectively owners
  const model = useGLTF('/assets/models/dna_gltf/scene.gltf');

  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <primitive object={model.scene} />
    </Canvas>
  );
}
