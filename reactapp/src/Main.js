import React, { useEffect, useState } from "react";

function Main() {
  const [temp, setTemp] = useState();
  const [word, setWord] = useState();
  const [qrCode, setQrCode] = useState();
  const [bgColor, setBgColor] = useState();
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}&bgcolor=${bgColor}`
    );
  }, [word, bgColor]);
  function handleGenerate() {
    setWord(temp);
  }
  return (
    <div className="App ">
      <h1 className="themeText text-center text-5xl my-8 text-cyan-700">
        React QR Code generator
      </h1>
      <div className="inputSec flex justify-center px-[200px]">
        <input
          type="text"
          placeholder="Enter text.."
          className="placeInput mt-5 py-2 px-8 text-2xl bg-transparent border-2 border-white rounded-lg text-white w-[40%] focus:outline-none focus:shadow-none "
          onChange={(e) => {
            setTemp(e.target.value);
          }}
        />
      </div>
      <div className="output text-center flex justify-center mt-8">
        <img src={qrCode} alt="" />
      </div>
      <div className="buttonsArea flex  justify-center items-center ml-12">
        <button
          className="generateBtn bg-[#ffa115] py-2 px-5 rounded-md mt-4 border-none text-[20px] cursor-pointer"
          onClick={handleGenerate}
        >
          Generate
        </button>
        <a href={qrCode} download="QRCode">
          <button
            className="downloadBtn  bg-[#1aade3] py-2 px-5 mx-5  rounded-md mt-4 border-none text-[20px] cursor-pointer"
            type="button"
          >
            Download
          </button>
        </a>
        <input
          type="color"
          onChange={(e) => {
            setBgColor(e.target.value.substring(1));
          }}
        />
      </div>
    </div>
  );
}

export default Main;
