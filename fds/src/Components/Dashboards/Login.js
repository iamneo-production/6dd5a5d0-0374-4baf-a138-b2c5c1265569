import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getUserAtom,activeUser } from "../../Recoil/RecoilState";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const allUsers = useRecoilValue(getUserAtom);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const setLoginUser = useSetRecoilState(activeUser);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length >= 1;
    setEmailError(!isValidEmail);
    setPasswordError(!isValidPassword);

    if (isValidEmail && isValidPassword) {

        const userObj = allUsers.find(user=>user.email === email && user.password === password);
        if (userObj) {
            localStorage.setItem("authenticated", true);
            localStorage.setItem("accountNo", userObj.accountNo);
            setLoginUser(userObj);
        }
        if (userObj === undefined) {
            setEmailError(true);
            setPasswordError(true);
        } else if (userObj.role === "customer") {
            navigate("/userdashboard");
        } else if (userObj.role === "staff") {
            navigate("/staffdashboard");
        } else if (userObj.role === "manager") {
            navigate("/managerdashboard");
        }
    }
  };

  return (
    <Container maxWidth="xs">
      <div className="flex flex-col h-screen justify-center items-center ">
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Invalid email" : ""}
            InputProps={{
              startAdornment: <Email />,
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={
              passwordError ? "Password must be at least 8 characters" : ""
            }
            InputProps={{
              startAdornment: <Lock />,
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
