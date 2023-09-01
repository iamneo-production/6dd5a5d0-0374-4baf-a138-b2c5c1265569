import React, { useState } from "react";

import "./AddUser.css"; // Import CSS for styling

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "customer",
    email: "",
    password: "",
    accountNo: "",
    accountType: "Savings",
    phoneNo: "",
    debitCardNo: "",
    online: true,
    pos: true,
    tapnpay: false,
    atm: true,
    card: {
      card: 0,
      pin: 0,
      freeze: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Transform data into the desired JSON format
    const user = {
      id: formData.accountNo,
      name: formData.name,
      role: formData.role,
      email: formData.email,
      password: formData.password,
      accountNo: formData.accountNo,
      accountType: formData.accountType,
      phoneNo: formData.phoneNo,
      debitCardNo: formData.debitCardNo,
      transactions: [],
      domestic: {
        online: formData.online,
        pos: formData.pos,
        tapnpay: formData.tapnpay,
        atm: formData.atm,
      },
      international: {
        online: formData.online,
        pos: formData.pos,
        tapnpay: formData.tapnpay,
        atm: false, // Assuming international ATM is always false based on your example
      },
      card: {
        card: formData.card.card,
        pin: formData.card.pin,
        freeze: formData.card.freeze,
      },
    };

    console.log(user); // Display the transformed JSON object
  };

  return (
    <div className="auth-container">
      <h2>Add new "User"</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Account Number"
          name="accountNo"
          value={formData.accountNo}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Debit Card Number"
          name="debitCardNo"
          value={formData.debitCardNo}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default AddCustomer;
