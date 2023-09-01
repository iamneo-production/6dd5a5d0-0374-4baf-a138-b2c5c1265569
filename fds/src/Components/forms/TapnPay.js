import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./TapnPay.css";
import contactLEss from "../Icons/card.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedUserSelector, toggleChangeAtom } from "../../Recoil/RecoilState";
import { updateUsers } from "../../Assets/services/BankService";

const DigitInputForm = () => {

  const setToggleChange = useSetRecoilState(toggleChangeAtom);
  const userData = useRecoilValue(loggedUserSelector);

  useEffect(() => {
    console.log(userData);

  }, [userData])

  function getDate() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with leading zero if needed
    const day = String(currentDate.getDate()).padStart(2, '0'); // Pad day with leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate; // Output will be in yyyy-mm-dd format

  }

  function getTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';

    // Convert hours to 12-hour format and ensure leading zero for single-digit hours
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

    // Ensure leading zero for minutes
    const formattedMinutes = minutes.toString().padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes}${amOrPm}`;

    return formattedTime; // Output will be in "hh:mmam/pm" format

  }

  async function fn(newObj) {
    try {
      const done = await updateUsers(newObj.id, newObj);
      if (done) setToggleChange(prev => prev + 1);
    } catch (err) {
      console.error(err);
    }
  }

  const [digit, setDigit] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "" || /^\d+$/.test(inputValue)) {
      if (parseInt(inputValue) <= 10000) {
        setDigit(inputValue);

        setErrorMessage("");
      } else {
        setErrorMessage("Amount should be less than 10000");
      }
    }
  };

  const handleClear = () => {
    setDigit("");
    setErrorMessage("");
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.domestic.tapnpay && !userData.card.freeze) {
      if (userData.balance >= digit) {
        alert("Payment Success amount of:" + digit);    // Rajsekhar Part
        const tObj = {
          to: "PETROL",
          from: userData.name,
          amount: parseFloat(`-${digit}`),
          date: getDate(),
          time: getTime(),
          type: "TAPnPAY"
        }
        const newObj = JSON.parse(JSON.stringify(userData));
        newObj.balance = newObj.balance - digit;
        newObj.transactions.push(tObj);
        fn(newObj);
      }

    } else {
      alert("Suspecious transaction of:" + digit);    // Rajsekhar Part
      const tObj = {
        to: "PETROL",
        from: userData.name,
        amount: parseFloat(`-${digit}`),
        date: getDate(),
        time: getTime(),
        type: "TAPnPAY"
      }
      const newObj = JSON.parse(JSON.stringify(userData));
      newObj.suspiciousTransactions.push(tObj);
      fn(newObj);
    }
  };
  return (
    <div className="form-container">
      <div className="tap-pay-header">
        <img
          src={contactLEss}
          height={40}
          width={40}
          className="tapnpayImg"
          alt="o"
        ></img>
        <Typography variant="h5" className="tapnpayText">
          Tap and Pay
        </Typography>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Amount"
          variant="outlined"
          value={digit}
          onChange={handleInputChange}
          error={!!errorMessage}
          helperText={errorMessage}
          className="input-field"
        />

        <div className="buttons-container">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!!errorMessage}
          >
            Submit
          </Button>

          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DigitInputForm;
