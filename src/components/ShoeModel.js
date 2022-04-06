import { useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";

export default function Model({ scale, hovered, setHovered, state, snap }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  console.log(snap);
  return (
    <group
      ref={group}
      dispose={null}
      scale={scale}
      onPointerDown={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerMissed={(e) => {
        setHovered(null);
      }}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
      <OrbitControls />
    </group>
  );
}
