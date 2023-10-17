import React, { useContext } from "react";
import { Typography } from "@mui/material";
import Register from "../components/Register";
import SignIn from "../components/SignIn";
import { authContext } from "../components/Auth";

export default function Home() {
  const user = useContext(authContext);
  return user ? (
    <div>Bienvenue</div>
  ) : (
    <div>
      {" "}
      <Register />
      <SignIn />
    </div>
  );
}
