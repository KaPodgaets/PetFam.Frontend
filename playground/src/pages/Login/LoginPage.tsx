import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { getHello } from "../../api/hello";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const notify = (x: string) => toast(x);

  function handleEmailChange(email: string): void {
    setEmail(email);
  }

  function handlePasswordChange(password: string): void {
    setPassword(password);
  }

  function handleFormSubmit(event: React.FormEvent): void {
    event.preventDefault();
    console.log("form submitted");
    // form validation
    if (email.includes("@") == false) {
      setEmailError("Incorrect email");
      console.log({ emailError });
    }

    if (password.length < 6) {
      setEmailError("Incorrect password");
    }
    // send request

    const fetchHello = async () => {
      try {
        const result: string = await getHello();
      } catch (error) {
        notify("wow that's an error");
        console.error(error);
      }
    };
  }

  return (
    <div className="flex flex-col justify-center items-center my-auto h-full bg-white">
      <h1 className="text-2xl pb-4">Login</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={(event) => {
          handleFormSubmit(event);
        }}
      >
        <div className="py-2">
          <TextField
            value={email}
            id="email-input"
            label="Login"
            variant="outlined"
            onChange={(event) => handleEmailChange(event.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
        </div>
        <div className="py-2">
          <TextField
            id="password-input"
            value={password}
            label="Password"
            variant="outlined"
            type="password"
            onChange={(event) => handlePasswordChange(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2 items-center justify-center">
          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
