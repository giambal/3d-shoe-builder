import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import ShoeModel from "./ShoeModel";

const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
});

function Main() {
  const [hovered, setHovered] = useState(null);

  const snap = useSnapshot(state);

  const handleRetry = (e) => {
    e.preventDefault();
    for (const key in state.items) {
      state.items[key] = "#ffffff";
    }
  };

  return (
    <div className="bodyContainer">
      <div className="innerContainer">
        <div className="canvasContainer">
          <div className="colorContainer">
            <button onClick={handleRetry}>Undo changes</button>
            <HexColorPicker
              className="picker"
              color={snap.items[snap.current]}
              onChange={(color) => (state.items[snap.current] = color)}
            />
            <h1 style={{ color: snap.items[snap.current] }}>{snap.current}</h1>
          </div>
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
              <ShoeModel state={state} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Main;
