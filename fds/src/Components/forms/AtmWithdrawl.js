import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { loggedUserSelector } from "../../Recoil/RecoilState";
import "./AtmWithdrawl.css";

const validateAccountNumber = (input) => /^\d{0,14}$/.test(input);

const validatePIN = (input) => /^\d{0,4}$/.test(input);

const useInputState = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (validator(newValue)) {
      setValue(newValue);
    }
  };

  return [value, handleChange];
};

const ATMWithdrawalForm = () => {
    const userData = useRecoilValue(loggedUserSelector);
  const [accountNumber, setAccountNumber] = useInputState(
    "",
    validateAccountNumber
  );

  const [pin, setPIN] = useInputState("", validatePIN);

  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [withdrawalStatus, setWithdrawalStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData[0].domestic.atm && !userData[0].card.freeze) {
        console.log("Payment Success");
      } else {
        console.log("Suspicious");
      }

    if (
      accountNumber.length === 14 &&
      pin.length === 4 &&
      parseFloat(withdrawalAmount) > 0
    ) {
      // Perform withdrawal logic here Rajsekhar part

      setSubmitted(true);

      setWithdrawalStatus("Withdrawal Successful!");
    } else {
      setWithdrawalStatus("Withdrawal Failed");
    }
  };

  const handleClearForm = () => {
    setAccountNumber("");

    setPIN("");

    setWithdrawalAmount("");

    setSubmitted(false);

    setWithdrawalStatus("");
  };

  return (
    <div className="atm-withdrawal-form-container">
      <div className="atm-withdrawal-form">
        <div className="withdrawal-header">
          <h2>ATM Withdrawal</h2>
        </div>

        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Account Number (14 digits)"
              value={accountNumber}
              onChange={setAccountNumber}
              maxLength="14"
              required
            />

            <input
              type="password"
              placeholder="PIN (4 digits)"
              value={pin}
              onChange={setPIN}
              maxLength="4"
              required
            />

            <input
              type="number"
              placeholder="Withdrawal Amount"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              required
            />

            {submitted ? (
              <div
                className={`submission-message ${
                  withdrawalStatus === "Withdrawal Successful!"
                    ? "success"
                    : "error"
                }`}
              >
                {withdrawalStatus}
              </div>
            ) : (
              <div className="buttons">
                <button type="submit">Enter</button>

                <button
                  type="button"
                  onClick={handleClearForm}
                  className="clear-button"
                >
                  Clear
                </button>
              </div>
            )}

            {withdrawalStatus === "Withdrawal Failed" && (
              <div
                className={`submission-message ${
                  withdrawalStatus === "Withdrawal Successful!"
                    ? "success"
                    : "error"
                }`}
              >
                Withdrawal Failed!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ATMWithdrawalForm;
