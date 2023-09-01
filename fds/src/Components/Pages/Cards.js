import React, { useEffect, useState } from "react";

import CardPic from "../Icons/card.png";

import Hdfc from "../Icons/hdfc.png";

import Sim from "../Icons/sim.png";

import { Link } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";

import {

  toggleChangeAtom,
  userByAccountSelector,
} from "../../Recoil/RecoilState";

import { updateUsers } from "../../Assets/services/BankService";

import Popup from "../Support/Popup";

const Cards = () => {
  const user = useRecoilValue(userByAccountSelector); //user.card.freeze

  const setToggleChange = useSetRecoilState(toggleChangeAtom);

  const [show, setShow] = useState(true);
  const [tap, setTap] = useState(false);

  const [togglePinChange, setTogglePinChange] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  async function fn(newObj) {
    try {
      const done = await updateUsers(newObj.id, newObj);

      if (done) setToggleChange((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  }

  // function do(){
  //   const newObj = JSON.parse(JSON.stringify(user));
  //   //push obj from form data
  //   newObj.transactions.push(formobj)

  //   fu(newObj)
  // }

  function toggleFreeze() {
    const newObj = JSON.parse(JSON.stringify(user));
    newObj.card.freeze = !user.card.freeze;
    fn(newObj);
  }

  function handlePinChange(pin, newPin, confirmPin) {
    if (pin === String(user.card.pin)) {
      if (newPin === confirmPin) {
        //change pin

        const newObj = JSON.parse(JSON.stringify(user));

        newObj.card.pin = newPin;

        fn(newObj);

        console.log("Changing PIN...");

        return;
      } else console.log("New PIN does not match confirm PIN");
    } else console.log("Entered PIN is wrong");
  }

  return (
    <div className="mt-8 flex justify-center">
      <div className="w-11/12 shadow-2xl rounded-2xl">
        <div className="flex justify-between p-8 bg-gray-800 rounded-t-xl">
          <div className="flex items-center">
            <div className="shadow-lg rounded-full w-12">
              <img src={CardPic} alt="" />
            </div>

            <div className="ml-8 text-2xl font-semibold text-neutral-200">
              Cards
            </div>
          </div>

          <div>
            <Link to="/userdashboard">
              <button className="bg-blue-600 h-10 w-20 rounded-lg text-white">
                Back
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mt-2 p-2">
            <div className="w-[280px] h-[400px] flex rounded-xl bg-red-400  shadow-md p-2 m-4  flex-col cursor-pointe justify-between">
              <div className="w-10 ">
                <img src={Hdfc} alt="" />
              </div>

              <div className="flex  flex-col justify-center items-center ">
                <div className="mx-4 text-base text-white font-bold">
                  HDFC BANK DEBIT CARD
                </div>

                <div className="w-10 m-8">
                  <img src={Sim} alt="" />
                </div>

                <div className="text-sm font-semibold text-white font-sans">
                  Rajsekhar Pinisetty
                </div>
              </div>

              {show ? (
                <div
                  className="text-xs text-white mb-8 cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  Tap to view card details
                </div>
              ) : (
                <div
                  onClick={() => setShow(true)}
                  className="text-sm mb-8 text-white cursor-pointer"
                >
                  Expiry 12/26 <br /> CVV 789
                </div>
              )}
            </div>

            <div className="flex justify-evenly p-2">
              <div className="mx-2">
                <div
                  className={`${
                    user.card.freeze ? "bg-green-500" : "bg-neutral-200"
                  }  rounded-full w-10 h-10 flex justify-center items-center font-bold cursor-pointer`}
                  onClick={toggleFreeze}
                >
                  F
                </div>

                <div className="text-xs mt-1 w-10">Freeze</div>
              </div>

              <div className="mx-2">
                <div
                  className={`${
                    "bg-neutral-200"
                  }  rounded-full w-10 h-10 flex justify-center items-center font-bold cursor-pointer`}
                  onClick={() => setTogglePinChange(true)}
                >
                  P
                </div>

                <div className="text-xs mt-1 w-10 ">Pin</div>

                {togglePinChange && (
                  <Popup
                    handlePinChange={handlePinChange}
                    closePopup={() => setTogglePinChange(false)}
                  />
                )}
              </div>

              <Link to="/profile">
                <div className="mx-2">
                  <div
                    className={`${
                      tap ? "bg-blue-500" : "bg-neutral-200"
                    }  rounded-full w-10 h-10 flex justify-center items-center font-bold cursor-pointer`}
                    onClick={() => setTap((p) => !p)}
                  >
                    S
                  </div>

                  <div className="text-xs mt-1 w-10">Settings</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
