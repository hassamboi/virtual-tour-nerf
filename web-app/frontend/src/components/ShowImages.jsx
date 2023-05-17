import React from "react";

const ShowImages = ({ imageName }) => {
  return (
    <>
      <img src={require("../assets/imgs/" + imageName + ".jpg")} width="590" height="492" alt="IMG" className="rounded-lg bg-gray-100" />
      <img src={require("../assets/imgs/" + imageName + "2.jpg")} width="590" height="492" alt="IMG" className="rounded-lg bg-gray-100" />
      <img src={require("../assets/imgs/" + imageName + "3.jpg")} width="590" height="492" alt="IMG" className="rounded-lg bg-gray-100" />
      <img src={require("../assets/imgs/" + imageName + "4.jpg")} width="590" height="492" alt="IMG" className="rounded-lg bg-gray-100" />
    </>
  );
};

export default ShowImages;
