import React, { useState } from "react";

const Popup = ({ handlePinChange, closePopup }) => {
  const [pin, setPin] = useState("");

  const [newPin, setNewPin] = useState("");

  const [confirmPin, setConfirmPin] = useState("");

  return (
    <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-transparent">
      <div className="absolute left-[30%] right-[30%] bottom-[30%] top-[30%] text-center m-auto rounded-[15px] border-black bg-white shadow-md">
        <h2>Change PIN</h2>

        <div className="w-[90%] flex flex-col justify-center items-center">
          <input
            className="m-2"
            type="password"
            placeholder="Existing PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />

          <input
            className="m-2"
            type="password"
            placeholder="New PIN"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
          />

          <input
            className="m-2"
            type="password"
            placeholder="Confirm PIN"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
          />

          <button
            className="m-2"
            onClick={() => {
              handlePinChange(pin, newPin, confirmPin);

              closePopup();
            }}
          >
            Submit
          </button>

          <button className="m-2" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
