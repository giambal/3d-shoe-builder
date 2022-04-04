import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import ShoeModel from "./ShoeModel";
import Colors from "./Colors";

function Main() {
  const [lacesColor, setLacesColor] = useState("");
  const [mainColor, setMainColor] = useState("");
  const [stripesColor, setStripesColor] = useState("");
  const [soleColor, setSoleColor] = useState("");
  return (
    <div className="bodyContainer">
      <div className="innerContainer">
        <div className="canvasContainer">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <ShoeModel
                scale={3}
                lacesColor={lacesColor}
                mainColor={mainColor}
                stripesColor={stripesColor}
                soleColor={soleColor}
              />
            </Suspense>
          </Canvas>
        </div>
        <Colors
          setLacesColor={setLacesColor}
          setMainColor={setMainColor}
          setStripesColor={setStripesColor}
          setSoleColor={setSoleColor}
          lacesColor={lacesColor}
          mainColor={mainColor}
          stripesColor={stripesColor}
          soleColor={soleColor}
        />
      </div>
    </div>
  );
}

export default Main;
