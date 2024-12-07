// File Location: ./components/ARViewer.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

export default function ARViewer() {
  // DNA Model from https://www.fab.com/listings/dad3bc90-cef7-4ac6-9166-eb94483c2dca
  // Credits to respective owners
  const model = useGLTF('/assets/models/dna_gltf/scene.gltf');

  return (
    <Canvas>
      <Loader />
      <ambientLight />
      <OrbitControls />
      <primitive object={model.scene} />
    </Canvas>
  );
}
