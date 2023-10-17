import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Box>
      <Input type="text" onChange={handleEmail} value={email} />
      <Input type="text" onChange={handlePass} value={pass} />
      <Button type="submit" onClick={register}>
        S'enregistrer
      </Button>
    </Box>
  );
}
