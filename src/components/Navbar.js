import React from "react";

function Navbar() {
  const navbarStyle = {
    container: {
      width: "100%",
      display: "flex",
      backgroundColor: "#21ceae",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 0",
      boxShadow: " 0px 5px 20px 0px #000000",
    },
    h1: {
      margin: "0",
      color: "#ffffff",
    },
  };
  return (
    <div style={navbarStyle.container}>
      <h1 style={navbarStyle.h1}>Shoes builder</h1>
    </div>
  );
}

export default Navbar;
