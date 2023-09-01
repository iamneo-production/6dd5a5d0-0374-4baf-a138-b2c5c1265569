import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { loggedUserSelector } from "../../Recoil/RecoilState";
import "./CardTransaction.css";

const TransactionalForm = () => {
    const userData = useRecoilValue(loggedUserSelector);

  const [cardNumber, setCardNumber] = useState("");

  const [name, setName] = useState("");

  const [cvv, setCVV] = useState("");

  const [expiration, setExpiration] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData[0].domestic.online && !userData[0].card.freeze) {
        console.log("Payment Success");
      } else {
        console.log("Suspicious");
      }


    if (cardNumber && name && cvv && expiration) {
      // Perform submission logic here  Rajsekhar Part
        

      setSubmitted(true);

    }
  };

  const handleClearForm = () => {
    setCardNumber("");

    setName("");

    setCVV("");

    setExpiration("");

    setSubmitted(false);
  };

  const formatCardNumber = (input) => {
    const cardNumberOnlyDigits = input.replace(/\D/g, "");

    const cardNumberFormatted = cardNumberOnlyDigits
      .replace(/(\d{4})/g, "$1 ")
      .trim();

    return cardNumberFormatted;
  };

  const formatExpiration = () => {
    if (expiration.length === 4) {
      return `${expiration.slice(0, 2)}/${expiration.slice(2)}`;
    }

    return expiration;
  };

  const isTransactionFailed = (cardNumber, expiration, cvv) => {
    return cardNumber.length < 19 || expiration.length < 4 || cvv.length < 3;
  };

  return (
    <div className="transactional-page">
      <div className="transactional-form">
        <h1>International Transaction</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Card Number (16 digits)"
            value={formatCardNumber(cardNumber)}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="19"
            required
          />

          <input
            type="text"
            placeholder="Name on Card"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <div className="expiration-cvv">
            <input
              id="exp"
              type="text"
              placeholder="Expiration (MM/YY)"
              value={formatExpiration()}
              onChange={(e) => setExpiration(e.target.value)}
              maxLength="5"
              required
            />

            <input
              id="cv"
              type="password"
              maxLength="3"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>

          <div>
            {submitted && (
              <div
                className={`submission-text ${
                  isTransactionFailed(cardNumber, expiration, cvv)
                    ? "failed"
                    : "submitted"
                }`}
              >
                {isTransactionFailed(cardNumber, expiration, cvv)
                  ? "Transaction Failed"
                  : "Success!"}
              </div>
            )}
          </div>

          <button type="submit">Submit</button>

          <button
            type="button"
            onClick={handleClearForm}
            className="clear-button"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionalForm;
