import React, { useEffect } from "react";

import Toggle from "../Support/Toggle";

import ProfilePic from "../Icons/profile.png";

import { updateUsers } from "../../Assets/services/BankService";

import { Link } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { toggleChangeAtom,  userByAccountSelector} from "../../Recoil/RecoilState";

const Profile = () => {
  const user = useRecoilValue(userByAccountSelector);
  const setToggleChange = useSetRecoilState(toggleChangeAtom);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  async function temp(di, field) {
    console.log("updating ", di, field);

    try {
      const t = !user[di][field];

      const obj = JSON.parse(JSON.stringify(user));

      obj[di][field] = t;

      console.log(obj);

      let done = await updateUsers(obj.id,obj);

      if (done) setToggleChange((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  }

  function toggleCheck(di, field) {
    //di is domestic/international

    //field is the checkbox field

    console.log("toggling....", di, field);

    temp(di, field);
  }

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-11/12 bg-white shadow-2xl rounded-2xl">
        <div className="flex justify-between p-8 bg-gray-300 rounded-xl">
          <div className="flex items-center">
            <div className="shadow-lg rounded-full w-12">
              <img src={ProfilePic} alt="" />
            </div>

            <div className="ml-4 text-2xl font-semibold text-neutral-700">
              Profile & Transactions Settings
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

        {/* names */}

        {user && (
          <>
            <div className="w-20 text-xl text-neutral-700 font-semibold ml-10 mt-4">
              Profile
            </div>

            <div className="flex flex-col  items-start ml-24 mt-4">
              <div className="font-semibold p-1">
                Account Holder
                <span className="ml-36 text-neutral-500"> Rajsekhar</span>
              </div>

              <div className="font-semibold p-1">
                Branch<span className="ml-52 text-neutral-500">Vijayawada</span>
              </div>

              <div className="font-semibold p-1">
                IFSC <span className="ml-56 text-neutral-500">MYBANK007</span>
              </div>

              <div className="font-semibold p-1">
                Virtual Payment Address
                <span className="ml-20 text-neutral-500">
                  7013322955@mybank
                </span>
              </div>

              <div className="font-semibold p-1">
                Account Balance
                <span className="ml-36 text-neutral-500">₹ 70,000</span>
              </div>

              <div className="font-semibold p-1">
                Card{" "}
                <span className="ml-56 text-neutral-500">
                  4160*********6274
                </span>
              </div>

              <div className="font-semibold p-1">
                Spend Limit
                <span className="ml-44 text-neutral-500">₹ 6,00,000.00</span>
              </div>
            </div>

            <div className="w-48 text-xl text-neutral-700 font-semibold ml-10 mt-8">
              Transactions Settings
            </div>

            <div className="flex justify-evenly">
              <div>
                <div className="w-48 text-xl text-orange-500 font-semibold ml-10 mt-8">
                  Domestic
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"Online Transactions"}
                    active={user.domestic.online}
                    di={"domestic"}
                    field={"online"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-gray-600">
                    E-commerce payments
                  </div>
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"offline Transactions"}
                    active={user.domestic.pos}
                    di={"domestic"}
                    field={"pos"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-gray-600">
                    In-store purchases
                  </div>
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"Tap & Pay"}
                    active={user.domestic.tapnpay}
                    di={"domestic"}
                    field={"tapnpay"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-neutral-600">
                    Easy, fast, contactless payments
                  </div>
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"ATM withdrawals"}
                    active={user.domestic.atm}
                    di={"domestic"}
                    field={"atm"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-gray-600">
                    WithDraw cash from any ATM in India
                  </div>
                </div>
              </div>

              <div>
                <div className="w-48 text-xl text-orange-500 font-semibold ml-10 mt-8">
                  International
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"Online Transactions"}
                    active={user.international.online}
                    di={"international"}
                    field={"online"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-gray-600">
                    E-commerce payments
                  </div>
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"offline Transactions"}
                    active={user.international.pos}
                    di={"international"}
                    field={"pos"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-gray-600">
                    In-store purchases
                  </div>
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"Tap & Pay"}
                    active={user.international.tapnpay}
                    di={"international"}
                    field={"tapnpay"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-neutral-600">
                    Easy, fast, contactless payments
                  </div>
                </div>

                <div className="w-72 rounded-xl bg-neutral-100 shadow-md p-3 m-4">
                  <Toggle
                    name={"ATM withdrawals"}
                    active={user.international.atm}
                    di={"international"}
                    field={"atm"}
                    fn={toggleCheck}
                  />

                  <div className="text-xs text-gray-600">
                    WithDraw cash from any ATM outside India
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
