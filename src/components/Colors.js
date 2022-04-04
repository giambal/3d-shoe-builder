import { useState } from "react";

function Colors({
  setLacesColor,
  setMainColor,
  setStripesColor,
  setSoleColor,
  lacesColor,
  mainColor,
  stripesColor,
  soleColor,
}) {
  const handleLacesChange = (e) => {
    e.preventDefault();
    setLacesColor(e.target.value);
  };
  const handleMainChange = (e) => {
    e.preventDefault();
    setMainColor(e.target.value);
  };
  const handleStripesChange = (e) => {
    e.preventDefault();
    setStripesColor(e.target.value);
  };
  const handleSoleChange = (e) => {
    e.preventDefault();
    setSoleColor(e.target.value);
  };

  return (
    <div className="colorContainer">
      <div className="singlecolor">
        <label htmlFor="laces">Laces</label>
        <input
          type="color"
          name="laces"
          value={lacesColor}
          onChange={handleLacesChange}
        />
      </div>

      <div className="singlecolor">
        <label htmlFor="main">Main</label>
        <input
          type="color"
          name="main"
          value={mainColor}
          onChange={handleMainChange}
        />
      </div>

      <div className="singlecolor">
        <label htmlFor="stripes">Stripes</label>
        <input
          type="color"
          name="stripes"
          value={stripesColor}
          onChange={handleStripesChange}
        />
      </div>

      <div className="singlecolor">
        <label htmlFor="sole">Sole</label>
        <input
          type="color"
          name="sole"
          value={soleColor}
          onChange={handleSoleChange}
        />
      </div>
    </div>
  );
}

export default Colors;
