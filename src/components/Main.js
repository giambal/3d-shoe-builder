import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import ShoeModel from "./ShoeModel";

function Main() {
  const [hovered, setHovered] = useState(null);

  const state = proxy({
    current: hovered,
    items: {
      laces: "#ff3",
      mesh: "#fff",
      caps: "#3f3",
      inner: "#3f3",
      sole: "#3f3",
      stripes: "#3f3",
      band: "#3f3",
      patch: "#3f3",
    },
  });

  const [color, setcolor] = useState("#ffffff");

  const snap = useSnapshot(state);

  return (
    <div className="bodyContainer">
      <div className="innerContainer">
        <div className="canvasContainer">
          <HexColorPicker
            color={snap.items[snap.current]}
            onChange={(color) => (state.items[snap.current] = color)}
          />
          <h1>{snap.current}</h1>
          <h1>{snap.items[snap.current]}</h1>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <ShoeModel
                scale={3}
                hovered={hovered}
                setHovered={setHovered}
                state={state}
                snap={snap}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Main;
