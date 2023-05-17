import React from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";

function Panorama({ path }) {
  console.log(path);
  return (
    <div>
      <Pannellum
        width="1216px"
        height="684px"
        image={require("../assets/panoramas/" + path + ".png")}
        minYaw={-90}
        maxYaw={100}
        minPitch={-80}
        maxPitch={80}
        // haov={240}
        // maxHfov={360}
        // minHfov={0}
        hfov={120}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot type="info" pitch={11} yaw={-167} text="Info Hotspot Text 3" URL="https://github.com/farminf/pannellum-react" />

        <Pannellum.Hotspot type="info" pitch={31} yaw={-107} text="Info Hotspot Text 4" URL="https://github.com/farminf/pannellum-react" />
      </Pannellum>
    </div>
  );
}

export default Panorama;
