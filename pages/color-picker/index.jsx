import { Header } from "@/Components";
import React, { useState } from "react";

import { PhotoshopPicker } from "react-color";

export default function ColorPicker() {
  const [color, setColor] = useState("#fff");

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />

      <div>
        <PhotoshopPicker
          color={color}
          onChangeComplete={(color) => {
            setColor(color.hex);
          }}
        />
         <div
        style={{
          backgroundColor: color,
          height: "200px",
          transition: "ease all 500ms"
        }}
      />
      </div>
    </div>
  );
}
